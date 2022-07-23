import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Product } from '../models/product';
import { ApiCallService } from './api-call.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products!: Array<Product>;
  url: string = 'https://chetan-c4219-default-rtdb.firebaseio.com/Data.json?';
  constructor(private api: ApiCallService) { }


  getAllData() {
    return new Promise((res, rej) => {
      this.api.get(this.url).subscribe((r: any) => {
        this.products = r;
        res(this.products);
      })     
    })
   
  }

  getById(id: number) {
    return new Observable((o: Observer<any>) => {
      if (this.products == null) {
        this.getAllData().then((r) => {
          let index = this.products.findIndex((e) => {
            return e.id == id;
          });
          if (index > -1) {
            o.next(this.products[index]);
          } else {
            o.next(new Product());
          }
        })
      } else {
        let index = this.products.findIndex((e) => {
          return e.id == id;
        });

        if (index > -1) {
          o.next(this.products[index]);
        } else {
          o.next(new Product());
        }
      }
    

      
    })
  }

  deleteData(obj: Product) {
    return new Observable((o: Observer<any>) => {
      let index = this.products.findIndex((e) => {
        return e.id == obj.id;
      });

      if (index > -1) {
        this.products.splice(index, 1);
      } 
      debugger;
      this.api.put(this.url, this.products).subscribe((r) => {
        o.next(r);
      }, (error) => {
        o.error(error);
      })
    })
  }


  save(obj: Product) {

    return new Observable((o: Observer<any>) => {
      let index = this.products.findIndex((e) => {
        return e.id == obj.id;
      });

      if (index > -1) {
        this.products.splice(index, 1, obj);        
      } else {
        this.products.sort((a, b) => {
          return a.id > b.id ? -1: 1;
        })

        obj.id = this.products[0].id + 1;
        this.products.push(obj);

      }

      this.api.put(this.url, this.products).subscribe((r) => {
        o.next(r);
      })


    })
  }

}
