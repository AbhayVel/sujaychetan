import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 

import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { Router, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    HeaderComponent,
    ProductComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '' , component: ProductComponent }  ,
      {path: 'product' , component: ProductComponent }  ,  
      {path: 'category' , component: CategoryComponent }  ,  
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule  { }
