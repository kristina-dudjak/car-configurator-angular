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
  selector: 'app-interior-slider',
  templateUrl: './interior-slider.component.html',
  styleUrls: ['./interior-slider.component.scss']
})
export class InteriorSliderComponent {
  constructor (
    private storage: AngularFireStorage,
    private store: StoreService
  ) {}
  configuration$ = this.store.configuration$
  currentNumber$ = new BehaviorSubject<number>(1)
  interiorImage$: Observable<string>

  currentNumberChanged$ = this.currentNumber$.pipe(
    debounceTime(500),
    distinctUntilChanged(),
    switchMap(page =>
      this.configuration$.pipe(tap(conf => this.setInteriorImage$(conf, page)))
    )
  )

  decrement () {
    if (this.currentNumber$.getValue() > 1)
      this.currentNumber$.next(this.currentNumber$.getValue() - 1)
  }

  increment () {
    if (this.currentNumber$.getValue() < 2)
      this.currentNumber$.next(this.currentNumber$.getValue() + 1)
  }

  setInteriorImage$ (conf: Configuration, page: number) {
    this.interiorImage$ = this.storage
      .ref(`images/${conf?.carName}/interiors/${conf?.interior.id}/${page}.png`)
      .getDownloadURL()
  }
}
