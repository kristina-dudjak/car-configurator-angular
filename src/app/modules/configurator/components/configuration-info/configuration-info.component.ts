import { Component, Input } from '@angular/core'
import { Configuration } from 'src/app/shared/models/Configuration'

@Component({
  selector: 'app-configuration-info',
  templateUrl: './configuration-info.component.html',
  styleUrls: ['./configuration-info.component.scss']
})
export class ConfigurationInfoComponent {
  @Input() configuration: Configuration
}
