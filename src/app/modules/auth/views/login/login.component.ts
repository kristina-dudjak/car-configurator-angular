import { Component } from '@angular/core'
import { Validators } from '@angular/forms'
import { AuthService } from '../../services/auth/auth.service'
import { FormBuilder } from '@angular/forms'
import { ValidationService } from '../../services/validation/validation.service'
import { PasswordRegex } from 'src/app/shared/const/PasswordRegex'
import { MatDialog } from '@angular/material/dialog'
import { PasswordResetComponent } from '../../components/password-reset/password-reset.component'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor (
    private authService: AuthService,
    private fb: FormBuilder,
    public dialog: MatDialog
  ) {}
  errorMessage$ = this.authService.errorMessage$

  loginForm = this.fb.group(
    {
      email: ['', [Validators.required, Validators.email]],
      password: [
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
        ValidationService.validator('password')
      ],
      updateOn: 'change'
    }
  )

  isPasswordVisible = true
  rememberMe = true

  onLogin () {
    if (!this.loginForm.valid) return
    this.authService.signIn(
      this.loginForm.value.email as string,
      this.loginForm.value.password as string,
      this.rememberMe
    )
  }

  onGoogleLogin () {
    this.authService.googleSignIn(this.rememberMe)
  }

  openEmailDialog () {
    this.dialog.open(PasswordResetComponent)
  }
}
