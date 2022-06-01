import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'smom-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CategoryComponent implements OnInit {

  constructor() { }
  categoryDetails: Array<any>=[
    {
        id:1,
        name: "Automobile",
        description: '<b> Automobile Cars/bike<b>'

    } ,
    {
       id: 2,
       name: "Electronics",
       description: '<b> Electrnic TV/Mobile<b>'
    },
    {
      id: 3,
      name: "Electrical",
      description: '<b> Eletrical Cars/bike<b>'
   },
   {
    id: 4,
    name: "Manual",
    description: '<b> Manula Cars/bike<b>'
   },

  ];

  orderBy = -1;

  sortColumn(columnName:any) {
    this.orderBy = this.orderBy*-1
    let orderBy = this.orderBy;
    this.categoryDetails.sort(function(a,b){
      return a[columnName]>b[columnName]? -1*orderBy : 1*orderBy;
    })
  }
  
  ngOnInit(): void {
  }

}
