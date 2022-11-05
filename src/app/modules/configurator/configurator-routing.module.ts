import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CarConfigurationComponent } from './components/car-configuration/car-configuration.component'
import { CarListComponent } from './components/car-list/car-list.component'
import { CarsComponent } from './views/cars/cars.component'
import { ConfigurationComponent } from './views/configuration/configuration.component'
import { ExteriorComponent } from './views/exterior/exterior.component'
import { HomeComponent } from './views/home/home.component'
import { InteriorComponent } from './views/interior/interior.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'cars',
    component: CarsComponent,
    children: [
      {
        path: '',
        component: CarListComponent
      },
      {
        path: ':name',
        component: ConfigurationComponent,
        children: [
          {
            path: '',
            component: CarConfigurationComponent
          },
          {
            path: 'exterior',
            component: ExteriorComponent
          },
          {
            path: 'interior',
            component: InteriorComponent
          }
        ]
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfiguratorRoutingModule {}
