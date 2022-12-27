import { Component, Input } from '@angular/core'
import { EditingMap } from 'src/app/shared/const/EditingMap'
import { EditedEnum } from 'src/app/shared/enums/EditedEnum'
import { Configuration } from 'src/app/shared/models/Configuration'
import { StoreService } from 'src/app/shared/services/store/store.service'
@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss']
})
export class SidebarItemComponent {
  constructor (private store: StoreService) {}
  @Input() configuration: Configuration
  @Input() editing: EditedEnum
  editingMap = EditingMap

  updateEditingEnum (editing: EditedEnum) {
    this.store.updateEditingEnumState(editing)
  }
}
