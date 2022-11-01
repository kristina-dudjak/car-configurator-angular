import { Injectable } from '@angular/core'
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/compat/firestore'
import { BehaviorSubject, firstValueFrom, map, tap } from 'rxjs'
import { EditedEnum } from '../../enums/EditedEnum'
import { Car } from '../../models/Car'
import { CarElement } from '../../models/CarElement'
import { Configuration } from '../../models/Configuration'

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private _cars$ = new BehaviorSubject<Car[] | null>(null)
  private _configuration$ = new BehaviorSubject<Configuration | null>(null)
  private _carElements$ = new BehaviorSubject<CarElement[] | null>(null)
  private _editingEnums$ = new BehaviorSubject<EditedEnum>(EditedEnum.none)
  private carsCollection: AngularFirestoreCollection<Car> = this.db.collection<
    Car
  >('models')

  constructor (private db: AngularFirestore) {}

  get cars$ () {
    return this._cars$.asObservable()
  }

  get configuration$ () {
    return this._configuration$.asObservable()
  }

  get carElements$ () {
    return this._carElements$.asObservable()
  }

  get editingElements$ () {
    return this._editingEnums$.asObservable()
  }

  updateConfiguration (conf: Configuration | null) {
    this._configuration$.next(conf)
  }

  updateEditingEnums (elements: EditedEnum) {
    this._editingEnums$.next(elements)
  }

  getCarElements () {
    firstValueFrom(
      this.carsCollection.valueChanges().pipe(
        map(cars => {
          cars
            .filter(
              car => car.name === this._configuration$.getValue()?.carName
            )
            .map(car => {
              this._carElements$.next(
                car[
                  EditedEnum[this._editingEnums$.value] as keyof Car
                ] as CarElement[]
              )
            })
        })
      )
    )
  }

  initialCarLoad () {
    if (this._cars$.value?.length) return
    firstValueFrom(
      this.carsCollection
        .valueChanges()
        .pipe(tap(cars => this._cars$.next(cars)))
    )
  }

  initialConfigurationLoad (name: string) {
    if (this._configuration$.getValue()?.carName === name) return
    firstValueFrom(
      this.carsCollection.valueChanges().pipe(
        map(cars => {
          cars
            .filter(car => car.name === name)
            .map(car => {
              const { name, year, price, colors, interiors, wheels } = car
              this._configuration$.next({
                id: Date.now(),
                carName: name,
                year: year,
                price: price,
                creationDate: new Date(),
                color: colors[0],
                interior: interiors[0],
                wheel: wheels[0]
              })
            })
        })
      )
    )
  }
}
