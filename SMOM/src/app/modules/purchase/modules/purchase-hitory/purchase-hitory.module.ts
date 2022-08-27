import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ListComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'hlist', component: ListComponent },
      { path: 'add', component: ViewComponent },
      { path: '', component: ViewComponent }
    ])
  ]
})
export class PurchaseHitoryModule { }
