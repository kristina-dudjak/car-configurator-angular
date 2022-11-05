import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { StoreService } from 'src/app/shared/services/store/store.service'
@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {
  name: string

  constructor (private route: ActivatedRoute, private store: StoreService) {
    this.name = this.route.snapshot.paramMap.get('name')
  }

  ngOnInit () {
    this.store.initialConfigurationLoad(this.name)
  }
}
