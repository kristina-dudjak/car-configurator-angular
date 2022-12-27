import { Component, Input, OnInit } from '@angular/core'
import { AngularFireStorage } from '@angular/fire/compat/storage'
import { Router } from '@angular/router'
import { Observable } from 'rxjs'
import { AuthService } from 'src/app/modules/auth/services/auth/auth.service'
import { Configuration } from 'src/app/shared/models/Configuration'
import { User } from 'src/app/shared/models/User'
import { StoreService } from 'src/app/shared/services/store/store.service'

@Component({
  selector: 'app-saved-configuration',
  templateUrl: './saved-configuration.component.html',
  styleUrls: ['./saved-configuration.component.scss']
})
export class SavedConfigurationComponent implements OnInit {
  constructor (
    private storage: AngularFireStorage,
    private authService: AuthService,
    private store: StoreService,
    private router: Router
  ) {}
  @Input() configuration: Configuration
  @Input() user: User
  configurationImg$: Observable<string>

  ngOnInit (): void {
    this.configurationImg$ = this.storage
      .ref(
        `images/${this.configuration.carName}/exteriors/${this.configuration.color.id}${this.configuration.wheel.id}/3.png`
      )
      .getDownloadURL()
  }

  deleteConfiguration () {
    this.authService.deleteUserConfiguration(this.configuration, this.user)
    this.router.navigateByUrl('configurator')
  }

  editConfiguration () {
    this.store.updateConfigurationState(this.configuration)
    this.router.navigateByUrl(`configurator/cars/${this.configuration.carName}`)
  }
}
