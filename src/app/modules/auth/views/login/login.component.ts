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
  constructor (private authService: AuthService, private router: Router) {}

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(
        // 8 characters, min 1 number, min 1 special char
        '^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
      )
    ])
  })
  isPasswordVisible = true
  firebaseError: string | undefined = ''
  onLogin () {
    if (!this.loginForm.valid) return
    this.authService
      .signIn(
        this.loginForm.value.email as string,
        this.loginForm.value.password as string
      )
      .then(() => {
        this.firebaseError = this.authService.errorMessage
        this.router.navigateByUrl('configurator')
      })
  }
}
