import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concat'
})
export class ConcatPipe implements PipeTransform {

  transform(value: unknown, ...add: any[]): unknown {
    let result = value;

    for (let i = 0; i < add.length; i = i + 1) {
      result = `${result}-${add[i]}  4`;
    }

    return result;
  }

}
