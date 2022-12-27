import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { map } from 'rxjs'
import { EditedEnum } from 'src/app/shared/enums/EditedEnum'
import { StoreService } from 'src/app/shared/services/store/store.service'

@Component({
  selector: 'app-interior',
  templateUrl: './interior.component.html',
  styleUrls: ['./interior.component.scss']
})
export class InteriorComponent implements OnInit {
  constructor (private store: StoreService, private route: ActivatedRoute) {}
  configuration$ = this.store.configuration$.pipe(
    map(configuration => {
      if (!configuration || configuration.carName !== this.name)
        this.store.initialConfigurationLoad(this.name)
      return configuration
    })
  )
  editing$ = this.store.editingEnum$
  editedEnum = EditedEnum
  name: string

  ngOnInit (): void {
    this.name = this.route.parent.snapshot.params['name']
  }
}
