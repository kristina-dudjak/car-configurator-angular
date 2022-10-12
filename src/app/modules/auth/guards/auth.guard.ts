import { Injectable } from '@angular/core'
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router'
import { Observable } from 'rxjs'
import { AuthService } from '../services/auth/auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor (private authService: AuthService, private router: Router) {}

  canActivate (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const url: string = state.url
    return this.checkLogin(url)
  }

  checkLogin (url: string): true | UrlTree {
    // this.authService.user.subscribe(user => {
    //   if (user?.uid) {
    //     console.log(user)
    //     return true
    //   }
    //   console.log(user)
    //   return false
    // })
    console.log('checking isLoggedIn')
    console.log(this.authService.isLoggedIn)
    if (this.authService.isLoggedIn) {
      console.log('logged in')
      return true
    }
    this.authService.redirectUrl = url
    return this.router.parseUrl('/login')
  }
}
