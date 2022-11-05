import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { CarElement } from 'src/app/shared/models/CarElement'
import { Configuration } from 'src/app/shared/models/Configuration'
import { Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-element-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './element-item.component.html',
  styleUrls: ['./element-item.component.scss']
})
export class ElementItemComponent {
  @Input() element: CarElement
  @Input() configuration: Configuration
  @Input() editingProperty: string
  @Output() changeElementEvent = new EventEmitter<CarElement>()

  changeElement (value: CarElement) {
    this.changeElementEvent.emit(value)
  }

  isChecked (): boolean {
    return this.configuration[this.editingProperty].id === this.element.id
  }
}
