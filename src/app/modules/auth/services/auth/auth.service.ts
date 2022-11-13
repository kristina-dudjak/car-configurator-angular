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

  updateUserState (user: firebase.User) {
    if (!user) return
    this.setState({
      user: {
        id: user.uid,
        email: user.email,
        configurations: []
      }
    })
    this.getConfigurations(user.uid)
  }

  updateErrorMessageState (errorMessage: string) {
    this.setState({ errorMessage })
  }

  updateUserConfigurations (configs: Configuration[]) {
    const { configurations, ...rest } = this.state.user
    this.setState({
      user: {
        configurations: configs,
        ...rest
      }
    })
  }

  removeConfigurationFromUserConfigurations (configuration: Configuration) {
    const { configurations, ...rest } = this.state.user
    this.setState({
      user: {
        configurations: configurations.filter(
          config => config !== configuration
        ),
        ...rest
      }
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
    const {
      id,
      carName,
      year,
      price,
      color,
      interior,
      wheel,
      creationDate
    } = configuration
    this.db
      .collection(`users/${user.id}/configurations`)
      .doc(configuration.id.toString())
      .set(
        {
          id: id,
          carName: carName,
          year: year,
          price: price,
          color: color,
          interior: interior,
          wheel: wheel,
          creationDate: creationDate
        },
        { merge: true }
      )
      .then(() => this.getConfigurations(user.id))
  }

  deleteUserConfiguration (configuration: Configuration, user: User) {
    this.db.doc(`users/${user.id}/configurations/${configuration.id}`).delete()
    this.removeConfigurationFromUserConfigurations(configuration)
  }

  getConfigurations (uid: string) {
    firstValueFrom(
      this.db
        .collection(`users/${uid}/configurations`)
        .valueChanges()
        .pipe(
          map(configurations => {
            this.updateUserConfigurations(configurations as Configuration[])
          })
        )
    )
  }
}
