import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { AuthService } from 'src/app/modules/auth/services/auth/auth.service'
import { User } from 'src/app/shared/models/User'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user$: Observable<User>

  constructor (private authService: AuthService) {}

  ngOnInit () {
    this.user$ = this.authService.user$
  }
}
