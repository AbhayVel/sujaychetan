import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[smomFilter]'
})
export class FilterDirective {

  @Input() public name?: string;
  constructor(public temp: TemplateRef<any>) { }

}
