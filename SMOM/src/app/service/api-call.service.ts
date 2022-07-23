import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { ajax } from 'rxjs/ajax'

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private hc: HttpClient) { }


  getDataViaXmlHttpRequest(url: string) {
    return new Observable((o: Observer<any>) => {
      var http = new XMLHttpRequest();
      http.open('get', url);

      http.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            o.next(JSON.parse(this.responseText));
          } else {
            o.error(JSON.parse(this.responseText));
          }
        }
      }

      http.send();
    })
  }

  obj = {
    'content-type': 'application/json'
  }
  getDataViaFetch(url: string) {
    return new Observable((o: Observer<any>) => {
      fetch(url, {
        headers: this.obj
      }).then((res) => {
        res.json().then((r) => {
          o.next(r);
        })
      })
    })
  }


  getDataViaAjax(url: string) {
    return new Observable((o: Observer<any>) => {
      ajax(url).subscribe((r) => {
        debugger;
        o.next(r.response);
      })
    })
  }


  get(url: string) {
    return new Observable((o: Observer<any>) => {
      this.hc.get(url).subscribe((r) => {
        o.next(r);
      })
    })
  }


  put(url: string, data: any) {
    return new Observable((o: Observer<any>) => {
      this.hc.put(url+"a", data).subscribe((r) => {
        o.next(r);
      }, (error) => o.error(error));
    })
  }

}

 
