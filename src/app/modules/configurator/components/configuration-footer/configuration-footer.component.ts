import { Component, Input } from '@angular/core'
import { AuthService } from 'src/app/modules/auth/services/auth/auth.service'
import { Configuration } from 'src/app/shared/models/Configuration'
import { Router } from '@angular/router'
import { User } from 'src/app/shared/models/User'

@Component({
  selector: 'app-configuration-footer',
  templateUrl: './configuration-footer.component.html',
  styleUrls: ['./configuration-footer.component.scss']
})
export class ConfigurationFooterComponent {
  constructor (private authService: AuthService, private router: Router) {}
  @Input() configuration: Configuration
  user$ = this.authService.user$

  saveConfiguration (user: User) {
    this.authService.saveUserConfiguration(this.configuration, user)
    this.router.navigateByUrl('configurator')
  }
}
