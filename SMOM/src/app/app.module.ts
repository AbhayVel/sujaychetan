import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 

import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { Router, RouterModule } from '@angular/router';
import { ShowpercentPipe } from './pipes/showpercent.pipe';
import { CategoryMasterPipe } from './pipes/category-master.pipe';
import { StatusMasterPipe } from './pipes/status-master.pipe';
import { SortpipePipe } from './pipes/sortpipe.pipe';
import { ConcatPipe } from './pipes/concat.pipe';
import { FeatureModule } from './featureModules/feature/feature.module';
import { PagingComponent } from './featureModules/feature/paging/paging.component';
import { EditProductFormComponent } from './components/edit-product-form/edit-product-form.component';
import { EditProductTemplateDrivenComponent } from './components/edit-product-template-driven/edit-product-template-driven.component';
import { FormsModule } from '@angular/forms';
import { EditReactiveFOrmComponent } from './components/edit-reactive-form/edit-reactive-form.component';
import { FirstService } from './service/first.service';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    HeaderComponent,
    ProductComponent,
    CategoryComponent,
    ShowpercentPipe,
    CategoryMasterPipe,
    StatusMasterPipe,
    SortpipePipe,
    ConcatPipe,
    EditProductFormComponent,
    EditProductTemplateDrivenComponent,
    EditReactiveFOrmComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '' , component: ProductComponent }  ,
      {path: 'product' , component: ProductComponent }  ,  
      { path: 'category', component: CategoryComponent },
      {path:'product/edit/:id/:action', component: EditReactiveFOrmComponent}
    ]),
    FeatureModule,
    FormsModule,
    
  ],
  providers: [FirstService],
  bootstrap: [AppComponent]
})
export class AppModule  { }
