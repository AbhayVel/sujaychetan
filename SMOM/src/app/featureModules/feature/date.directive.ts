import { ElementRef, HostBinding, HostListener, OnInit } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[smomDate]',
  exportAs: 'dateControl'
})
export class DateDirective implements OnInit {

  constructor(private ele: ElementRef<any>) { }
  ngOnInit(): void {
  
      this.changeDate(this.ele.nativeElement, this.ele.nativeElement.value );
    }


  @HostBinding('class.invalid2') get isInValid() {
    return !this.isValid;
  }

  @HostBinding('attr.in-valid') get isIn_Valid() {
    return !this.isValid;
  }


  getDate(d: Date) {

    return `${d.getDate()}-${d.getMonth()+1}-${d.getFullYear()}`
  }

  isValidDate(dateStr: string): boolean {
    let arrDate: Array<any> = dateStr.split('-');
 
    if (arrDate.length != 3) {
      return false;
    }
    let d = new Date(+arrDate[2], (+arrDate[1]-1), +arrDate[0]);
    
    if (d.getDate() == +arrDate[0] && (d.getMonth()+1) == +arrDate[1] && d.getFullYear() == +arrDate[2]) {
      return true;
    }
    return false;
  }

  isValid: boolean=true;

  @HostListener('blur',['$event.target', '$event.target.value'])
  changeDate($event: any, value: any) {
    
    let val = $event.value.toLowerCase();

    let d = new Date();
    
    if ("today".indexOf(val) > -1) {
      $event.value = this.getDate(d);
    } else if ("yesterday".indexOf(val) > -1) {
      let num = d.getDate();
      num = num - 1;
      d.setDate(num);
      $event.value = this.getDate(d);
    } else if ("tomarrow".indexOf(val) > -1) {
      let num = d.getDate();
      num = num + 1;
      d.setDate(num);
      $event.value = this.getDate(d);
    }

    
    this.isValid = this.isValidDate($event.value)
    console.log(this.isValid);

  }

}
