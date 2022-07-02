import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, NgForm, NgModel, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
 

function matchValue(model: NgModel): ValidatorFn  {
   
  return function(control: AbstractControl): ValidationErrors | null {
    if (control.value == '') {
      return null;
    }
    debugger;
    if (model.value == control.value) {
      return null;
    }

    return { "matchValue": true }

  }
}


function firstUpperValidator(control: AbstractControl): ValidationErrors | null {
  if (control.value == '') {
    return null;
  }

  let val: string = control.value;
  let first: string = val[0];
  if (first == first.toUpperCase()) {
    return null;
  }

  return {"firstUpper" : true}

}
@Component({
  selector: 'smom-edit-product-template-driven',
  templateUrl: './edit-product-template-driven.component.html',
  styleUrls: ['./edit-product-template-driven.component.css']
})
export class EditProductTemplateDrivenComponent implements OnInit {

  @ViewChild('formGroup') formGroup!: NgForm;
  constructor() { }


  @Input() product: any;
  ngOnInit(): void {
  }

  addValidator(productName: NgModel, id: NgModel) {
    let arr = [];
    arr.push(Validators.required)
    if (true) {
      arr.push(Validators.min(3))
      arr.push(Validators.max(10))
      arr.push(firstUpperValidator)
      arr.push(matchValue(id))
    }
     
    productName.control.setValidators(arr);
    productName.control.markAsDirty();
    
  }

  removeValidator(id: NgModel) {
    
    id.control.clearValidators();
    id.control.markAsPristine();
  }

  save(id: any) {
    debugger;
  }

}
