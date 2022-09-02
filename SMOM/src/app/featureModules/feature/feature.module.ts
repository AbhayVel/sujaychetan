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
import { QdnAccordianComponent } from './qdn-accordian/qdn-accordian.component';
import { QdnAccordianDirective } from './qdn-accordian.directive';
import { TabDirective } from './tab.directive';
import { TabComponent } from './tab/tab.component';



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
    QdnAccordianComponent,
    QdnAccordianDirective,
    TabDirective,
    TabComponent,

  ],
  imports: [
    CommonModule
  ],
  exports: [PagingComponent, TableComponent, ActionDirective,
    FilterDirective, PopupComponent, FormModelDirective, FormDirective, DateDirective,
    QdnAccordianComponent, QdnAccordianDirective,
    TabComponent,TabDirective
  ]
})
export class FeatureModule { }
