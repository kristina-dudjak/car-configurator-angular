import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { map, Observable } from 'rxjs'
import { Configuration } from 'src/app/shared/models/Configuration'
import { StoreService } from 'src/app/shared/services/store/store.service'

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  configuration$: Observable<Configuration>
  name: string

  constructor (private store: StoreService, private route: ActivatedRoute) {}

  ngOnInit (): void {
    this.name = this.route.parent.snapshot.params['name']
    this.configuration$ = this.store.configuration$.pipe(
      map(configuration => {
        if (!configuration || configuration.carName !== this.name)
          this.store.initialConfigurationLoad(this.name)
        return configuration
      })
    )
  }
}
