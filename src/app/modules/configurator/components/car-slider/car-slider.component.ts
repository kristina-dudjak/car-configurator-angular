import { Component, Input } from '@angular/core'
import { AngularFireStorage } from '@angular/fire/compat/storage'
import {
  BehaviorSubject,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap
} from 'rxjs'
import { Configuration } from 'src/app/shared/models/Configuration'

@Component({
  selector: 'app-car-slider',
  templateUrl: './car-slider.component.html',
  styleUrls: ['./car-slider.component.scss']
})
export class CarSliderComponent {
  @Input() configuration: Configuration
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
        `images/${this.configuration.carName}/exteriors/${this.configuration.color.id}${this.configuration.wheel.id}/${page}.png`
      )
      .getDownloadURL()
  }
}
