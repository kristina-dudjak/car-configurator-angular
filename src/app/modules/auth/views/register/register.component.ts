import { Component } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ValidationService } from '../../services/validation.service'
import { AuthService } from '../../services/auth/auth.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor (public authService: AuthService) {}
  registerForm = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(
          '^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
        )
      ]),
      repeatPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(
          '^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
        )
      ])
    },
    { validators: ValidationService.passwordValidator }
  )
  hide = true
  passRepeat = true

  onSubmit () {
    console.log(this.registerForm.value)
    if (this.registerForm.value.email && this.registerForm.value.password) {
      this.authService.signUp(
        this.registerForm.value.email,
        this.registerForm.value.password
      )
    }
  }
}
