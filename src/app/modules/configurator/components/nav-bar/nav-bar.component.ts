import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
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

  constructor (private location: Location) {}

  goBack () {
    this.location.back()
  }
}
