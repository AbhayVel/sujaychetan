import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FirstComponent implements OnChanges, OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {


  @Input('data') data?: boolean;
  constructor() { }

  ngOnChanges(changes: any): void {

    console.log("First -I am in ngOnChanges"); //Second, When ever Change in Porperty

  }




  ngOnInit(): void {

    debugger;
    console.log("First -I am in ngOnInit");


  }

  ngDoCheck(): void {
    console.log("First -I am in ngDoCheck");
  }
  ngAfterContentInit(): void {
    debugger;
    console.log("First -I am in ngAfterContentInit");
  }
  ngAfterContentChecked(): void {
    console.log("First -I am in ngAfterContentChecked");
  }
  ngAfterViewInit(): void {
    debugger;
    console.log("First -I am in ngAfterViewInit");
  }
  ngAfterViewChecked(): void {
    console.log("First -I am in ngAfterViewChecked");
  }
  ngOnDestroy(): void {
    console.log("First -I am in ngOnDestroy");
  }

}
