import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {
  constructor (private route: ActivatedRoute) {}
  name: string

  ngOnInit () {
    this.name = this.route.snapshot.paramMap.get('name')
  }
}
