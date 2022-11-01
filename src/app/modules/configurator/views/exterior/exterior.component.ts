import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs'
import { EditedEnum } from 'src/app/shared/enums/EditedEnum'
import { Configuration } from 'src/app/shared/models/Configuration'
import { StoreService } from 'src/app/shared/services/store/store.service'

@Component({
  selector: 'app-exterior',
  templateUrl: './exterior.component.html',
  styleUrls: ['./exterior.component.scss']
})
export class ExteriorComponent implements OnInit {
  name: string
  configuration$: Observable<Configuration | null>
  editing$: Observable<EditedEnum>
  editedEnum = EditedEnum

  constructor (private store: StoreService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.name = params['name']
    })
  }

  ngOnInit (): void {
    this.store.initialConfigurationLoad(this.name)
    this.configuration$ = this.store.configuration$
    this.editing$ = this.store.editingElements$
  }
}
