import { Component, Input } from '@angular/core'
import { EditedEnum } from 'src/app/shared/enums/EditedEnum'
import { CarElement } from 'src/app/shared/models/CarElement'
import { Configuration } from 'src/app/shared/models/Configuration'
import { StoreService } from 'src/app/shared/services/store/store.service'

@Component({
  selector: 'app-element-item',
  templateUrl: './element-item.component.html',
  styleUrls: ['./element-item.component.scss']
})
export class ElementItemComponent {
  @Input() element: CarElement
  @Input() configuration: Configuration
  @Input() editing: EditedEnum

  constructor (private store: StoreService) {}

  changeElement () {
    const key = Object.keys(this.configuration).find(
      key => key === EditedEnum[this.editing].slice(0, -1)
    )
    if (key) {
      ;(this.configuration[
        key as keyof Configuration
      ] as CarElement) = this.element
      this.store.updateConfiguration(this.configuration)
    }
  }
}
