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
  private errorMessage$ = new BehaviorSubject<string | null>(null)
  constructor (private firebaseAuth: AngularFireAuth, private router: Router) {
    this.firebaseAuth.onAuthStateChanged(user => {
      this.user$.next(user)
    })
  }

  get user () {
    return this.user$.asObservable()
  }

  get errorMessage () {
    return this.errorMessage$.asObservable()
  }

  googleSignIn (rememberMe: boolean) {
    return this.firebaseAuth
      .setPersistence(rememberMe ? 'local' : 'session')
      .then(() => {
        this.firebaseAuth
          .signInWithPopup(new firebase.auth.GoogleAuthProvider())
          .then(result => {
            this.user$.next(result.user)
            this.router.navigateByUrl('configurator')
          })
          .catch(error => {
            this.errorMessage$.next(error.message)
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
            this.router.navigateByUrl('configurator')
          })
          .catch(error => {
            this.errorMessage$.next(error.message)
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
            this.router.navigateByUrl('configurator')
          })
          .catch(error => {
            this.errorMessage$.next(error.message)
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
        this.errorMessage$.next(error.message)
      })
  }

  sendPasswordResetEmail (email: string) {
    return this.firebaseAuth.sendPasswordResetEmail(email).catch(error => {
      this.errorMessage$.next(error.message)
    })
  }
}
