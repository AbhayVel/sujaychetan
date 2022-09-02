import { AfterContentInit, Component, ContentChildren, OnInit, QueryList, TemplateRef } from '@angular/core';
import { TabDirective } from '../tab.directive';

@Component({
  selector: 'smom-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit, AfterContentInit {

  @ContentChildren(TabDirective) tab?: QueryList<TabDirective>;

  constructor() { }
  ngAfterContentInit(): void {
     this.tab?.forEach((e)=>{
        if(e.isShow=='1' && !this.tempRef){
          this.tempRef=e.temp;
        }else {
          e.isShow='0';
        }
     })

     if(!this.tempRef && this.tab?.first){
      this.tempRef=this.tab?.first?.temp;
      this.tab.first.isShow="1";
     }
  }

  tempRef?: TemplateRef<any>;
  ngOnInit(): void {
  }

  show(t: TabDirective){
    this.tab?.forEach((e)=>{
      if(e==t){
        e.isShow="1";
        this.tempRef=e.temp;
      }else {
        e.isShow="0";
      }
    })
  }

}
