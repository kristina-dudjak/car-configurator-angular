import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core'
import { Observable } from 'rxjs'
import { EditingMap } from 'src/app/shared/const/EditingMap'
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
  @Input() editing: EditedEnum
  editedEnum = EditedEnum
  editingMap = EditingMap
  elements$: Observable<CarElement[]>

  constructor (private store: StoreService) {}

  ngOnInit (): void {
    this.store.initialCarElements(this.configuration.carName, this.editing)
    this.elements$ = this.store.carElements$
  }

  changeElement (element: CarElement) {
    this.store.updateElementInConfiguration(element)
  }

  backToSidebar () {
    this.store.updateEditingEnumState(EditedEnum.none)
  }
}
