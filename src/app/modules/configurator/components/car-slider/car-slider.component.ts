import { Component, Input, OnInit } from '@angular/core'
import { Car } from 'src/app/shared/models/Car'

@Component({
  selector: 'app-car-slider',
  templateUrl: './car-slider.component.html',
  styleUrls: ['./car-slider.component.scss']
})
export class CarSliderComponent implements OnInit {
  @Input() car: Car
  @Input() currentNumber: number = 1

  constructor () {}

  ngOnInit (): void {}

  decrement () {
    if (this.currentNumber > 1) this.currentNumber--
  }

  increment () {
    if (this.currentNumber < 5) this.currentNumber++
  }
}
