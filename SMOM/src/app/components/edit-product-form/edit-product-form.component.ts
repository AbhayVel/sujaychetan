import { ViewChild } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormDirective } from '../../featureModules/feature/form/form.directive';
 

@Component({
  selector: 'smom-edit-product-form',
  templateUrl: './edit-product-form.component.html',
  styleUrls: ['./edit-product-form.component.css']
})
export class EditProductFormComponent implements OnInit {

  @ViewChild('form') form?: FormDirective;
  @Input() product: any;
  constructor() { }

  ngOnInit(): void {
  }

   
  save() {
    if (this.form?.isValid) {
      console.log("I am valid")
    } else {
      console.log("I am in valid")
    }
    
  }


}
