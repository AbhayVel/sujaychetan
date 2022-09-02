import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core';
import { PopupConfig } from '../../../models/popup';



@Component({
  selector: 'smom-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnChanges, OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {

  //@Input() popupConfig?: PopupConfig;
  popupConfig?: PopupConfig;
  isdialogHide: boolean = false;

  @Output() colseEvent: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }
  ngOnChanges(changes: any): void {
    console.log("I am in ngOnChanges"); //Second, When ever Change in Porperty
    if (changes && changes.popupConfig && changes.popupConfig.currentValue.isShow) {



      }

  }




  ngOnInit(): void {

    debugger;
    console.log("I am in ngOnInit");


  }

  ngDoCheck(): void {
    console.log("I am in ngDoCheck");
  }
  ngAfterContentInit(): void {
    debugger;
    console.log("I am in ngAfterContentInit");
  }
  ngAfterContentChecked(): void {
    console.log("I am in ngAfterContentChecked");
  }
  ngAfterViewInit(): void {
    debugger;
    console.log("I am in ngAfterViewInit");
  }
  ngAfterViewChecked(): void {
    console.log("I am in ngAfterViewChecked");
  }
  ngOnDestroy(): void {
    console.log("I am in ngOnDestroy");
  }

  open(popupConfig: PopupConfig ) {
    this.popupConfig = popupConfig;
    setTimeout(() => {
      this.isdialogHide = true;
    }, 100)
  }





  close() {
    this.isdialogHide = false;

    setTimeout(() => {
      if (this.popupConfig) {
        this.popupConfig.isShow = false;
      }
      this.colseEvent.next(false);
    },5000)

  }
}
