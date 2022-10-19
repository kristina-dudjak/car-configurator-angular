import { Component } from '@angular/core'
import { Validators } from '@angular/forms'
import { AuthService } from '../../services/auth/auth.service'
import { FormBuilder } from '@angular/forms'
import { ValidationService } from '../../services/validation/validation.service'
import { PasswordRegex } from 'src/app/shared/const/PasswordRegex'
import { BehaviorSubject } from 'rxjs'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor (private authService: AuthService, private fb: FormBuilder) {}

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
  firebaseError$ = new BehaviorSubject<string | null>(null)
  rememberMe = true

  ngOnInit () {
    this.authService.errorMessage.subscribe((message: string | null) => {
      this.firebaseError$.next(message)
    })
  }

  ngOnDestroy () {
    this.firebaseError$.unsubscribe()
  }
  onRegister () {
    if (!this.registerForm.valid) {
      return
    }
    this.authService.signUp(
      this.registerForm.value.email as string,
      this.registerForm.value.password as string,
      this.rememberMe
    )
  }

  onGoogleLogin () {
    this.authService.googleSignIn(this.rememberMe)
  }
}
