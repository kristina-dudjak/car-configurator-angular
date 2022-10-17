import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router'
import firebase from 'firebase/compat/app'
import { BehaviorSubject } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user$ = new BehaviorSubject<firebase.User | null>(null)
  private _errorMessage: string | undefined
  constructor (private firebaseAuth: AngularFireAuth, private router: Router) {
    this.firebaseAuth.onAuthStateChanged(user => {
      this.user$.next(user)
    })
  }
  redirectUrl: string | null = null

  get user () {
    return this.user$.asObservable()
  }

  get errorMessage () {
    return this._errorMessage
  }

  set errorMessage (message: string | undefined) {
    this._errorMessage = message
  }

  googleSignIn (rememberMe: boolean) {
    return this.firebaseAuth
      .setPersistence(rememberMe ? 'local' : 'session')
      .then(() => {
        this.firebaseAuth
          .signInWithPopup(new firebase.auth.GoogleAuthProvider())
          .then(result => {
            this.user$.next(result.user)
          })
          .catch(error => {
            this._errorMessage = error.message
          })
      })
  }

  signIn (email: string, password: string, rememberMe: boolean) {
    return this.firebaseAuth
      .setPersistence(rememberMe ? 'local' : 'session')
      .then(() => {
        this.firebaseAuth
          .signInWithEmailAndPassword(email, password)
          .then(result => {
            this.user$.next(result.user)
          })
          .catch(error => {
            this._errorMessage = error.message
          })
      })
  }

  signUp (email: string, password: string, rememberMe: boolean) {
    return this.firebaseAuth
      .setPersistence(rememberMe ? 'local' : 'session')
      .then(() => {
        this.firebaseAuth
          .createUserWithEmailAndPassword(email, password)
          .then(result => {
            this.user$.next(result.user)
          })
          .catch(error => {
            this._errorMessage = error.message
          })
      })
  }

  signOut () {
    return this.firebaseAuth
      .signOut()
      .then(() => {
        this.user$.next(null)
        this.router.navigateByUrl('login')
      })
      .catch(error => {
        this._errorMessage = error.message
      })
  }

  sendPasswordResetEmail (email: string) {
    return this.firebaseAuth.sendPasswordResetEmail(email).catch(error => {
      this._errorMessage = error.message
    })
  }
}
