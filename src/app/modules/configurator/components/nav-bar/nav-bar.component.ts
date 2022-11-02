import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Configuration } from 'src/app/shared/models/Configuration'
import { Location } from '@angular/common'

@Component({
  selector: 'app-nav-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  @Input() configuration: Configuration
  name: string

  constructor (
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.route.params.subscribe(params => {
      this.name = params['name']
    })
  }

  goToExterior () {
    this.router.navigateByUrl(`configurator/cars/${this.name}/exterior`)
  }

  goToInterior () {
    this.router.navigateByUrl(`configurator/cars/${this.name}/interior`)
  }

  goToSummary () {
    console.log('summary')
  }

  goBack () {
    this.location.back()
  }
}
