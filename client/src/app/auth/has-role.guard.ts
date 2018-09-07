import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot} from '@angular/router';
import {AuthService} from "./auth.service";
import {Authenticated} from "./authenticated.guard";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable()
export class HasRole extends Authenticated implements CanActivate, CanActivateChild {

  constructor(authService: AuthService) {
    super(authService)
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    let roles: string[] = route.data['roles'];
    return super.canActivate(route, state).pipe(
      map(loggedIn => {
        if (loggedIn) {
          return this.authService.user.hasRoles(roles);
        }
        return loggedIn;
      })
    );
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.canActivate(route, state);
  }

}
