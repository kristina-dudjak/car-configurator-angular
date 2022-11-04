import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core'
import { Observable } from 'rxjs'
import { EditedEnum } from 'src/app/shared/enums/EditedEnum'
import { CarElement } from 'src/app/shared/models/CarElement'
import { Configuration } from 'src/app/shared/models/Configuration'
import { StoreService } from 'src/app/shared/services/store/store.service'

@Component({
  selector: 'app-element-picker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './element-picker.component.html',
  styleUrls: ['./element-picker.component.scss']
})
export class ElementPickerComponent implements OnInit {
  @Input() configuration: Configuration
  // configuration$: Observable<Configuration | null>
  @Input() editing: EditedEnum

  carElements$: Observable<CarElement[] | undefined>

  constructor (private store: StoreService) {}

  ngOnInit (): void {
    // this.configuration$ = this.store.configuration$
    this.store.initialCarElements(this.configuration.carName, this.editing)
    this.carElements$ = this.store.carElements$
  }

  changeElement (element: CarElement) {
    const key = Object.keys(this.configuration).find(
      key => key === EditedEnum[this.editing].slice(0, -1)
    )
    if (key) {
      ;(this.configuration[key as keyof Configuration] as CarElement) = element
      this.store.updateConfigurationState(this.configuration)
    }
  }

  backToSidebar () {
    this.store.updateEditingEnumsState(EditedEnum.none)
  }
}
