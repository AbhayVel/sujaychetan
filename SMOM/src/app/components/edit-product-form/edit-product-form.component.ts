import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
 

@Component({
  selector: 'smom-edit-product-form',
  templateUrl: './edit-product-form.component.html',
  styleUrls: ['./edit-product-form.component.css']
})
export class EditProductFormComponent implements OnInit {

  @Input() product: any;
  constructor() { }

  ngOnInit(): void {
  }

  errors: any = {};

  changeData($event: any) {
    let element = $event.target;
    let value = element.value;
    console.log(`I am in change Data ${value}`);
    let name = element.getAttribute("name");
    this.product[name] = value;
    this.validateElement(element, this.errors);
  }

  validateElement(element:any, errors: any) {
    let value = element.value;
    let name = element.getAttribute("name")
    let label = element.getAttribute("displayLabel")
    label = label == null ? name : label;
    errors[name] = {
      message:[]
    };
    if (element.validity.valueMissing) {
      errors[name]['required'] = true;
      errors[name].message.push(`${label} is require.`)
    }
   
    let minValue = element.getAttribute("min")
    if (minValue !== null) {
      if ((+value) < (+minValue)) {
        errors[name]['min'] = true;
        errors[name].message.push(`Please enter value greater then ${minValue}`)
      }
    }

    let maxValue = element.getAttribute("max")
    if (maxValue !== null) {
      if ((+value) > (+maxValue)) {
        errors[name]['max'] = true;
        errors[name].message.push(`Please enter value less then ${maxValue}`)
      }
    }

    let minLengthValue = element.getAttribute("minLength")
    if (minLengthValue !== null) {
      if (value.length < (+minLengthValue)) {
        errors[name]['minLength'] = true;
        errors[name].message.push(`Please enter value length greater then ${minLengthValue}`)
      }
    }

    let maxLengthValue = element.getAttribute("max-Length")
    if (maxLengthValue !== null) {
      if (value.length > (+maxLengthValue)) {
        errors[name]['maxLength'] = true;
        errors[name].message.push(`Please enter value length less then ${maxLengthValue}`)
      }
    }

    if (Object.keys(errors[name]).length == 1) {
      delete errors[name]
    }

  }


  save() {
    let elements = document.querySelectorAll("[qdnModel]");
    for (var i = 0; i < elements.length; i++) {
      this.validateElement(elements[i], this.errors);
    }
    debugger;
    if (Object.keys(this.errors).length == 0) {
      console.log("I am a valid");


    } else {
      console.log("I am a invalid");
    }
  }


}
