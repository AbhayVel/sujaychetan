import { Component, OnInit } from '@angular/core';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isLogin = false;
  constructor(private ls: LoginService) {

  }
    ngOnInit(): void {
      this.ls.loginBehaviur.subscribe((isLogin) => {
        this.isLogin = isLogin;
      })
    }
  title = 'SMOM';
}
