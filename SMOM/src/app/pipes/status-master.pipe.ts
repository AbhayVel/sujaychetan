import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusMaster'
})
export class StatusMasterPipe implements PipeTransform {

  transform(value: unknown): unknown {
    if(value==1){
      return `<label class="label label-success">Available</label>`
    }
    return `<label class="label label-danger">Not Available</label>`
  }

}
