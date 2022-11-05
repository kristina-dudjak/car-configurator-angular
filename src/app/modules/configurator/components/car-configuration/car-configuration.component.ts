import { Component, OnInit } from '@angular/core'
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
  configuration$: Observable<Configuration>

  constructor (private store: StoreService, private location: Location) {}

  ngOnInit () {
    this.configuration$ = this.store.configuration$
  }

  goBack () {
    this.location.back()
  }
}
