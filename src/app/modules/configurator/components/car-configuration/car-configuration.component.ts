import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Observable } from 'rxjs'
import { Configuration } from 'src/app/shared/models/Configuration'
import { StoreService } from 'src/app/shared/services/store/store.service'
import { Location } from '@angular/common'

@Component({
  selector: 'app-car-configuration',
  templateUrl: './car-configuration.component.html',
  styleUrls: ['./car-configuration.component.scss']
})
export class CarConfigurationComponent implements OnInit {
  name: string
  configuration$: Observable<Configuration>

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
