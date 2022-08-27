import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { RouterModule } from '@angular/router';
 



@NgModule({
  declarations: [
    ListComponent,
    AddComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'list', component: ListComponent },
      { path: 'edit/:id', component: AddComponent },
      { path: '', component: ListComponent },
      { path: 'view', component: ViewComponent}

    ])
  ]
})
export class OrderModule { }
