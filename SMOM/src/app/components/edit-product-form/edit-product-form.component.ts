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
  }

}
