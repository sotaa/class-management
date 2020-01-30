import {
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../../../../authentication/services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuardStudent implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    if (
      this.authService
        .getCurrentUser()
        .roles.map(
          m =>
            m.title === 'ادمین کل' ||
            m.title === 'ادمین' ||
            m.title === 'مدیریت اموزش'
        )
        .includes(true)
    ) {
      return true;
    } else {
      return this.router.createUrlTree(['/']);
    }
  }
}
