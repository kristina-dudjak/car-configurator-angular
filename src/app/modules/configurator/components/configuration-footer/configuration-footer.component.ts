import { Component, Input } from '@angular/core'
import { Configuration } from 'src/app/shared/models/Configuration'

@Component({
  selector: 'app-configuration-footer',
  templateUrl: './configuration-footer.component.html',
  styleUrls: ['./configuration-footer.component.scss']
})
export class ConfigurationFooterComponent {
  @Input() configuration: Configuration
}
