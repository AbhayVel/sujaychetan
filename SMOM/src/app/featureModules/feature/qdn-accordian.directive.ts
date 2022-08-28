import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[smomQdnAccordian]'
})
export class QdnAccordianDirective {

  @Input() header? : string;
  @Input() isShow? : string;

  constructor(public temp: TemplateRef<any>) {



  }



}
