import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { map } from 'rxjs'
import { AuthService } from 'src/app/modules/auth/services/auth/auth.service'
import { Configuration } from 'src/app/shared/models/Configuration'
import { User } from 'src/app/shared/models/User'
import { StoreService } from 'src/app/shared/services/store/store.service'

@Component({
  selector: 'app-car-configuration',
  templateUrl: './car-configuration.component.html',
  styleUrls: ['./car-configuration.component.scss']
})
export class CarConfigurationComponent implements OnInit {
  constructor (
    private store: StoreService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  configuration$ = this.store.configuration$.pipe(
    map(configuration => {
      if (!configuration || configuration.carName !== this.name)
        this.store.initialConfigurationLoad(this.name)
      return configuration
    })
  )
  user$ = this.authService.user$
  name: string

  ngOnInit () {
    this.name = this.route.snapshot.paramMap.get('name')
  }

  deleteConfiguration (configuration: Configuration, user: User) {
    this.authService.deleteUserConfiguration(configuration, user)
    this.router.navigateByUrl('configurator')
  }
}
