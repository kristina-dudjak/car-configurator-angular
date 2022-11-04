import { Pipe, PipeTransform } from '@angular/core'
import { firstValueFrom } from 'rxjs'
import { take } from 'rxjs/operators'
import { EditedEnum } from 'src/app/shared/enums/EditedEnum'
import { CarElement } from 'src/app/shared/models/CarElement'
import { Configuration } from 'src/app/shared/models/Configuration'
import { StoreService } from 'src/app/shared/services/store/store.service'

@Pipe({
  name: 'isElementChecked'
})
export class IsElementCheckedPipe implements PipeTransform {
  constructor (private store: StoreService) {}

  async transform (
    configuration: Configuration,
    element: CarElement,
    part: EditedEnum
  ): Promise<boolean> {
    console.log(element)
    console.log(EditedEnum[part].slice(0, -1))
    const conf = await firstValueFrom(this.store.configuration$.pipe(take(1)))
    console.log(configuration?.color.id)
    console.log(element.id)
    const c = EditedEnum[part].slice(0, -1)
    // if (element.id === configuration[c].id) {
    if (element.id === configuration.color.id) {
      console.log('isti')
      return true
    }
    console.log('nisu')
    return false
  }
}
