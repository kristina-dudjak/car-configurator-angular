import { Component } from '@angular/core'
import { Validators } from '@angular/forms'
import { AuthService } from '../../services/auth/auth.service'
import { FormBuilder } from '@angular/forms'
import { Router } from '@angular/router'
import { ValidationService } from '../../services/validation/validation.service'
import { PasswordRegex } from 'src/app/shared/const/PasswordRegex'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor (
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  registerForm = this.fb.group(
    {
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(PasswordRegex)
        ]
      ],
      repeatPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(PasswordRegex)
        ]
      ]
    },
    {
      validators: [
        ValidationService.validator('email'),
        ValidationService.validator('password'),
        ValidationService.validator('repeatPassword')
      ],
      updateOn: 'blur'
    }
  )

  isPasswordVisible = true
  isPasswordRepeatVisible = true
  firebaseError: string | undefined = ''
  rememberMe = true
  onRegister () {
    if (!this.registerForm.valid) {
      return
    }
    this.authService
      .signUp(
        this.registerForm.value.email as string,
        this.registerForm.value.password as string,
        this.rememberMe
      )
      .then(() => {
        this.firebaseError = this.authService.errorMessage
        this.router.navigateByUrl('configurator')
      })
  }

  onGoogleLogin () {
    this.authService.googleSignIn(this.rememberMe).then(() => {
      this.firebaseError = this.authService.errorMessage
      this.router.navigateByUrl('configurator')
    })
  }
}
