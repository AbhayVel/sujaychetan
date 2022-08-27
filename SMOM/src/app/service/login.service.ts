import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLogin = false;
  public user: any;
  loginBehaviur!: BehaviorSubject<any>; 

  constructor(private router: Router) {
    const dataString = localStorage.getItem("user");
    if (dataString) {
      this.user = JSON.parse(dataString);
      this.isLogin = true;
      this.loginBehaviur  = new BehaviorSubject<any>(true);
      this.loginBehaviur.next(true);
    } else {
      this.loginBehaviur = new BehaviorSubject<any>(false);
      this.loginBehaviur.next(false);
    }
  }
  logout() {
    localStorage.clear();
    this.user = null;
    this.isLogin = false;
    this.loginBehaviur.next(false);
    this.router.navigate(['login']);
  }

  login(user: any) {
    this.user = user;

    const data = JSON.stringify(user);
    localStorage.setItem("user", data);

    this.isLogin = true;
    this.loginBehaviur.next(true);
    this.router.navigate(['']);
  }
}
