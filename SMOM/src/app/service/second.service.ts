import { Injectable } from '@angular/core';
import { FirstService } from './first.service';


export class SecondService {

  constructor() { }


  getData() {
    return "I am in ovveride Data Service";
  }
}
