import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { EditedEnum } from 'src/app/shared/enums/EditedEnum'
import { Configuration } from 'src/app/shared/models/Configuration'
import { StoreService } from 'src/app/shared/services/store/store.service'

@Component({
  selector: 'app-exterior-sidebar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './exterior-sidebar.component.html',
  styleUrls: ['./exterior-sidebar.component.scss']
})
export class ExteriorSidebarComponent {
  @Input() configuration: Configuration
  editedEnum = EditedEnum

  constructor (private store: StoreService) {}

  updateEditingEnum (editing: EditedEnum) {
    this.store.updateEditingEnumState(editing)
  }
}
