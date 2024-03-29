import { Component } from '@angular/core'
import { AngularFireStorage } from '@angular/fire/compat/storage'
import {
  BehaviorSubject,
  debounceTime,
  distinctUntilChanged,
  Observable,
  switchMap,
  tap
} from 'rxjs'
import { Configuration } from 'src/app/shared/models/Configuration'
import { StoreService } from 'src/app/shared/services/store/store.service'

@Component({
  selector: 'app-car-slider',
  templateUrl: './car-slider.component.html',
  styleUrls: ['./car-slider.component.scss']
})
export class CarSliderComponent {
  constructor (
    private storage: AngularFireStorage,
    private store: StoreService
  ) {}
  configuration$ = this.store.configuration$
  currentNumber$ = new BehaviorSubject<number>(1)
  exteriorImage$: Observable<string>

  currentNumberChanged$ = this.currentNumber$.pipe(
    debounceTime(500),
    distinctUntilChanged(),
    switchMap(page =>
      this.configuration$.pipe(tap(conf => this.setCarImage$(conf, page)))
    )
  )

  decrement () {
    if (this.currentNumber$.getValue() > 1)
      this.currentNumber$.next(this.currentNumber$.getValue() - 1)
  }

  increment () {
    if (this.currentNumber$.getValue() < 5)
      this.currentNumber$.next(this.currentNumber$.getValue() + 1)
  }

  setCarImage$ (conf: Configuration, page: number) {
    this.exteriorImage$ = this.storage
      .ref(
        `images/${conf.carName}/exteriors/${conf.color.id}${conf.wheel.id}/${page}.png`
      )
      .getDownloadURL()
  }
}
