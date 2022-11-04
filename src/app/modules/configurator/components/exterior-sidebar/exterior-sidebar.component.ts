import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { EditedEnum } from 'src/app/shared/enums/EditedEnum'
import { Configuration } from 'src/app/shared/models/Configuration'
import { StoreService } from 'src/app/shared/services/store/store.service'

@Component({
  selector: 'app-exterior-sidebar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './exterior-sidebar.component.html',
  styleUrls: ['./exterior-sidebar.component.scss']
})
export class ExteriorSidebarComponent {
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

  showColors () {
    this.store.updateEditingEnumsState(EditedEnum.colors)
  }

  showWheels () {
    this.store.updateEditingEnumsState(EditedEnum.wheels)
  }

  goToInterior () {
    this.router.navigateByUrl(`configurator/cars/${this.name}/interior`)
  }
}
