import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'getRedirectRoute'
})
export class GetRedirectRoutePipe implements PipeTransform {
  transform (route: string): string {
    if (route === 'exterior') return 'interior'
    return 'summary'
  }
}
