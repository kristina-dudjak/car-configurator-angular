import { Component, Input } from '@angular/core'
import { Router } from '@angular/router'
import { Car } from 'src/app/shared/models/Car'

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.scss']
})
export class CarItemComponent {
  @Input() car: Car

  constructor (private router: Router) {}

  showCarConfiguration () {
    this.router.navigate(['configurator/cars/' + this.car.name])
  }
}
