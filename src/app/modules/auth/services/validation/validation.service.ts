import { Injectable } from '@angular/core'
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms'

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  static passwordValidator: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    const password = control.get('password')
    const repeatPassword = control.get('repeatPassword')
    return password && repeatPassword && password.value === repeatPassword.value
      ? null
      : { repeatPassword: false }
  }
}
