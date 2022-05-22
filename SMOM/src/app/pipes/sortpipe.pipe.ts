import { Pipe, PipeTransform } from '@angular/core';
import { SortModel } from '../models/sort-model';
import { sorts } from '../utilities/utility';

@Pipe({
  name: 'sortpipe',
  pure: false
})
export class SortpipePipe implements PipeTransform {

  transform(list: any, sortObj: SortModel ): Array<any> {
    return sorts(list, sortObj.columnName, sortObj.orderBy, sortObj.sortType);
  }

}
