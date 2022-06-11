import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[smomAction]'
})
export class ActionDirective {

  @Input() public name?: string;
  constructor(public temp: TemplateRef<any>) { }


}
