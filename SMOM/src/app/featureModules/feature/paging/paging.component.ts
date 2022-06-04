import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'smom-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class PagingComponent implements OnInit {

  @Input('config') pagingObject?: any;

  @Output() pagingEvent: EventEmitter<any>= new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }


  pageChange(p: number) {
    this.pagingEvent.next(p);
  }
}
