import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs'
import { Car } from 'src/app/shared/models/Car'
import { CarService } from '../../services/car-service/car.service'

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {
  name: string
  car$: Observable<Car | undefined>

  constructor (private route: ActivatedRoute, private carService: CarService) {
    this.route.params.subscribe(params => {
      this.name = params['name']
    })
  }

  ngOnInit () {
    this.car$ = this.carService.getCarByName(this.name)
  }
}
