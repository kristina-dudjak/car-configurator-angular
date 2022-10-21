import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PagenotfoundComponent } from './views/pagenotfound/pagenotfound.component'
import {
  redirectLoggedInTo,
  redirectUnauthorizedTo,
  canActivate
} from '@angular/fire/compat/auth-guard'

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login'])

const redirectLoggedInToConfigurator = () =>
  redirectLoggedInTo(['configurator'])

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/auth/auth.module').then(m => m.AuthModule),
    ...canActivate(redirectLoggedInToConfigurator)
  },
  {
    path: 'configurator',
    loadChildren: () =>
      import('./modules/configurator/configurator.module').then(
        m => m.ConfiguratorModule
      ),
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: '**',
    pathMatch: 'full',
    component: PagenotfoundComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
