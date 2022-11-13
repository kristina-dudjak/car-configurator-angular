import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent {
  name: string

  constructor (private route: ActivatedRoute) {
    this.name = this.route.snapshot.paramMap.get('name')
  }
}
