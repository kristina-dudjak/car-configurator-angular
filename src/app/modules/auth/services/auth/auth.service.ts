import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { Router } from '@angular/router'
import firebase from 'firebase/compat/app'
import { firstValueFrom, map } from 'rxjs'
import { Store } from 'src/app/shared/classes/store.class'
import { Configuration } from 'src/app/shared/models/Configuration'
import { User } from 'src/app/shared/models/User'
interface AuthInterface {
  user: User
  errorMessage: string
}

const initialState: AuthInterface = {
  user: null,
  errorMessage: undefined
}

@Injectable({
  providedIn: 'root'
})
export class AuthService extends Store<AuthInterface> {
  constructor (
    private firebaseAuth: AngularFireAuth,
    private router: Router,
    private db: AngularFirestore
  ) {
    super(initialState)
    this.firebaseAuth.onAuthStateChanged(user => {
      this.updateUserState(user)
    })
  }
  user$ = this.select(({ user }) => user)
  errorMessage$ = this.select(({ errorMessage }) => errorMessage)

  async updateUserState (user: firebase.User) {
    if (!user) return
    this.setState({
      user: {
        id: user.uid,
        email: user.email,
        configurations: await this.initialSavedConfigurationsLoad(user.uid)
      }
    })
  }

  updateErrorMessageState (errorMessage: string) {
    this.setState({ errorMessage })
  }

  addConfigurationToUserConfigurations (conf: Configuration) {
    const { configurations, ...rest } = this.state.user
    this.setState({
      user: { configurations: [...configurations, conf], ...rest }
    })
  }

  googleSignIn (rememberMe: boolean) {
    return this.firebaseAuth
      .setPersistence(rememberMe ? 'local' : 'session')
      .then(() => {
        this.firebaseAuth
          .signInWithPopup(new firebase.auth.GoogleAuthProvider())
          .then(result => {
            this.updateUserState(result.user)
            this.router.navigateByUrl('configurator')
          })
          .catch(error => {
            this.updateErrorMessageState(error.message)
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
            this.updateUserState(result.user)
            this.router.navigateByUrl('configurator')
          })
          .catch(error => {
            this.updateErrorMessageState(error.message)
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
            this.updateUserState(result.user)
            this.router.navigateByUrl('configurator')
          })
          .catch(error => {
            this.updateErrorMessageState(error.message)
          })
      })
  }

  signOut () {
    return this.firebaseAuth
      .signOut()
      .then(() => {
        this.updateUserState(null)
        this.router.navigateByUrl('login')
      })
      .catch(error => {
        this.updateErrorMessageState(error.message)
      })
  }

  sendPasswordResetEmail (email: string) {
    return this.firebaseAuth.sendPasswordResetEmail(email).catch(error => {
      this.updateErrorMessageState(error.message)
    })
  }

  saveUserConfiguration (configuration: Configuration, user: User) {
    this.db.doc(`users/${user.id}`).set(
      {
        configurations: firebase.firestore.FieldValue.arrayUnion(configuration)
      },
      { merge: true }
    )
    this.addConfigurationToUserConfigurations(configuration)
  }

  initialSavedConfigurationsLoad (uid: string) {
    return firstValueFrom(
      this.db
        .doc(`users/${uid}`)
        .snapshotChanges()
        .pipe(
          map(changes => {
            const data = changes.payload.get('configurations')
            if (!data) return []
            return data
          })
        )
    )
  }
}
