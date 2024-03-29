import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { Router } from '@angular/router'
import { Configuration } from 'src/app/shared/models/Configuration'

@Component({
  selector: 'app-configuration-info',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './configuration-info.component.html',
  styleUrls: ['./configuration-info.component.scss']
})
export class ConfigurationInfoComponent {
  constructor (private router: Router) {}
  @Input() configuration: Configuration

  isSummaryPage () {
    return this.router.url.includes('summary')
  }
}
