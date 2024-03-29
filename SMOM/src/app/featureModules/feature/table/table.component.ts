import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { AfterContentInit, Output, QueryList } from '@angular/core';
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
export class TableComponent implements OnInit, AfterContentInit, OnChanges {

  @ContentChildren(FilterDirective) filter?: QueryList<FilterDirective>;

@Input()  isServerSide? : boolean = false;
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

  @Input() data?: any;

  constructor() { }
    ngOnChanges(changes: SimpleChanges): void {
      getGridPaging(this.filterObject, this.sortObj);

    }
    ngAfterContentInit(): void {
      debugger;
      this.filter?.forEach((e: any) => {
        this.filterElements[e.name] = e.temp;
      })

      this.action?.forEach((e: any) => {
        this.actionElements[e.name] = e.temp;
      })

    }

  ngOnInit(): void {
    debugger;
    this.sortObj = this.filterObject.sortObj;
    getGridPaging(this.filterObject, this.sortObj);
  }

  @Output() PageChange : EventEmitter<number>= new EventEmitter<number>()

  pageChange(p: number) {

    if (p < 1 || (p > this.filterObject.pages.length)) {
      return;
    }
    this.filterObject.currentPage = p;

    if (this.isServerSide) {
      this.PageChange.next(p);
    } else {
      getGridPaging(this.filterObject, this.sortObj);
    }

  }

  filterDataDirect(columnName: string, value: any) {
    this.filterObject.filter[columnName].value = value;
    getGridPaging(this.filterObject, this.sortObj);
  }

  filterData(columnName: string, eve: any) {
    let value = eve.target.value;
    this.filterObject.filter[columnName].value = value;

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
