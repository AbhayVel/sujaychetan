import { Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { QdnAccordianDirective } from '../qdn-accordian.directive';

@Component({
  selector: 'smom-qdn-accordian',
  templateUrl: './qdn-accordian.component.html',
  styleUrls: ['./qdn-accordian.component.css']
})
export class QdnAccordianComponent implements OnInit {

  @ContentChildren(QdnAccordianDirective) ac?: QueryList<QdnAccordianDirective>;
  constructor() { }

  ngOnInit(): void {
  }

  show(a: QdnAccordianDirective){

    this.ac?.forEach((e)=>{
      if(e==a){
        e.isShow='1'
      }else {
        e.isShow='0';
      }
    })
    // if(a.isShow=='0'){
    //   a.isShow='1';
    // }else {
    //   a.isShow='0';
    // }
    }

}
