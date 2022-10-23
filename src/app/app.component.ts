import { Component, OnInit } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { AuthService } from './modules/auth/services/auth/auth.service'
import { IconsService } from './shared/services/icons/icons.service'
import firebase from 'firebase/compat/app'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor (
    private readonly authService: AuthService,
    private readonly iconsService: IconsService
  ) {
    this.iconsService.addIcons()
  }
  user$ = new BehaviorSubject<firebase.User | null>(null)
  firebaseError$ = new BehaviorSubject<string | null>(null)

  ngOnInit () {
    this.authService.user$.subscribe((user: any) => {
      this.user$.next(user)
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
