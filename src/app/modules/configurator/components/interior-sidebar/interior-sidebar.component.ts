import { Component, Input } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
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
  name: string
  constructor (
    private store: StoreService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      this.name = params['name']
    })
  }

  showInteriors () {
    this.store.updateEditingEnumsState(EditedEnum.interiors)
  }

  goToSummary () {
    this.router.navigateByUrl(`configurator/cars/${this.name}/interior`)
  }
}
