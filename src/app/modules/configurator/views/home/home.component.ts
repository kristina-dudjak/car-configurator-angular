import { Component, OnInit } from '@angular/core'
import { DataService } from 'src/app/services/dataService/data.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor (private dataService: DataService) {}

  ngOnInit (): void {
    // this.dataService.getUsers().subscribe(smtn => {
    //   console.log(smtn)
    // })
  }
}
