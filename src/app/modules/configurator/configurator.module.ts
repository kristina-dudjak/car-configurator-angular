import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeComponent } from './views/home/home.component'
import { ConfiguratorRoutingModule } from './configurator-routing.module'
import { EmptyHomeComponent } from './components/empty-home/empty-home.component'
import { MatButtonModule } from '@angular/material/button'
import { MatDividerModule } from '@angular/material/divider'
import { CarsComponent } from './views/cars/cars.component'
import { CarItemComponent } from './components/car-item/car-item.component'
import { MatCardModule } from '@angular/material/card'
import { ConfigurationComponent } from './views/configuration/configuration.component'
import { CarSliderComponent } from './components/car-slider/car-slider.component'
import { MatIconModule } from '@angular/material/icon'
import { ConfigurationInfoComponent } from './components/configuration-info/configuration-info.component';
import { ExteriorComponent } from './views/exterior/exterior.component';
import { ExteriorSidebarComponent } from './components/exterior-sidebar/exterior-sidebar.component';
import { ElementPickerComponent } from './components/element-picker/element-picker.component';
import { ElementItemComponent } from './components/element-item/element-item.component';
import { InteriorComponent } from './views/interior/interior.component';
import { InteriorSliderComponent } from './components/interior-slider/interior-slider.component';
import { InteriorSidebarComponent } from './components/interior-sidebar/interior-sidebar.component'

@NgModule({
  declarations: [
    HomeComponent,
    EmptyHomeComponent,
    CarsComponent,
    CarItemComponent,
    ConfigurationComponent,
    CarSliderComponent,
    ConfigurationInfoComponent,
    ExteriorComponent,
    ExteriorSidebarComponent,
    ElementPickerComponent,
    ElementItemComponent,
    InteriorComponent,
    InteriorSliderComponent,
    InteriorSidebarComponent
  ],
  imports: [
    CommonModule,
    ConfiguratorRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule
  ]
})
export class ConfiguratorModule {}
