import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
 

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor() { }

  startCallBack(succ: any) {
    setInterval(() => {
      succ(new Date())
    }, 1000)
  }

  devObs(a: number, b: number) {
    return new Observable((o: Observer<any>) => {
      debugger;
      if (isNaN(a)) {
        o.error("a should be a number");
        return;
      }
      else if (isNaN(b)) {
        o.error("b should be a number");
        return;
      }
      else if (b == 0) {
        o.error("b should be greater then zero");
        return;
      }
      o.next(a / b);
    })



  }

  devPromise(a: number, b: number) {
    return new Promise((succ, fail) => {
      if (isNaN(a)) {
        fail("a should be a number");
        return;
      }
      else if (isNaN(b)) {
        fail("b should be a number");
        return;
      }
      else if (b == 0) {
        fail("b should be greater then zero");
        return;
      }
      succ(a / b);
    })


   
  }



  devCallBack(a: number, b: number, fail: any, succ: any) {
    if (b == 0) {
      fail("b should be greater then zero");
      return;
    }
    succ( a / b);
  }

  dev(a: number, b: number) {
    if (b == 0) {
      throw "b should be greater then zero";
    }
    return a / b;
  }
}
