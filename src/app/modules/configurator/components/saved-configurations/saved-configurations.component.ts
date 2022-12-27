import { Component, Input } from '@angular/core'
import { User } from 'src/app/shared/models/User'

@Component({
  selector: 'app-saved-configurations',
  templateUrl: './saved-configurations.component.html',
  styleUrls: ['./saved-configurations.component.scss']
})
export class SavedConfigurationsComponent {
  @Input() user: User
}
