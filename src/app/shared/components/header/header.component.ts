import { Component, Input } from '@angular/core'
import { Observable } from 'rxjs'
import { AuthService } from 'src/app/modules/auth/services/auth/auth.service'
import { User } from '../../models/User'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor (private authService: AuthService) {}
  @Input() user$: Observable<User | undefined>

  signOut () {
    this.authService.signOut()
  }
}
