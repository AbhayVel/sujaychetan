import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../service/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate, CanLoad {

  constructor(private ls: LoginService, private router: Router) {

  }
    canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      if (this.ls.isLogin) {
        return true;
      } else {
        this.ls.loginBehaviur.next(false);
        this.router.navigate(['login']);
        return false;
      }
    }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.ls.isLogin) {
      return true;
    } else {
      this.ls.loginBehaviur.next(false);
      this.router.navigate(['login']);
      return false;
    }
  }
  
}
