import { ElementRef, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[smomFormModel]',
  exportAs: "formModel" //template ref
})
export class FormModelDirective implements OnInit {

  @Input('smomFormModel') model?: any;

  get isValid() {
    this.validateElement(this.elementRef.nativeElement);
    if (Object.keys(this.errors).length <= 1) {
      return true;
    } else {
      return false;
    }
  }

  constructor(public elementRef: ElementRef<any>) { }
  ngOnInit(): void {

    //this.validateElement(this.elementRef.nativeElement);
    }
  public errors: any = {
    message:[]
  };

  @HostListener('input',['$event'])  //Adding the event
  changeData($event: any) {
    let element = $event.target;
    let value = element.value;
    let name = element.getAttribute("name");
    this.model[name] = value;
    this.validateElement(element);
  }

  public validate() {
  
    this.validateElement(this.elementRef.nativeElement);
  }

  validateElement(element: any) {
    let value = element.value;
    let name = element.getAttribute("name")
    let label = element.getAttribute("displayLabel")
    label = label == null ? name : label;
    this.errors = {
      message:[]
    }
    let errors = this.errors;
    //errors.message = [];
    //for (let key in errors) {
    //  if (key != "message") {
    //    delete errors[key];
    //  }
    //}
    if (element.validity.valueMissing) {
      errors['required'] = true;
      errors.message.push(`${label} is require.`)
    }

    let minValue = element.getAttribute("min")
    if (minValue !== null) {
      if ((+value) < (+minValue)) {
        errors['min'] = true;
        errors.message.push(`Please enter value greater then ${minValue}`)
      }
    }

    let maxValue = element.getAttribute("max")
    if (maxValue !== null) {
      if ((+value) > (+maxValue)) {
        errors['max'] = true;
        errors.message.push(`Please enter value less then ${maxValue}`)
      }
    }

    let minLengthValue = element.getAttribute("minLength")
    if (minLengthValue !== null) {
      if (value.length < (+minLengthValue)) {
        errors['minLength'] = true;
        errors.message.push(`Please enter value length greater then ${minLengthValue}`)
      }
    }

    let maxLengthValue = element.getAttribute("max-Length")
    if (maxLengthValue !== null) {
      if (value.length > (+maxLengthValue)) {
        errors['maxLength'] = true;
        errors.message.push(`Please enter value length less then ${maxLengthValue}`)
      }
    }

    if (Object.keys(errors).length == 1) {
      errors = null;
    }

  }


}
