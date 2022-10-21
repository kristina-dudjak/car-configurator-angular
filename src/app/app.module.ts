import { NgModule } from '@angular/core'
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
import { HttpClientModule } from '@angular/common/http'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { InMemoryDataService } from './services/inMemoryDataService/in-memory-data.service'
import { AngularFireStorageModule } from '@angular/fire/compat/storage'
import { AngularFireFunctionsModule } from '@angular/fire/compat/functions'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'

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
    MatButtonModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
