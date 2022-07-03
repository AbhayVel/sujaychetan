import { Injectable } from '@angular/core';
import { FirstService } from './first.service';

 
export class SecondService {

  constructor(private first: FirstService) { }
}
