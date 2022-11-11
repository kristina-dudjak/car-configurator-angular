import { Component, Input, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { AuthService } from 'src/app/modules/auth/services/auth/auth.service'
import { Configuration } from 'src/app/shared/models/Configuration'
import { Router } from '@angular/router'
import { User } from 'src/app/shared/models/User'

@Component({
  selector: 'app-configuration-footer',
  templateUrl: './configuration-footer.component.html',
  styleUrls: ['./configuration-footer.component.scss']
})
export class ConfigurationFooterComponent implements OnInit {
  @Input() configuration: Configuration
  user$: Observable<User | null>

  constructor (private authService: AuthService, private router: Router) {}

  ngOnInit (): void {
    this.user$ = this.authService.user$
  }

  saveConfiguration (user: User) {
    this.authService.saveUserConfiguration(this.configuration, user)
    this.router.navigateByUrl('configurator')
  }
}
