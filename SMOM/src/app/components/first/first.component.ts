import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FirstComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
