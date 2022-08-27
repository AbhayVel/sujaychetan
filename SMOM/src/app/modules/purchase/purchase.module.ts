import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchseListComponent } from './purchse-list/purchse-list.component';
import { PurchseAddEditComponent } from './purchse-add-edit/purchse-add-edit.component';
import { RouterModule } from '@angular/router';
import { DataPComponent } from './data-p/data-p.component';
 



@NgModule({
  declarations: [
    PurchseListComponent,
    PurchseAddEditComponent,
    DataPComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'list', component: PurchseListComponent,

        children: [
          {path: 'data', component: DataPComponent}

        ]

      },
      { path: 'edit/:id', component: PurchseAddEditComponent },
      { path: 'add', component: PurchseAddEditComponent },
      { path: '', component: PurchseAddEditComponent },
      { path: 'history', loadChildren: () => import('./modules/purchase-hitory/purchase-hitory.module').then(c=>c.PurchaseHitoryModule)}

    ]),
    
  ]
})
export class PurchaseModule { }
