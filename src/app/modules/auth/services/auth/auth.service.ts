import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor (public firebaseAuth: AngularFireAuth, private router: Router) {}
  user: any | undefined
  isLoggedIn = false
  redirectUrl: string | null = null

  signIn (email: string, password: string) {
    console.log('prvo logiram')
    return this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then(result => {
        console.log(result)
        this.user = result
        this.isLoggedIn = true
        console.log(this.isLoggedIn)
        this.router.navigateByUrl('configurator')
      })
      .catch(error => {
        console.log(error)
      })
  }

  signUp (email: string, password: string) {
    return this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then(result => {
        console.log(result)
        this.isLoggedIn = true
      })
      .catch(error => {
        console.log(error)
      })
  }

  signOut () {
    return this.firebaseAuth
      .signOut()
      .then(() => {
        console.log('logged out')
        this.isLoggedIn = false
      })
      .catch(error => {
        console.log(error)
      })
  }
}
