import { Injectable } from '@angular/core'
import { BehaviorSubject, map } from 'rxjs'
import { Car } from 'src/app/shared/models/Car'
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/compat/firestore'

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private _cars$ = new BehaviorSubject<Car[]>([])
  private carsCollection: AngularFirestoreCollection<Car>

  constructor (private db: AngularFirestore) {
    this.carsCollection = this.db.collection<Car>('models')
    this.carsCollection.valueChanges().subscribe(collections => {
      this._cars$.next(collections)
    })
  }

  get cars$ () {
    return this._cars$.asObservable()
  }

  getCarByName (name: string) {
    return this.cars$.pipe(
      map(cars => {
        return cars.find(car => car.name === name)
      })
    )
  }
}
