import { Component, Input, OnInit } from '@angular/core'
import { EditedEnum } from 'src/app/shared/enums/EditedEnum'
import { Configuration } from 'src/app/shared/models/Configuration'
import { StoreService } from 'src/app/shared/services/store/store.service'

@Component({
  selector: 'app-interior-sidebar',
  templateUrl: './interior-sidebar.component.html',
  styleUrls: ['./interior-sidebar.component.scss']
})
export class InteriorSidebarComponent {
  @Input() configuration: Configuration

  constructor (private store: StoreService) {}

  showInteriors () {
    this.store.updateEditingEnums(EditedEnum.interiors)
  }
}
