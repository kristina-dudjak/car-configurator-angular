import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { map } from 'rxjs'
import { StoreService } from 'src/app/shared/services/store/store.service'

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  constructor (private store: StoreService, private route: ActivatedRoute) {}
  configuration$ = this.store.configuration$.pipe(
    map(configuration => {
      if (!configuration || configuration.carName !== this.name)
        this.store.initialConfigurationLoad(this.name)
      return configuration
    })
  )
  name: string

  ngOnInit (): void {
    this.name = this.route.parent.snapshot.params['name']
  }
}
