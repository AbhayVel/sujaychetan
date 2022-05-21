import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showpercent'
})
export class ShowpercentPipe implements PipeTransform {

  transform(value: any): unknown {
    if(value===null || value===undefined){
      return '';
    }
    return `${value} %`;

  }

}
