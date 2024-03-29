import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isHover = false;
  constructor(private ls: LoginService) { }

  ngOnInit(): void {
  }

  logout() {
    this.ls.logout();
  }

}
