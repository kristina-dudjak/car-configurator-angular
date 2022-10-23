import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeComponent } from './views/home/home.component'
import { ConfiguratorRoutingModule } from './configurator-routing.module'
import { EmptyHomeComponent } from './components/empty-home/empty-home.component'
import { MatButtonModule } from '@angular/material/button'
import { CarsComponent } from './views/cars/cars.component'
import { CarItemComponent } from './components/car-item/car-item.component'
import { MatCardModule } from '@angular/material/card'

@NgModule({
  declarations: [
    HomeComponent,
    EmptyHomeComponent,
    CarsComponent,
    CarItemComponent
  ],
  imports: [
    CommonModule,
    ConfiguratorRoutingModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class ConfiguratorModule {}
