import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLogin = false;
  loginBehaviur: BehaviorSubject<any> = new BehaviorSubject<any>(false);

  constructor(private router: Router) { }

  login(user: any) {
    this.isLogin = true;
    this.loginBehaviur.next(true);
    this.router.navigate(['']);
  }
}
