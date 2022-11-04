import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { EditedEnum } from 'src/app/shared/enums/EditedEnum'
import { CarElement } from 'src/app/shared/models/CarElement'
import { Configuration } from 'src/app/shared/models/Configuration'
import { StoreService } from 'src/app/shared/services/store/store.service'

@Injectable({
  providedIn: 'root'
})
export class CarElementService {
  // _isChosen$ = new BehaviorSubject<boolean>(false)

  constructor (private store: StoreService) {}

  // get isChosen$ () {
  //   return this._isChosen$.asObservable()
  // }

  // checkIfChosen (configuration: Configuration, element: CarElement) {
  //   if (
  //     element.id ===
  //     (configuration.color.id ||
  //       configuration.wheel.id ||
  //       configuration.interior.id)
  //   ) {
  //     this._isChosen$.next(true)
  //   } else {
  //     this._isChosen$.next(false)
  //   }
  // }

  changeConfigurationElement (
    configuration: Configuration,
    editing: EditedEnum,
    element: CarElement
  ) {
    const key = Object.keys(configuration).find(
      key => key === EditedEnum[editing].slice(0, -1)
    )
    if (key) {
      ;(configuration[key as keyof Configuration] as CarElement) = element
      this.store.updateConfigurationState(configuration)
    }
  }
}
