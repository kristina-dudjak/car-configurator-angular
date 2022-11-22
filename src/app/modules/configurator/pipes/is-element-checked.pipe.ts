import { Pipe, PipeTransform } from '@angular/core'
import { CarElement } from 'src/app/shared/models/CarElement'
import { Configuration } from 'src/app/shared/models/Configuration'

@Pipe({
  name: 'isElementChecked'
})
export class IsElementCheckedPipe implements PipeTransform {
  transform (
    configuration: Configuration,
    editingProperty: string,
    element: CarElement
  ): boolean {
    return configuration[editingProperty].id === element.id
  }
}
