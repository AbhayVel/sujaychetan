import { Pipe, PipeTransform } from '@angular/core';
import { LoginService } from '../service/login.service';

@Pipe({
  name: 'role'
})
export class RolePipe implements PipeTransform {


  constructor(private ls : LoginService) {

  }

  //"admin,dev"
  transform(value: string): unknown {

    const arr = value.split(",").map((e) => e.trim().toLowerCase());

    return arr.indexOf(this.ls.user.role.toLowerCase())>-1

  }

}
