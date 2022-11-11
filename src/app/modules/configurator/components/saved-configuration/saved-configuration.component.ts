import { Component, Input, OnInit } from '@angular/core'
import { AngularFireStorage } from '@angular/fire/compat/storage'
import { Observable } from 'rxjs'
import { Configuration } from 'src/app/shared/models/Configuration'

@Component({
  selector: 'app-saved-configuration',
  templateUrl: './saved-configuration.component.html',
  styleUrls: ['./saved-configuration.component.scss']
})
export class SavedConfigurationComponent implements OnInit {
  @Input() configuration: Configuration
  confImg$: Observable<string>

  constructor (private storage: AngularFireStorage) {}

  ngOnInit (): void {
    this.getConfImage()
  }

  getConfImage () {
    this.confImg$ = this.storage
      .ref(
        `images/${this.configuration.carName}/exteriors/${this.configuration.color.id}${this.configuration.wheel.id}/3.png`
      )
      .getDownloadURL()
  }
}
