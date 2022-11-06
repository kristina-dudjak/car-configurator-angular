import { Pipe, PipeTransform } from '@angular/core'
import { Configuration } from 'src/app/shared/models/Configuration'

@Pipe({
  name: 'finalConfigurationPrice'
})
export class FinalConfigurationPricePipe implements PipeTransform {
  transform ({ price, color, interior, wheel }: Configuration): number {
    return price + color.price + interior.price + wheel.price
  }
}
