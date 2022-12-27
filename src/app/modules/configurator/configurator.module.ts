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
import { MatMenuModule } from '@angular/material/menu'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { ConfigurationInfoComponent } from './components/configuration-info/configuration-info.component'
import { ExteriorComponent } from './views/exterior/exterior.component'
import { ElementPickerComponent } from './components/element-picker/element-picker.component'
import { ElementItemComponent } from './components/element-item/element-item.component'
import { InteriorComponent } from './views/interior/interior.component'
import { InteriorSliderComponent } from './components/interior-slider/interior-slider.component'
import { NavBarComponent } from './components/nav-bar/nav-bar.component'
import { CarListComponent } from './components/car-list/car-list.component'
import { CarConfigurationComponent } from './components/car-configuration/car-configuration.component'
import { FinalConfigurationPricePipe } from './pipes/final-configuration-price.pipe'
import { SummaryComponent } from './views/summary/summary.component'
import { ConfigurationFooterComponent } from './components/configuration-footer/configuration-footer.component'
import { SavedConfigurationsComponent } from './components/saved-configurations/saved-configurations.component'
import { SavedConfigurationComponent } from './components/saved-configuration/saved-configuration.component'
import { ConfigurationSidebarComponent } from './components/configuration-sidebar/configuration-sidebar.component'
import { SidebarItemComponent } from './components/sidebar-item/sidebar-item.component'
import { IsElementCheckedPipe } from './pipes/is-element-checked.pipe'
import { GetRedirectRoutePipe } from './pipes/get-redirect-route.pipe'

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
    ElementPickerComponent,
    ElementItemComponent,
    InteriorComponent,
    InteriorSliderComponent,
    NavBarComponent,
    CarListComponent,
    CarConfigurationComponent,
    FinalConfigurationPricePipe,
    SummaryComponent,
    ConfigurationFooterComponent,
    SavedConfigurationsComponent,
    SavedConfigurationComponent,
    ConfigurationSidebarComponent,
    SidebarItemComponent,
    IsElementCheckedPipe,
    GetRedirectRoutePipe
  ],
  imports: [
    CommonModule,
    ConfiguratorRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatProgressSpinnerModule
  ]
})
export class ConfiguratorModule {}
