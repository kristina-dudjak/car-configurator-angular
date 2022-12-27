import { Component, OnInit } from '@angular/core'
import { StoreService } from 'src/app/shared/services/store/store.service'

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  constructor (private store: StoreService) {}

  ngOnInit () {
    this.store.initialCarLoad()
  }
}
