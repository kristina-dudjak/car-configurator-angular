import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Car } from 'src/app/shared/models/Car'
import { CarService } from '../../services/car-service/car.service'

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  cars$: Observable<Car[] | null>
  constructor (private carService: CarService) {}

  ngOnInit () {
    this.cars$ = this.carService.cars$
  }
}
