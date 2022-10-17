import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router'
import firebase from 'firebase/compat/app'
import { Observable, of } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _user: any
  private _errorMessage: string | undefined
  constructor (private firebaseAuth: AngularFireAuth, private router: Router) {
    this.firebaseAuth.onAuthStateChanged(user => {
      this._user = user
    })
  }
  redirectUrl: string | null = null

  getUser$ (): Observable<any> {
    return of(this._user)
  }

  get user () {
    return this._user
  }

  set user (user: any) {
    this._user = user
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
            this._user = result.user
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
            this._user = result.user
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
            this._user = result.user
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
        this._user = null
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
