import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RegisterComponent } from './views/register/register.component'
import { LoginComponent } from './views/login/login.component'
import { ReactiveFormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { AngularFireAuthModule } from '@angular/fire/compat/auth'
import { AuthRoutingModule } from './auth-routing.module'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatButtonModule } from '@angular/material/button'
import { MatDialogModule } from '@angular/material/dialog'
import { AuthService } from './services/auth/auth.service'
import { PasswordResetComponent } from './components/password-reset/password-reset.component'

@NgModule({
  declarations: [RegisterComponent, LoginComponent, PasswordResetComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AuthRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [AuthService]
})
export class AuthModule {}
