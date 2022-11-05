import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Car } from 'src/app/shared/models/Car'
import { StoreService } from 'src/app/shared/services/store/store.service'

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {
  cars$: Observable<Car[]>
  constructor (private store: StoreService) {}

  ngOnInit () {
    this.store.initialCarLoad()
    this.cars$ = this.store.cars$
  }
}
