import { Component } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../../services/auth/auth.service'
import { Router } from '@angular/router'
import { ValidationService } from '../../services/validation/validation.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor (private authService: AuthService, private router: Router) {}
  registerForm = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(
          // 8 characters, min 1 number, min 1 special char
          '^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
        )
      ]),
      repeatPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(
          // 8 characters, min 1 number, min 1 special char
          '^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
        )
      ])
    },
    { validators: ValidationService.passwordValidator }
  )
  isPasswordVisible = true
  isPasswordRepeatVisible = true
  firebaseError: string | undefined = ''
  onRegister () {
    if (!this.registerForm.valid) {
      return
    }
    this.authService
      .signUp(
        this.registerForm.value.email as string,
        this.registerForm.value.password as string
      )
      .then(() => {
        this.firebaseError = this.authService.errorMessage
        this.router.navigateByUrl('configurator')
      })
  }
}
