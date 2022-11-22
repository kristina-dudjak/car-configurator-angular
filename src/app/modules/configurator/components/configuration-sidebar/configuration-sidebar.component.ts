import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { EditedEnum } from 'src/app/shared/enums/EditedEnum'
import { Configuration } from 'src/app/shared/models/Configuration'

@Component({
  selector: 'app-configuration-sidebar',
  templateUrl: './configuration-sidebar.component.html',
  styleUrls: ['./configuration-sidebar.component.scss']
})
export class ConfigurationSidebarComponent implements OnInit {
  constructor (private activatedRoute: ActivatedRoute) {}

  @Input() configuration: Configuration
  @Input() editing: EditedEnum
  editedEnum = EditedEnum
  route: string

  ngOnInit (): void {
    this.route = this.activatedRoute.snapshot.routeConfig.path
  }
}
