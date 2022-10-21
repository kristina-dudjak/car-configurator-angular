import { Injectable } from '@angular/core'
import { MatIconRegistry } from '@angular/material/icon'
import { DomSanitizer } from '@angular/platform-browser'
import { icons } from '../../const/Icons'
import { IconItem } from '../../models/IconItem'

@Injectable({
  providedIn: 'root'
})
export class IconsService {
  constructor (
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}

  addIcons () {
    icons.map((icon: IconItem) => {
      this.matIconRegistry.addSvgIconLiteral(
        icon.name,
        this.domSanitizer.bypassSecurityTrustHtml(icon.svg)
      )
    })
  }
}
