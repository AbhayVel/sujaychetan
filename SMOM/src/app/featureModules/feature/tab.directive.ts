import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[smomTab]'
})
export class TabDirective {

  @Input() header? : string;
  @Input() isShow? : string;

  constructor(public temp: TemplateRef<any>) {
  }

}
