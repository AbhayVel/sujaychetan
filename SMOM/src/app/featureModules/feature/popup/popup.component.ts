import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { PopupConfig } from '../../../models/popup';
 
 

@Component({
  selector: 'smom-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit, OnChanges {

  //@Input() popupConfig?: PopupConfig;
  popupConfig?: PopupConfig;
  isdialogHide: boolean = false;

  @Output() colseEvent: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }
  ngOnChanges(changes: any): void {

    if (changes && changes.popupConfig && changes.popupConfig.currentValue.isShow) {
     

        
      }

  }

  open(popupConfig: PopupConfig ) {
    this.popupConfig = popupConfig;
    setTimeout(() => {
      this.isdialogHide = true;
    }, 100)
  }

  ngOnInit(): void {
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
