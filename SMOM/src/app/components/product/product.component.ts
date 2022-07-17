import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { filter, getGridPaging, sorts } from 'src/app/utilities/utility';
import { PopupComponent } from '../../featureModules/feature/popup/popup.component';
import { PopupConfig } from '../../models/popup';
import { SortModel } from '../../models/sort-model';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'smom-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],

})
export class ProductComponent implements OnInit {

  products: Array<any> = [];
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
      },
      brand: {
        columnName: 'brand',
        type: 'cs',
        value: ''
      },
      status: {
        columnName: 'status',
        type: 'num',
        value: ''
      }
    },

    pages: [1, 2, 3, 4, 5, 6],
    currentPage: 1,
    rowsPerPage: 5,
    startRow: 0,
    endRow: 0,
    totalRows: 0,
    sortObj: {
      orderBy: -1,
      columnName: 'id',
      sortType: 'num'
    }
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
      isFiltering: false,
      isCustomFilter: true
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
      isFiltering: false
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
      isFiltering: false,
      isCustomFilter: true
    },
    {
      columnName: "action",
      type: 'cs',
      displayText: 'Action',
      isCustomData: true,
      isSorting: false,
      isFiltering: false,
     
    },
  ]
  popupConfig: PopupConfig = {
    isShow: false,
    headerName: 'Edit Product'
  }
  isOpenPopup = false;

  isOpenPopupT = false;
  product?: any;

  dated:string="aaaa"
  getDate(d: Date) {

    return `${d.getDate()}-${d.getMonth()}-${d.getFullYear()}`
  }
  
  changeDate($event: any) {
    debugger;
    let val = $event.target.value.toLowerCase();

    let d = new Date();
    let num = d.getDate();
    num = num - 1;
     d.setDate(num);
    if ("today".indexOf(val) > -1) {
      $event.target.value = this.getDate(new Date());
    } else if ("yesterday".indexOf(val) > -1) {
      $event.target.value = this.getDate(d);
    }
  }
  edit(data: any, a: any, b: any) {
    this.product = data;
    this.popupConfig.isShow = true;
    this.popupConfig = { ...this.popupConfig }
    this.isOpenPopup = true;
    this.myPopUp?.open(this.popupConfig);
  }

  editT(data: any, a: any, b: any) {
    this.product = data;
    this.popupConfig.isShow = true;
    this.popupConfig = { ...this.popupConfig }
    this.isOpenPopupT = true;
    this.myPopUpT?.open(this.popupConfig);
  }

  editR(data: any, a: any, b: any) {
    this.router.navigate(['product','edit',data.id,'click'  ])
  }
  @ViewChild('myPopUpT') myPopUpT?: PopupComponent;
  @ViewChild('myPopUp') myPopUp?: PopupComponent;
  close($event: any) {
     
    this.isOpenPopup = $event;
    this.isOpenPopupT = false;
  }
  constructor(private router: Router, private ps: ProductService) { }

 
 
  filterData($event: any, column: any, fun : any) {
    let value = $event.target.value;
    debugger;
    fun(column,value)
  }

 

   
 
  ngOnInit(): void {

    this.ps.getAllData().then((d) => {
      this.filterObject.data =d;
      this.filterObject.rows = d;
    })
   
    
  }

}
