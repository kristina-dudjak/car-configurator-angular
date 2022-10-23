import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CarsComponent } from './views/cars/cars.component'
import { HomeComponent } from './views/home/home.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'cars',
    component: CarsComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfiguratorRoutingModule {}
