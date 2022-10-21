import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeComponent } from './views/home/home.component'
import { ConfiguratorRoutingModule } from './configurator-routing.module'
import { EmptyHomeComponent } from './components/empty-home/empty-home.component'
import { MatButtonModule } from '@angular/material/button'

@NgModule({
  declarations: [HomeComponent, EmptyHomeComponent],
  imports: [CommonModule, ConfiguratorRoutingModule, MatButtonModule]
})
export class ConfiguratorModule {}
