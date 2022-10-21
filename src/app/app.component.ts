import { Component, OnInit } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { AuthService } from './modules/auth/services/auth/auth.service'
import { IconsService } from './shared/services/icons/icons.service'
import firebase from 'firebase/compat/app'
import { AngularFireFunctions } from '@angular/fire/compat/functions'
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/compat/firestore'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private doc: AngularFirestoreDocument<any>
  constructor (
    private readonly authService: AuthService,
    private readonly iconsService: IconsService,
    private fn: AngularFireFunctions,
    private store: AngularFirestore
  ) {
    this.iconsService.addIcons()
    // const callable = fn.httpsCallable('addUserToDb')({})
    this.doc = this.store.doc<any>('users')
  }
  user$ = new BehaviorSubject<firebase.User | null>(null)
  firebaseError$ = new BehaviorSubject<string | null>(null)

  ngOnInit () {
    this.authService.user$.subscribe((user: any) => {
      this.user$.next(user)
      console.log('aaa')
      if (user) this.fn.httpsCallable('addUserToDb')({ user })
    })
    this.authService.errorMessage.subscribe((message: any) => {
      this.firebaseError$.next(message)
    })
  }

  ngOnDestroy () {
    this.user$.unsubscribe()
    this.firebaseError$.unsubscribe()
  }

  signOut () {
    this.authService.signOut()
  }
}
