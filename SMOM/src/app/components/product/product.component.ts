import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { filter, getGridPaging, sorts } from 'src/app/utilities/utility';
import { SortModel } from '../../models/sort-model';

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
      categoryId: 1,
      category:{
        id: 1,
        name: 'Automobile'
      } ,
      status: 2
    },
    {
      id: 2,
      productName: `Horn - Small`,
      rate: 200,
      currentQuantity: 5,
      totalQuantity: 10,
      brand: 'Automobile',
      categoryId: 2,
      category:{
        id: 1,
        name: 'Automobile'
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
      categoryId: 3,
      category:{
        id: 3,
        name: 'Hero'
      } ,
      status: 1
    },
    {
      id: 4,
      productName: 'Pannal lok',
      rate: 60,
      currentQuantity: 2,
      totalQuantity: 5,
      brand: 'Automobile',
      categoryId: 3,
      category: {
        id: 3,
        name: 'Hero'
      },
      status: 1
    },
    {
      id: 5,
      productName: 'Pannal lok',
      rate: 60,
      currentQuantity: 2,
      totalQuantity: 5,
      brand: 'Automobile',
      categoryId: 3,
      category: {
        id: 3,
        name: 'Hero'
      },
      status: 1
    },
    {
      id: 6,
      productName: 'Pannal lok',
      rate: 60,
      currentQuantity: 2,
      totalQuantity: 5,
      brand: 'Automobile',
      categoryId: 3,
      category: {
        id: 3,
        name: 'Hero'
      },
      status: 1
    },
    {
      id: 7,
      productName: 'Pannal lok',
      rate: 60,
      currentQuantity: 2,
      totalQuantity: 5,
      brand: 'Automobile',
      categoryId: 3,
      category: {
        id: 3,
        name: 'Hero'
      },
      status: 1
    },
    {
      id: 8,
      productName: 'Pannal lok',
      rate: 60,
      currentQuantity: 2,
      totalQuantity: 5,
      brand: 'Automobile',
      categoryId: 3,
      category: {
        id: 3,
        name: 'Hero'
      },
      status: 1
    },
    {
      id: 9,
      productName: 'Pannal lok',
      rate: 60,
      currentQuantity: 2,
      totalQuantity: 5,
      brand: 'Automobile',
      categoryId: 3,
      category: {
        id: 3,
        name: 'Hero'
      },
      status: 1
    },
    {
      id: 10,
      productName: 'Pannal lok',
      rate: 60,
      currentQuantity: 2,
      totalQuantity: 5,
      brand: 'Automobile',
      categoryId: 3,
      category: {
        id: 3,
        name: 'Hero'
      },
      status: 1
    },
    {
      id: 11,
      productName: 'Pannal lok',
      rate: 60,
      currentQuantity: 2,
      totalQuantity: 5,
      brand: 'Automobile',
      categoryId: 3,
      category: {
        id: 3,
        name: 'Hero'
      },
      status: 1
    },
    {
      id: 12,
      productName: 'Pannal lok',
      rate: 60,
      currentQuantity: 2,
      totalQuantity: 5,
      brand: 'Automobile',
      categoryId: 3,
      category: {
        id: 3,
        name: 'Hero'
      },
      status: 1
    },
    {
      id: 13,
      productName: 'Pannal lok',
      rate: 60,
      currentQuantity: 2,
      totalQuantity: 5,
      brand: 'Automobile',
      categoryId: 3,
      category: {
        id: 3,
        name: 'Hero'
      },
      status: 1
    },
    {
      id: 14,
      productName: 'Pannal lok',
      rate: 60,
      currentQuantity: 2,
      totalQuantity: 5,
      brand: 'Automobile',
      categoryId: 3,
      category: {
        id: 3,
        name: 'Hero'
      },
      status: 1
    },
    {
      id: 15,
      productName: 'Pannal lok',
      rate: 60,
      currentQuantity: 2,
      totalQuantity: 5,
      brand: 'Automobile',
      categoryId: 3,
      category: {
        id: 3,
        name: 'Hero'
      },
      status: 1
    },
    {
      id: 16,
      productName: 'Pannal lok',
      rate: 60,
      currentQuantity: 2,
      totalQuantity: 5,
      brand: 'Automobile',
      categoryId: 3,
      category: {
        id: 3,
        name: 'Hero'
      },
      status: 1
    },
    {
      id: 17,
      productName: 'Pannal lok',
      rate: 60,
      currentQuantity: 2,
      totalQuantity: 5,
      brand: 'Automobile',
      categoryId: 3,
      category: {
        id: 3,
        name: 'Hero'
      },
      status: 1
    },
    {
      id: 18,
      productName: 'Pannal lok',
      rate: 60,
      currentQuantity: 2,
      totalQuantity: 5,
      brand: 'Automobile',
      categoryId: 3,
      category: {
        id: 3,
        name: 'Hero'
      },
      status: 1
    },
    {
      id: 19,
      productName: 'Pannal lok',
      rate: 60,
      currentQuantity: 2,
      totalQuantity: 5,
      brand: 'Automobile',
      categoryId: 3,
      category: {
        id: 3,
        name: 'Hero'
      },
      status: 1
    },
    {
      id: 20,
      productName: 'Pannal lok',
      rate: 60,
      currentQuantity: 2,
      totalQuantity: 5,
      brand: 'Automobile',
      categoryId: 3,
      category: {
        id: 3,
        name: 'Hero'
      },
      status: 1
    },
    {
      id: 21,
      productName: 'Pannal lok',
      rate: 60,
      currentQuantity: 2,
      totalQuantity: 5,
      brand: 'Automobile',
      categoryId: 3,
      category: {
        id: 3,
        name: 'Hero'
      },
      status: 1
    },
    {
      id: 22,
      productName: 'Pannal lok',
      rate: 60,
      currentQuantity: 2,
      totalQuantity: 5,
      brand: 'Automobile',
      categoryId: 3,
      category: {
        id: 3,
        name: 'Hero'
      },
      status: 1
    },
    {
      id: 23,
      productName: 'Pannal lok',
      rate: 60,
      currentQuantity: 2,
      totalQuantity: 5,
      brand: 'Automobile',
      categoryId: 3,
      category: {
        id: 3,
        name: 'Hero'
      },
      status: 1
    },
    {
      id: 24,
      productName: 'Pannal lok',
      rate: 60,
      currentQuantity: 2,
      totalQuantity: 5,
      brand: 'Automobile',
      categoryId: 3,
      category: {
        id: 3,
        name: 'Hero'
      },
      status: 1
    },
    {
      id: 25,
      productName: 'Pannal lok',
      rate: 60,
      currentQuantity: 2,
      totalQuantity: 5,
      brand: 'Automobile',
      categoryId: 3,
      category: {
        id: 3,
        name: 'Hero'
      },
      status: 1
    },
    {
      id: 26,
      productName: 'Pannal lok',
      rate: 60,
      currentQuantity: 2,
      totalQuantity: 5,
      brand: 'Automobile',
      categoryId: 3,
      category: {
        id: 3,
        name: 'Hero'
      },
      status: 1
    },
    {
      id: 27,
      productName: 'Pannal lok',
      rate: 60,
      currentQuantity: 2,
      totalQuantity: 5,
      brand: 'Automobile',
      categoryId: 3,
      category: {
        id: 3,
        name: 'Hero'
      },
      status: 1
    },
    {
      id: 28,
      productName: 'Pannal lok',
      rate: 60,
      currentQuantity: 2,
      totalQuantity: 5,
      brand: 'Automobile',
      categoryId: 3,
      category: {
        id: 3,
        name: 'Hero'
      },
      status: 1
    },
    {
      id: 29,
      productName: 'Pannal lok',
      rate: 60,
      currentQuantity: 2,
      totalQuantity: 5,
      brand: 'Automobile',
      categoryId: 3,
      category: {
        id: 3,
        name: 'Hero'
      },
      status: 1
    },
    {
      id: 30,
      productName: 'Pannal lok',
      rate: 60,
      currentQuantity: 2,
      totalQuantity: 5,
      brand: 'Automobile',
      categoryId: 3,
      category: {
        id: 3,
        name: 'Hero'
      },
      status: 1
    },
    {
      id: 31,
      productName: 'Pannal lok',
      rate: 60,
      currentQuantity: 2,
      totalQuantity: 5,
      brand: 'Automobile',
      categoryId: 3,
      category: {
        id: 3,
        name: 'Hero'
      },
      status: 1
    },
    {
      id: 32,
      productName: 'Pannal lok',
      rate: 60,
      currentQuantity: 2,
      totalQuantity: 5,
      brand: 'Automobile',
      categoryId: 3,
      category: {
        id: 3,
        name: 'Hero'
      },
      status: 1
    },
    {
      id: 33,
      productName: 'Pannal lok',
      rate: 60,
      currentQuantity: 2,
      totalQuantity: 5,
      brand: 'Automobile',
      categoryId: 3,
      category: {
        id: 3,
        name: 'Hero'
      },
      status: 1
    },
    {
      id: 34,
      productName: 'Pannal lok',
      rate: 60,
      currentQuantity: 2,
      totalQuantity: 5,
      brand: 'Automobile',
      categoryId: 3,
      category: {
        id: 3,
        name: 'Hero'
      },
      status: 1
    },
   

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
    },

    pages: [1, 2, 3, 4, 5, 6],
    currentPage: 1,
    rowsPerPage: 5,
    startRow: 0,
    endRow: 0,
    totalRows: 0
  }

  columnDef = [
    {
      columnName: "id",
      type: 'num',
      displayText: 'Id',
      isSorting: true,
      isFiltering: true
    },
    {
      columnName: "productName",
      type: 'cs',
      displayText: 'product Name',
      isSorting: false,
      isFiltering: true
    },
    {
      columnName: "rate",
      type: 'cs',
      displayText: 'Rate',
      isSorting: true,
      isFiltering: true
    },
    {
      columnName: "currentQuantity",
      type: 'cs',
      displayText: 'current Quantity',
      isSorting: true,
      isFiltering: true
    },
    {
      columnName: "totalQuantity",
      type: 'cs',
      displayText: 'totalQuantity',
      isSorting: true,
      isFiltering: true
    },
    {
      columnName: "brand",
      type: 'cs',
      displayText: 'Brand',
      isSorting: true,
      isFiltering: true
    },
    {
      columnName: "currentQuantity",
      type: 'cs',
      displayText: 'current Quantity',
      isSorting: true,
      isFiltering: true
    },
    {
      columnName: "status",
      type: 'cs',
      displayText: 'Status',
      isSorting: true,
      isFiltering: true
    },
    {
      columnName: "action",
      type: 'cs',
      displayText: 'Action',
      isSorting: false,
      isFiltering: false
    },
  ]

  constructor() { }

  pageChange(p: number) {
    if (p < 1 || p > this.filterObject.pages.length) {
      return;
    }
    this.filterObject.currentPage = p;
    getGridPaging(this.filterObject, this.sortObj);
  }
  filterData(columnName: string, eve: any)  {
    let value = eve.target.value;
    this.filterObject.filter[columnName].value=value;
    this.pageChange(this.filterObject.currentPage);

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

  sortObj: SortModel={
    orderBy : -1,
    columnName:'id',  
    sortType : 'num'
}

  //orderBy = -1;
  //columnName='id'
  ////varName: DataType
  //sortType='num'
  sort(columnName: string,sortType: string){
    this.sortObj.orderBy = this.sortObj.orderBy * -1;
    this.sortObj.columnName = columnName;
    this.sortObj.sortType = sortType;
    this.pageChange(this.filterObject.currentPage);
  }

  ngOnInit(): void {
    this.filterObject.data = this.products;
    this.filterObject.rows = this.products;
    this.pageChange(1);
  }

}
