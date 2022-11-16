import { Injectable } from '@angular/core'
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/compat/firestore'
import { filter, firstValueFrom, map, tap } from 'rxjs'
import { Store } from '../../classes/store.class'
import { EditedEnum } from '../../enums/EditedEnum'
import { Car } from '../../models/Car'
import { CarElement } from '../../models/CarElement'
import { Configuration } from '../../models/Configuration'
import { Timestamp } from 'firebase/firestore'

interface StoreInterface {
  cars: Car[]
  configuration: Configuration
  carElements: CarElement[]
  editingEnum: EditedEnum
}

const initialState: StoreInterface = {
  cars: undefined,
  configuration: undefined,
  carElements: undefined,
  editingEnum: EditedEnum.none
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
  editingEnum$ = this.select(({ editingEnum }) => editingEnum)

  updateCarsState (cars: Car[]) {
    this.setState({ cars })
  }

  updateConfigurationState (configuration: Configuration) {
    this.setState({ configuration })
  }

  updateElementInConfiguration (element: CarElement) {
    switch (this.state.editingEnum) {
      case EditedEnum.colors: {
        const { color, ...rest } = this.state.configuration
        this.setState({ configuration: { color: element, ...rest } })
        break
      }
      case EditedEnum.wheels: {
        const { wheel, ...rest } = this.state.configuration
        this.setState({ configuration: { wheel: element, ...rest } })
        break
      }
      case EditedEnum.interiors: {
        const { interior, ...rest } = this.state.configuration
        this.setState({ configuration: { interior: element, ...rest } })
        break
      }
    }
  }

  updateCarElementsState (carElements: CarElement[]) {
    this.setState({ carElements })
  }

  updateEditingEnumState (editingEnum: EditedEnum) {
    this.setState({ editingEnum })
  }

  initialCarElements (carName: string, editing: EditedEnum) {
    firstValueFrom(
      this.carsCollection.valueChanges().pipe(
        map(cars => {
          let car = cars.find(car => car.name === carName)
          this.updateCarElementsState(car[EditedEnum[editing]])
        })
      )
    )
  }

  initialCarLoad () {
    firstValueFrom(
      this.carsCollection
        .valueChanges()
        .pipe(map(cars => this.updateCarsState(cars)))
    )
  }

  initialConfigurationLoad (selectedCarName: string) {
    firstValueFrom(
      this.carsCollection.valueChanges().pipe(
        map(cars => cars.find(car => car.name === selectedCarName)),
        filter(car => !!car),
        tap(
          ({
            name: carName,
            year,
            price,
            colors: [color],
            interiors: [interior],
            wheels: [wheel]
          }) =>
            this.updateConfigurationState({
              id: Date.now(),
              carName,
              year,
              price,
              creationDate: Timestamp.now(),
              color,
              interior,
              wheel
            })
        )
      )
    )
  }
}
