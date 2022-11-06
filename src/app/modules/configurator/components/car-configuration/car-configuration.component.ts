import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Configuration } from 'src/app/shared/models/Configuration'
import { StoreService } from 'src/app/shared/services/store/store.service'

@Component({
  selector: 'app-car-configuration',
  templateUrl: './car-configuration.component.html',
  styleUrls: ['./car-configuration.component.scss']
})
export class CarConfigurationComponent implements OnInit {
  configuration$: Observable<Configuration>

  constructor (private store: StoreService) {}

  ngOnInit () {
    this.configuration$ = this.store.configuration$
  }
}
