import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'smom-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private ls: LoginService) {

  }

  ngOnInit(): void {
  }


  signIn(user: string, pass: string) {

    if (user == 'chetan' && pass == 'abc') {
      const user = {
        unserName: 'chetan',
        role: 'admin',

      }

      this.ls.login(user);
    } else if (user == 'abhay' && pass == 'abc') {
      const user = {
        unserName: 'Abhay',
        role: 'sales',

      }

      this.ls.login(user);
    } else if (user == 'sneha' && pass == 'abc') {
      const user = {
        unserName: 'Sneha',
        role: 'dev',

      }

      this.ls.login(user);
    }

  }

}
