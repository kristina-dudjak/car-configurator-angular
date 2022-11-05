import { Pipe, PipeTransform } from '@angular/core'
import { EditedEnum } from 'src/app/shared/enums/EditedEnum'
import { CarElement } from 'src/app/shared/models/CarElement'
import { Configuration } from 'src/app/shared/models/Configuration'

@Pipe({
  name: 'isElementChecked'
})
export class IsElementCheckedPipe implements PipeTransform {
  async transform (
    conf: Configuration,
    element: CarElement,
    part: EditedEnum
  ): Promise<boolean> {
    switch (part) {
      case EditedEnum.colors: {
        if (element.id === conf.color.id) return true
        return false
      }
      case EditedEnum.wheels: {
        if (element.id === conf.wheel.id) return true
        return false
      }
      case EditedEnum.interiors: {
        if (element.id === conf.interior.id) return true
        return false
      }
    }
    return false
  }
}
