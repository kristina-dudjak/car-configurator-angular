import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  SimpleChanges
} from '@angular/core'
import { Observable } from 'rxjs'
import { EditedEnum } from 'src/app/shared/enums/EditedEnum'
import { CarElement } from 'src/app/shared/models/CarElement'
import { Configuration } from 'src/app/shared/models/Configuration'
import { Output, EventEmitter } from '@angular/core'
import { StoreService } from 'src/app/shared/services/store/store.service'

@Component({
  selector: 'app-element-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './element-item.component.html',
  styleUrls: ['./element-item.component.scss']
})
export class ElementItemComponent implements OnInit {
  @Input() element: CarElement
  // @Input() configuration: Configuration
  configuration$: Observable<Configuration | undefined>
  @Input() editing: EditedEnum
  // isPicked: Observable<boolean>
  @Output() changeElementEvent = new EventEmitter<CarElement>()

  constructor (private store: StoreService) {}

  ngOnChanges (changes: SimpleChanges) {
    console.log('changes', changes)
  }

  ngOnInit (): void {
    this.configuration$ = this.store.configuration$
    // this.carElementService.checkIfChosen(this.configuration, this.element)
    // this.isPicked = this.carElementService.isChosen$
  }

  changeElement (value: CarElement) {
    this.changeElementEvent.emit(value)
  }
}
