import { Component, Input, OnInit } from '@angular/core'
import { AngularFireStorage } from '@angular/fire/compat/storage'
import {
  debounceTime,
  distinctUntilChanged,
  Observable,
  of,
  switchMap,
  tap
} from 'rxjs'
import { Car } from 'src/app/shared/models/Car'

@Component({
  selector: 'app-car-slider',
  templateUrl: './car-slider.component.html',
  styleUrls: ['./car-slider.component.scss']
})
export class CarSliderComponent implements OnInit {
  @Input() car: Car
  currentNumber = 1
  // carImage: string
  carImage: Observable<string>

  constructor (private storage: AngularFireStorage) {}

  currentNumberChanged$ = of(this.currentNumber)
    .pipe(
      debounceTime(1500),
      distinctUntilChanged(),
      switchMap(value => {
        // this.carImage = this.getCarImage(value)
        // return of(value)
        return this.getCarImage(value)
      })
    )
    .subscribe(data => {
      console.log(data)
    })

  ngOnInit (): void {
    console.log(this.car.colors)
    // const carChanged$ = of(this.car)
  }

  decrement () {
    if (this.currentNumber > 1) this.currentNumber--
  }

  increment () {
    if (this.currentNumber < 5) this.currentNumber++
  }

  getCarImage (page: number) {
    console.log('getImage')
    console.log(page)
    console.log(this.car)
    console.log(
      this.storage.ref(
        `images/${this.car.name}/exteriors/${this.car.colors[0].id}${this.car.wheels[0].id}/${page}.png`
      )
    )
    const ref = this.storage.ref(
      `images/${this.car.name}/exteriors/${this.car.colors[0].id}${this.car.wheels[0].id}/${page}.png`
    )
    console.log(ref.getDownloadURL())
    return ref.getDownloadURL()
    // this.carImage = ref.getDownloadURL()
  }
}
