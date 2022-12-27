import { Component } from '@angular/core'
import { AuthService } from 'src/app/modules/auth/services/auth/auth.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor (private authService: AuthService) {}
  user$ = this.authService.user$
}
