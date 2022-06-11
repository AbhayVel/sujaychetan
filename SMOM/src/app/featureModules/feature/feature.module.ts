import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagingComponent } from './paging/paging.component';
import { TableComponent } from './table/table.component';
import { ActionDirective } from './table/action.directive';
import { FilterDirective } from './table/filter.directive';
 


@NgModule({
  declarations: [
    PagingComponent,
    TableComponent,
    ActionDirective,
    FilterDirective,
    
  ],
  imports: [
    CommonModule
  ],
  exports: [PagingComponent, TableComponent, ActionDirective,
    FilterDirective,]
})
export class FeatureModule { }
