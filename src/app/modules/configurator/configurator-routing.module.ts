import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CarsComponent } from './views/cars/cars.component'
import { ConfigurationComponent } from './views/configuration/configuration.component'
import { ExteriorComponent } from './views/exterior/exterior.component'
import { HomeComponent } from './views/home/home.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'cars',
    component: CarsComponent
  },
  {
    path: 'cars/:name',
    component: ConfigurationComponent
  },
  {
    path: 'cars/:name/exterior',
    component: ExteriorComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfiguratorRoutingModule {}
