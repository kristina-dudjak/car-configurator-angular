import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { AuthService } from './modules/auth/services/auth/auth.service'
import { IconsService } from './shared/services/icons/icons.service'
import { User } from './shared/models/User'
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
  user$: Observable<User | null>

  ngOnInit () {
    this.user$ = this.authService.user$
  }

  signOut () {
    this.authService.signOut()
  }
}
