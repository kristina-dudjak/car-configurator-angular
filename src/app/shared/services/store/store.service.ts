import { Injectable } from '@angular/core'
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/compat/firestore'
import { firstValueFrom, map, tap } from 'rxjs'
import { Store } from '../../classes/store.class'
import { EditedEnum } from '../../enums/EditedEnum'
import { Car } from '../../models/Car'
import { CarElement } from '../../models/CarElement'
import { Configuration } from '../../models/Configuration'

interface StoreInterface {
  cars: Car[] | undefined
  configuration: Configuration | undefined
  carElements: CarElement[] | undefined
  editingEnums: EditedEnum | undefined
}

const initialState: StoreInterface = {
  cars: undefined,
  configuration: undefined,
  carElements: undefined,
  editingEnums: EditedEnum.none
}

@Injectable({
  providedIn: 'root'
})
export class StoreService extends Store<StoreInterface> {
  private carsCollection: AngularFirestoreCollection<Car> = this.db.collection<
    Car
  >('models')

  constructor (private db: AngularFirestore) {
    super(initialState)
  }

  cars$ = this.select(({ cars }) => cars)
  configuration$ = this.select(({ configuration }) => configuration)
  carElements$ = this.select(({ carElements }) => carElements)
  editingEnums$ = this.select(({ editingEnums }) => editingEnums)

  updateCarsState (cars: Car[]) {
    this.setState({ cars })
  }

  updateConfigurationState (configuration: Configuration) {
    this.setState({ configuration })
  }

  updateCarElementsState (carElements: CarElement[]) {
    this.setState({ carElements })
  }

  updateEditingEnumsState (editingEnums: EditedEnum) {
    this.setState({ editingEnums })
  }

  initialCarElements (carName: string, editing: EditedEnum) {
    firstValueFrom(
      this.carsCollection.valueChanges().pipe(
        map(cars => {
          cars
            .filter(car => car.name === carName)
            .map(car => {
              this.updateCarElementsState(
                car[EditedEnum[editing] as keyof Car] as CarElement[]
              )
            })
        })
      )
    )
  }

  initialCarLoad () {
    firstValueFrom(
      this.carsCollection
        .valueChanges()
        .pipe(tap(cars => this.updateCarsState(cars)))
    )
  }

  initialConfigurationLoad (name: string) {
    firstValueFrom(
      this.carsCollection.valueChanges().pipe(
        map(cars => {
          cars
            .filter(car => car.name === name)
            .map(car => {
              const { name, year, price, colors, interiors, wheels } = car
              this.updateConfigurationState({
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
