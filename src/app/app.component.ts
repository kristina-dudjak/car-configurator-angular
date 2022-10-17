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

  ngOnInit () {
    this.authService.user.subscribe((user: any) => {
      this.user$.next(user)
    })
  }

  ngOnDestroy () {
    this.user$.unsubscribe()
  }

  signOut () {
    this.authService.signOut()
  }
}
