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


 locationData= (o: Observer<any>) => {

   window.navigator.geolocation.getCurrentPosition((res) => {
     o.next(res);
   })

}

  getCurrentLatLan() {
    return new Observable(this.locationData);
  }

  myOf(...args: any) {
    return new Observable((o: Observer<any>) => {
      for (var i = 0; i < args.length; i++) {
        o.next(args[i]);
      }
      o.complete();
    })

  }


  myinterval(num: number) {
    let i = 0;
    return new Observable((o: Observer<any>) => {
      setInterval(() => {
        o.next(i++);
      }, num)
    })
  }


  startPromise() {
    return new Promise((succ) => {
      setInterval(() => {
        succ(new Date())
      }, 1000)
    })
    
  }

  stopObsInterVal() {
    clearInterval(this.inertval)
  }

  inertval: any=0;

  startObs() {
  let  i = 0;
    return new Observable((o: Observer<any>) => {
      if (this.inertval != 0) {

      }
      this.inertval=  setInterval(() => {
        o.next(new Date())
        console.log(i++);
      }, 1000)
    })

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
