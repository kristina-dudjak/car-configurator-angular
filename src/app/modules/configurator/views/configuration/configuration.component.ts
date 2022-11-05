import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs'
import { Configuration } from 'src/app/shared/models/Configuration'
import { StoreService } from 'src/app/shared/services/store/store.service'
@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {
  name: string
  configuration$: Observable<Configuration | undefined>

  constructor (private route: ActivatedRoute, private store: StoreService) {
    this.route.params.subscribe(params => {
      this.name = params['name']
    })
  }

  ngOnInit () {
    this.store.initialConfigurationLoad(this.name)
    this.configuration$ = this.store.configuration$
  }
}
