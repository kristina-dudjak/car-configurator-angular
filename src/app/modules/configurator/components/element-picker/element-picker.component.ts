import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core'
import { EditedEnum } from 'src/app/shared/enums/EditedEnum'
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

  constructor (private store: StoreService) {}

  ngOnInit (): void {
    this.store.initialCarElements(this.configuration.carName, this.editing)
  }
}
