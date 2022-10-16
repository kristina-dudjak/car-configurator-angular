import { Component } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { AuthService } from '../../services/auth/auth.service'
import { ValidationService } from '../../services/validation/validation.service'

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent {
  constructor (private authService: AuthService, private fb: FormBuilder) {}

  emailForm = this.fb.group(
    {
      emailReset: ['', [Validators.required, Validators.email]]
    },
    {
      validators: [ValidationService.validator('emailReset')],
      updateOn: 'blur'
    }
  )

  firebaseError: string | undefined = ''

  sendEmail () {
    if (!this.emailForm.valid) return
    this.authService
      .sendPasswordResetEmail(this.emailForm.value.emailReset as string)
      .then(() => {
        this.firebaseError = this.authService.errorMessage
      })
  }
}
