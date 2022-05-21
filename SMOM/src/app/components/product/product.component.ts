import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { filter, sorts } from 'src/app/utilities/utility';

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
      category:{
        id: 1,
        name: 'Automobile'
      } ,
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
      category:{
        id: 2,
        name: 'Other'
      } ,
      status: 1
    },
    {
      id: 3,
      productName: 'Pannal lok',
      rate: 60,
      currentQuantity: 2,
      totalQuantity: 5,
      brand: 'Automobile',
      category:{
        id: 3,
        name: 'Hero'
      } ,
      status: 1
    }

  ]

  filterObject: any = {
    rows: [],
    data: [],
    filter: {
      id: {
      columnName : 'id',
      type: 'num',
      value:''
      },
      productName: {
        columnName : 'productName',
        type: 'cs',
        value:''
        },
        rate: {
          columnName : 'rate',
          type: 'num',
          value:''
          },
          currentQuantityGte:{
            columnName : 'currentQuantity',
            type: 'numGte',
            value:''
          },
          currentQuantityLte:{
            columnName : 'currentQuantity',
            type: 'numLte',
            value:''
          }
    }
  }


  constructor() { }


  filterData(columnName: string, eve: any)  {
    let value = eve.target.value;
    this.filterObject.filter[columnName].value=value;
    let rows = filter(this.filterObject);
    rows= sorts(rows,this.columnName,this.orderBy);
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
  sort(columnName: string,sortType: string){
    this.orderBy = this.orderBy * -1;
    this.columnName = columnName;
    let rows =this.filterObject.rows;
    rows= sorts(rows,this.columnName,this.orderBy,sortType);
    this.filterObject.rows=rows;
  }

  ngOnInit(): void {
    this.filterObject.data = this.products;
    this.filterObject.rows = this.products;
  }

}