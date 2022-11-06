import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { Configuration } from 'src/app/shared/models/Configuration'

@Component({
  selector: 'app-nav-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  @Input() configuration: Configuration
}
