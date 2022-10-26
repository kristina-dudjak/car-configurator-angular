import { Component, Input } from '@angular/core'
import { AngularFireStorage } from '@angular/fire/compat/storage'
import {
  BehaviorSubject,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap
} from 'rxjs'
import { Car } from 'src/app/shared/models/Car'

@Component({
  selector: 'app-car-slider',
  templateUrl: './car-slider.component.html',
  styleUrls: ['./car-slider.component.scss']
})
export class CarSliderComponent {
  @Input() car: Car
  currentNumber$ = new BehaviorSubject<number>(1)
  carImage$ = new BehaviorSubject<string | null>(null)

  constructor (private storage: AngularFireStorage) {}

  currentNumberChanged$ = this.currentNumber$.pipe(
    debounceTime(500),
    distinctUntilChanged(),
    switchMap(page => this.getCarImage$(page)),
    tap(response => this.carImage$.next(response))
  )

  decrement () {
    if (this.currentNumber$.getValue() > 1)
      this.currentNumber$.next(this.currentNumber$.getValue() - 1)
  }

  increment () {
    if (this.currentNumber$.getValue() < 5)
      this.currentNumber$.next(this.currentNumber$.getValue() + 1)
  }

  getCarImage$ (page: number) {
    return this.storage
      .ref(
        `images/${this.car.name}/exteriors/${this.car.colors[0].id}${this.car.wheels[0].id}/${page}.png`
      )
      .getDownloadURL()
  }
}
