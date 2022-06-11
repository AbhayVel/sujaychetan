import { AfterContentInit, QueryList } from '@angular/core';
import { Component, ContentChildren, Input, OnInit } from '@angular/core';
import { SortModel } from '../../../models/sort-model';
import { getGridPaging } from '../../../utilities/utility';
import { ActionDirective } from './action.directive';
import { FilterDirective } from './filter.directive';

@Component({
  selector: 'smom-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, AfterContentInit {

  @ContentChildren(FilterDirective) filter?: QueryList<FilterDirective>;

  filterElements: any = {

  }

  @ContentChildren(ActionDirective) action?: QueryList<ActionDirective>;

  actionElements: any = {

  }

  @Input() columnDef?: any;

   sortObj?: SortModel = {
    orderBy: -1,
    columnName: 'id',
    sortType: 'num'
  }

  @Input() filterObject?: any;

  constructor() { }
    ngAfterContentInit(): void {
      this.filter?.forEach((e: any) => {
        this.filterElements[e.name] = e.temp;
      })

      this.action?.forEach((e: any) => {
        this.actionElements[e.name] = e.temp;
      })

    }

  ngOnInit(): void {
    this.sortObj = this.filterObject.sortObj;
    getGridPaging(this.filterObject, this.sortObj);
  }

  pageChange(p: number) {
    if (p < 1 || (p > this.filterObject.pages.length)) {
      return;
    }
    this.filterObject.currentPage = p;
    getGridPaging(this.filterObject, this.sortObj);
  }

  filterDataDirect(columnName: string, value: any) {    
    this.filterObject.filter[columnName].value = value; 
    getGridPaging(this.filterObject, this.sortObj);
  }

  filterData(columnName: string, eve: any) {
    let value = eve.target.value;
    this.filterObject.filter[columnName].value = value;
    debugger;
    // this.pageChange(this.filterObject.currentPage);
    getGridPaging(this.filterObject, this.sortObj);
  }


 

  sort(columnName: any, sortType: any) {
    if (this.sortObj) {
      this.sortObj.orderBy = this.sortObj?.orderBy * -1;
      this.sortObj.columnName = columnName;
      this.sortObj.sortType = sortType;
    }   
    getGridPaging(this.filterObject, this.sortObj);
  }



  getSortIcon(selfColumnName: any, columnName: any, orderBy: any): string {
    if (selfColumnName != columnName) {
      return 'sorting';
    }
    if (orderBy == -1) {
      return 'sorting_asc';
    }
    return 'sorting_desc';

  }


}
