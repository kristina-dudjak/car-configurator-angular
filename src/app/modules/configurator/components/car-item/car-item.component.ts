import { Component, Input } from '@angular/core'
import { Car } from 'src/app/shared/models/Car'

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.scss']
})
export class CarItemComponent {
  @Input() car: Car | undefined
}
