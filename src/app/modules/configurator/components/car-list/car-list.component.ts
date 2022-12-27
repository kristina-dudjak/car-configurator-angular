import { Component } from '@angular/core'
import { StoreService } from 'src/app/shared/services/store/store.service'

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent {
  constructor (private store: StoreService) {}
  cars$ = this.store.cars$
}
