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
import { ConfigurationInfoComponent } from './components/configuration-info/configuration-info.component'
import { ExteriorComponent } from './views/exterior/exterior.component'
import { ExteriorSidebarComponent } from './components/exterior-sidebar/exterior-sidebar.component'
import { ElementPickerComponent } from './components/element-picker/element-picker.component'
import { ElementItemComponent } from './components/element-item/element-item.component'
import { InteriorComponent } from './views/interior/interior.component'
import { InteriorSliderComponent } from './components/interior-slider/interior-slider.component'
import { InteriorSidebarComponent } from './components/interior-sidebar/interior-sidebar.component'
import { NavBarComponent } from './components/nav-bar/nav-bar.component'
import { CarListComponent } from './components/car-list/car-list.component'
import { CarConfigurationComponent } from './components/car-configuration/car-configuration.component'
import { ColorPickerComponent } from './components/color-picker/color-picker.component'
import { WheelPickerComponent } from './components/wheel-picker/wheel-picker.component'
import { InteriorPickerComponent } from './components/interior-picker/interior-picker.component'
import { FinalConfigurationPricePipe } from './pipes/final-configuration-price.pipe'
import { SummaryComponent } from './views/summary/summary.component'
import { ConfigurationFooterComponent } from './components/configuration-footer/configuration-footer.component';
import { SavedConfigurationsComponent } from './components/saved-configurations/saved-configurations.component'

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
    InteriorSidebarComponent,
    NavBarComponent,
    CarListComponent,
    CarConfigurationComponent,
    ColorPickerComponent,
    WheelPickerComponent,
    InteriorPickerComponent,
    FinalConfigurationPricePipe,
    SummaryComponent,
    ConfigurationFooterComponent,
    SavedConfigurationsComponent
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
