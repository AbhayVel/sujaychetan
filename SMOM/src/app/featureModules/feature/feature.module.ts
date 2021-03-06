import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagingComponent } from './paging/paging.component';
import { TableComponent } from './table/table.component';
import { ActionDirective } from './table/action.directive';
import { FilterDirective } from './table/filter.directive';
import { PopupComponent } from './popup/popup.component';
import { FormModelDirective } from './form/form-model.directive';
import { FormDirective } from './form/form.directive';
import { DateDirective } from './date.directive';
 


@NgModule({
  declarations: [
    PagingComponent,
    TableComponent,
    ActionDirective,
    FilterDirective,
    PopupComponent,
    FormModelDirective,
    FormDirective,
    DateDirective,
    
  ],
  imports: [
    CommonModule
  ],
  exports: [PagingComponent, TableComponent, ActionDirective,
    FilterDirective, PopupComponent, FormModelDirective, FormDirective, DateDirective]
})
export class FeatureModule { }
