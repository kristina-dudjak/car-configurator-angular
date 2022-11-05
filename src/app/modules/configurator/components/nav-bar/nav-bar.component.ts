import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Configuration } from 'src/app/shared/models/Configuration'
import { Location } from '@angular/common'

@Component({
  selector: 'app-nav-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Input() configuration: Configuration
  name: string
  isActive: boolean

  constructor (
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit (): void {
    this.route.params.subscribe(params => {
      this.name = params['name']
    })
  }

  navigateTo (path: string) {
    this.router.navigateByUrl(`configurator/cars/${this.name}/${path}`)
  }

  goBack () {
    this.location.back()
  }
}
