import { Component } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthService } from '../../services/auth/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor (public authService: AuthService, public router: Router) {}

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      // 8 characters, 1 number min, 1 special char min
      Validators.pattern(
        '^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
      )
    ])
  })
  hide = true

  onSubmit () {
    console.log(this.loginForm.value)
    if (!this.loginForm.valid) {
      return
    }
    this.authService.signIn(
      this.loginForm.value.email as string,
      this.loginForm.value.password as string
    )
  }
}
