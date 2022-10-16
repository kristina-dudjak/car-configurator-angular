import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AuthGuard } from './modules/auth/guards/auth.guard'
import { PagenotfoundComponent } from './views/pagenotfound/pagenotfound.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'configurator',
    loadChildren: () =>
      import('./modules/configurator/configurator.module').then(
        m => m.ConfiguratorModule
      ),
    canActivate: [AuthGuard]
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
