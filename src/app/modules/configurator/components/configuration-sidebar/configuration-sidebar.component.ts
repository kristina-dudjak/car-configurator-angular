import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { BehaviorSubject } from 'rxjs'
import { EditedEnum } from 'src/app/shared/enums/EditedEnum'
import { Configuration } from 'src/app/shared/models/Configuration'

@Component({
  selector: 'app-configuration-sidebar',
  templateUrl: './configuration-sidebar.component.html',
  styleUrls: ['./configuration-sidebar.component.scss']
})
export class ConfigurationSidebarComponent implements OnInit {
  @Input() configuration: Configuration
  @Input() editing: EditedEnum
  editedEnum = EditedEnum
  redirectText: string
  route$ = new BehaviorSubject<string>('')

  constructor (private activatedRoute: ActivatedRoute) {}

  ngOnInit (): void {
    this.route$.next(this.activatedRoute.snapshot.routeConfig.path)
    if (this.route$.value === 'exterior') {
      this.redirectText = 'interior'
    } else this.redirectText = 'summary'
  }
}
