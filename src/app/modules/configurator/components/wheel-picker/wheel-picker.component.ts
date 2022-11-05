import { Component, Input, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { EditedEnum } from 'src/app/shared/enums/EditedEnum'
import { CarElement } from 'src/app/shared/models/CarElement'
import { Configuration } from 'src/app/shared/models/Configuration'
import { StoreService } from 'src/app/shared/services/store/store.service'

@Component({
  selector: 'app-wheel-picker',
  templateUrl: './wheel-picker.component.html',
  styleUrls: ['./wheel-picker.component.scss']
})
export class WheelPickerComponent implements OnInit {
  @Input() configuration: Configuration
  wheels$: Observable<CarElement[]>

  constructor (private store: StoreService) {}

  ngOnInit (): void {
    this.store.initialCarElements(this.configuration.carName, EditedEnum.wheels)
    this.wheels$ = this.store.carElements$
  }

  changeElement (element: CarElement) {
    this.store.updateElementInConfiguration(element)
  }

  backToSidebar () {
    this.store.updateEditingEnumState(EditedEnum.none)
  }
}
