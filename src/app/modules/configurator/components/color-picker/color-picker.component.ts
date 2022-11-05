import { Component, Input, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { EditedEnum } from 'src/app/shared/enums/EditedEnum'
import { CarElement } from 'src/app/shared/models/CarElement'
import { Configuration } from 'src/app/shared/models/Configuration'
import { StoreService } from 'src/app/shared/services/store/store.service'

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {
  @Input() configuration: Configuration
  colors$: Observable<CarElement[]>

  constructor (private store: StoreService) {}

  ngOnInit (): void {
    this.colors$ = this.store.carElements$
  }

  changeElement (element: CarElement) {
    this.store.updateElementInConfiguration(element)
  }

  backToSidebar () {
    this.store.updateEditingEnumState(EditedEnum.none)
  }
}
