import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router'
import firebase from 'firebase/compat/app'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _user: any
  private _errorMessage: string | undefined
  constructor (private firebaseAuth: AngularFireAuth, private router: Router) {
    firebaseAuth.onAuthStateChanged(user => {
      this._user = user
    })
  }
  redirectUrl: string | null = null

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

  googleSignIn () {
    return this.firebaseAuth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(result => {
        this._user = result.user
      })
      .catch(error => {
        this._errorMessage = error.message
      })
  }

  signIn (email: string, password: string) {
    return this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then(result => {
        this._user = result.user
      })
      .catch(error => {
        this._errorMessage = error.message
      })
  }

  signUp (email: string, password: string) {
    return this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then(result => {
        this._user = result.user
      })
      .catch(error => {
        this._errorMessage = error.message
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
