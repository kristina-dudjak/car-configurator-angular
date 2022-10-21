import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router'
import firebase from 'firebase/compat/app'
import { BehaviorSubject } from 'rxjs'
import { DataService } from 'src/app/services/dataService/data.service'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _user$ = new BehaviorSubject<firebase.User | null>(null)
  private errorMessage$ = new BehaviorSubject<string | null>(null)
  constructor (
    private firebaseAuth: AngularFireAuth,
    private router: Router,
    private dataService: DataService
  ) {
    this.firebaseAuth.onAuthStateChanged(user => {
      this._user$.next(user)
    })
  }

  get user$ () {
    return this._user$.asObservable()
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
            this._user$.next(result.user)
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
            this._user$.next(result.user)
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
            this._user$.next(result.user)
            console.log(result.user)
            // if ((result.user?.uid, result.user?.email))
            //   this.dataService
            //     .addUser({
            //       id: result.user?.uid,
            //       email: result.user?.email
            //     })
            //     .subscribe(resp => {
            //       console.log(resp)
            //       this.dataService.getUsers().subscribe(users => {
            //         console.log(users)
            //       })
            //     })
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
        this._user$.next(null)
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
