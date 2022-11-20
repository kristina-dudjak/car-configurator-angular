import { NgModule, LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core'
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireAuthModule } from '@angular/fire/compat/auth'
import { BrowserModule } from '@angular/platform-browser'
import { environment } from 'src/environments/environment'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AuthService } from './modules/auth/services/auth/auth.service'
import { MatMenuModule } from '@angular/material/menu'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { PagenotfoundComponent } from './views/pagenotfound/pagenotfound.component'
import { AngularFireStorageModule } from '@angular/fire/compat/storage'
import { AngularFireFunctionsModule } from '@angular/fire/compat/functions'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'
import { registerLocaleData } from '@angular/common'
import localeFr from '@angular/common/locales/fr'
import localeFrExtra from '@angular/common/locales/extra/fr'

registerLocaleData(localeFr, 'fr', localeFrExtra)
@NgModule({
  declarations: [AppComponent, PagenotfoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireFunctionsModule,
    AngularFirestoreModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [
    AuthService,
    { provide: LOCALE_ID, useValue: 'fr' },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'EUR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
