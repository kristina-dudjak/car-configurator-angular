import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { EditedEnum } from 'src/app/shared/enums/EditedEnum'
import { Configuration } from 'src/app/shared/models/Configuration'
import { StoreService } from 'src/app/shared/services/store/store.service'

@Component({
  selector: 'app-interior',
  templateUrl: './interior.component.html',
  styleUrls: ['./interior.component.scss']
})
export class InteriorComponent implements OnInit {
  configuration$: Observable<Configuration>
  editing$: Observable<EditedEnum>
  editedEnum = EditedEnum

  constructor (private store: StoreService) {}

  ngOnInit (): void {
    this.configuration$ = this.store.configuration$
    this.editing$ = this.store.editingEnum$
  }
}
