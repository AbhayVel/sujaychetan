import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RolePipe } from '../pipes/role.pipe';
import { LoginService } from '../service/login.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardGuard implements CanActivate {

  rolePipe!: RolePipe
  constructor(private ls: LoginService, private router: Router) {
    this.rolePipe = new RolePipe(this.ls);
  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const data: any = route?.data;
    const role = data['role'];
    debugger;
    if (this.rolePipe.transform(role)) {
      return true;
    } else {
      
      this.router.navigate(['unAuth']);
      return false;
    }
  }
  
}
