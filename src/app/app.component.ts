import { Component } from '@angular/core'
import { AuthService } from './modules/auth/services/auth/auth.service'
import { IconsService } from './shared/services/icons/icons.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor (
    private readonly authService: AuthService,
    private readonly iconsService: IconsService
  ) {
    this.iconsService.addIcons()
  }

  signOut () {
    this.authService.signOut()
  }
}
