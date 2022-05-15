import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'smom-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
   
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

  filterObject: any = {
    rows: [],
    data: []
  }


  constructor() { }


  filterData(columnName: string, eve: any)  {
    let value = eve.target.value;
    let rows = this.filterObject.data;
    if (value == '') {
      return;
    }

    rows = rows.filter((e: any) => {
      if (value == '') {
        return true;
      }
      return e.id == value;
    });

    this.filterObject.rows=rows;
  }

  getSortIcon(selfColumnName: string,columnName: string, orderBy: number) : string {
    if (selfColumnName != columnName) {
      return 'sorting';
    }
    if (orderBy == -1) {
      return 'sorting_asc';
    }   
    return 'sorting_desc';
    
  }


  orderBy = -1;
  columnName='id'
  //varName: DataType
  sort(columnName: string){
    this.orderBy = this.orderBy * -1;
    this.columnName = columnName;
    //let orderBy = this.orderBy;

    this.filterObject.rows.sort((a: any, b: any)=> {
      return a[columnName] > b[columnName] ? -1 * this.orderBy : 1 * this.orderBy;
    })

    //if(columnName =='productName'){
    //  this.products.sort((a, b)=> {  //call back function <- where Declare can take variable of tht scope 
    //    debugger;
    //   let instanceOrderBy = this.orderBy;
    //   // let localOrderBy = orderBy;
    //    return a.productName > b.productName ? -1 * this.orderBy : 1 * this.orderBy;
    //    })
    //} else if(columnName=='rate'){
    //  this.products.sort(function(a,b){
    //    return a.rate>b.rate?-1*orderBy: 1*orderBy;
    //  })
    //} else if(columnName=='currentQuantity'){
    //  this.products.sort(function(a,b){
    //    return a.currentQuantity>b.currentQuantity?-1*orderBy: 1*orderBy;
    //  })
    //}
  }

  ngOnInit(): void {
    this.filterObject.data = this.products;
    this.filterObject.rows = this.products;
  }

}
