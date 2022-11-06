import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Configuration } from 'src/app/shared/models/Configuration'
import { StoreService } from 'src/app/shared/services/store/store.service'

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  configuration$: Observable<Configuration>

  constructor (private store: StoreService) {}

  ngOnInit (): void {
    this.configuration$ = this.store.configuration$
  }
}
