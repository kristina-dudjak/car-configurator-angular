import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { map, Observable } from 'rxjs'
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
  name: string

  constructor (private store: StoreService, private route: ActivatedRoute) {}

  ngOnInit (): void {
    this.name = this.route.parent.snapshot.params['name']
    this.configuration$ = this.store.configuration$.pipe(
      map(configuration => {
        if (!configuration || configuration.carName !== this.name)
          this.store.initialConfigurationLoad(this.name)
        return configuration
      })
    )
    this.editing$ = this.store.editingEnum$
  }
}
