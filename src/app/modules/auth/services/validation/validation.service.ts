import { Injectable } from '@angular/core'
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms'
import { ValidationMessages } from 'src/app/shared/const/ValidationMessages'

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  static validator (controlName: string) {
    return (control: AbstractControl): ValidationErrors | null => {
      const form = control.get(controlName)
      if (form?.hasError('required'))
        return { [controlName]: ValidationMessages.required }
      else if (form?.hasError('email'))
        return { [controlName]: ValidationMessages.email }
      else if (form?.hasError('pattern'))
        return { [controlName]: ValidationMessages.pattern }
      else if (form?.hasError('minLength'))
        return { [controlName]: ValidationMessages.minLength }
      else if (
        controlName === 'repeatPassword' &&
        control.get('repeatPassword')?.value !== control.get('password')?.value
      ) {
        form?.setErrors({ [controlName]: true })
        return { [controlName]: ValidationMessages.mismatch }
      } else return null
    }
  }
}
