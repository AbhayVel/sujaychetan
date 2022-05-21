import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryMaster'
})
export class CategoryMasterPipe implements PipeTransform {


  categories: Array<any>=[
    {
      id: 1,
      name:"Automobile"
    },
    {
      id: 2,
      name:"Atlas"
    },
    {
      id: 3,
      name:"Hero"
    },
  ]
  transform(value: unknown): unknown {
    let cat=this.categories.find((o)=>{
return o.id==value;
    })
    if(cat){
      return cat.name;
    }
    return 'N/A';
  }

}
