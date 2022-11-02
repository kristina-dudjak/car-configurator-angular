import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Observable } from 'rxjs'
import { Configuration } from 'src/app/shared/models/Configuration'
import { StoreService } from 'src/app/shared/services/store/store.service'
import { Location } from '@angular/common'
@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {
  name: string
  configuration$: Observable<Configuration | null>

  constructor (
    private route: ActivatedRoute,
    private store: StoreService,
    private router: Router,
    private location: Location
  ) {
    this.route.params.subscribe(params => {
      this.name = params['name']
    })
  }

  ngOnInit () {
    this.store.initialConfigurationLoad(this.name)
    this.configuration$ = this.store.configuration$
  }

  goToExterior () {
    this.router.navigateByUrl(`configurator/cars/${this.name}/exterior`)
  }

  goBack () {
    this.location.back()
  }
}
