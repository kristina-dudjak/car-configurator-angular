import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Car } from 'src/app/shared/models/Car'
import { StoreService } from 'src/app/shared/services/store/store.service'

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  cars$: Observable<Car[] | undefined>
  constructor (private store: StoreService) {}

  ngOnInit () {
    this.store.initialCarLoad()
    this.cars$ = this.store.cars$
  }
}
