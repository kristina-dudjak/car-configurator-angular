import { Component } from '@angular/core'
import { Validators } from '@angular/forms'
import { AuthService } from '../../services/auth/auth.service'
import { FormBuilder } from '@angular/forms'
import { ValidationService } from '../../services/validation/validation.service'
import { PasswordRegex } from 'src/app/shared/const/PasswordRegex'
import { BehaviorSubject, Observable } from 'rxjs'
import { DataService } from 'src/app/services/dataService/data.service'
import firebase from 'firebase/compat/app'
import { switchMap, filter } from 'rxjs/operators'
import { User } from 'src/app/shared/models/User'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor (
    private authService: AuthService,
    private fb: FormBuilder,
    private dataService: DataService
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
        ValidationService.validator('repeatPassword'),
        ValidationService.passwordMatchValidator('repeatPassword')
      ],
      updateOn: 'blur'
    }
  )

  isPasswordVisible = true
  isPasswordRepeatVisible = true
  firebaseError$ = new BehaviorSubject<string | null>(null)
  rememberMe = true
  user$ = new BehaviorSubject<firebase.User | null>(null)

  ngOnInit () {
    this.authService.errorMessage.subscribe((message: string | null) => {
      this.firebaseError$.next(message)
    })
    this.authService.user$
      .pipe(
        filter(user => !!user),
        switchMap(user =>
          this.dataService.addUser({
            id: user!.uid,
            email: user!.email!,
            configurations: []
          })
        )
      )
      .subscribe()

    // .subscribe(user => {
    //   if (user) {
    //     this.dataService
    //       .addUser({
    //         id: user.uid,
    //         email: user.email!,
    //         configurations: []
    //       })
    //       .subscribe(addedUser => {
    //         console.log(addedUser)
    //         this.dataService.getUsers().subscribe(users => {
    //           console.log(users)
    //         })
    //       })
    //     this.dataService.getCars().subscribe(cars => {
    //       console.log(cars)
    //     })
    //   }
    // })
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
