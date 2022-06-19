import { QueryList } from '@angular/core';
import { AfterContentInit } from '@angular/core';
import { ContentChildren, Directive } from '@angular/core';
import { FormModelDirective } from './form-model.directive';

@Directive({
  selector: '[smomForm]',
  exportAs: 'smomForm'
})
export class FormDirective implements AfterContentInit {

  @ContentChildren(FormModelDirective, { descendants: true }) formElements?: QueryList<FormModelDirective>;

  public controls: any = {};
 get isValid() {
    let isValid = true;
    this.formElements?.forEach((e: FormModelDirective) => {
      isValid = isValid && e.isValid;
    });
   return isValid;
  }

  constructor() { }
    ngAfterContentInit(): void {
      this.formElements?.forEach((e: FormModelDirective) => {
        this.controls[e.elementRef.nativeElement.getAttribute("name")] = e;
      });
    }

}
