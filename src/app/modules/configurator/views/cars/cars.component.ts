import { Component } from '@angular/core'
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/compat/firestore'
import { Observable } from 'rxjs'
import { Car } from 'src/app/shared/models/Car'

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent {
  private carsCollection: AngularFirestoreCollection<Car>
  cars: Observable<Car[]>
  constructor (private store: AngularFirestore) {
    this.carsCollection = this.store.collection<Car>('models')
    this.cars = this.carsCollection.valueChanges()
  }
}
