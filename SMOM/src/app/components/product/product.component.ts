import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'smom-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Array<any>=[
    {
      id: 1,
      productName: 'Horn - Regular Size',
      rate: 225,
      currentQuantity: 14,
      totalQuantity: 24,
      brand: 'Automobile',
      category: 'Automobile',
      status: 1
    },
    {
      id: 2,
      productName: `<b>Horn -


      Small</b>`,
      rate: 200,
      currentQuantity: 5,
      totalQuantity: 10,
      brand: 'Automobile',
      category: 'Automobile',
      status: 1
    },
    {
      id: 3,
      productName: 'Pannal lok',
      rate: 60,
      currentQuantity: 2,
      totalQuantity: 5,
      brand: 'Automobile',
      category: 'Hero',
      status: 1
    }

  ]
  constructor() { }

 orderBy=-1;
  //varName: DataType
  sort(columnName: string){
    this.orderBy=this.orderBy*-1;
    let orderBy=this.orderBy;
    if(columnName =='productName'){
        this.products.sort(function(a,b){
          return a.productName>b.productName?-1*orderBy: 1*orderBy;
        })
    } else if(columnName=='rate'){
      this.products.sort(function(a,b){
        return a.rate>b.rate?-1*orderBy: 1*orderBy;
      })
    } else if(columnName=='currentQuantity'){
      this.products.sort(function(a,b){
        return a.currentQuantity>b.currentQuantity?-1*orderBy: 1*orderBy;
      })
    }
  }

  ngOnInit(): void {
  }

}
