import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  orderBy = -1;
  sort(columnName: string) {
    this.orderBy = this.orderBy * -1;

    this.fiterData.rows.sort((a: any, b:any) => {
      return a[columnName] > b[columnName] ? -1*this.orderBy : 1*this.orderBy;
    })
  }


  fiterData: any={
  data: [],
    rows: [],
    filter: {
      id: {
        columnName: 'id',
        value: '',
        type: 'num'
      },
      name: {
        columnName: 'name',
        value: '',
        type: 'ci'
      },
      age: {
        columnName: 'age',
        value: '',
        type: 'num'
      },
      ageGte: {
        columnName: 'age',
        value: '',
        type: 'numGte'
      },
      ageLte: {
        columnName: 'age',
        value: '',
        type: 'numLte'
      },
    }
}
  filters(columnName: string,coluumnType: string, $event: any) {
    let val = $event.target.value;
    let rows = this.fiterData.data;
    this.fiterData.filter[columnName].value = val;
    debugger;

    for (let key in this.fiterData.filter) {
      debugger;
      let col = this.fiterData.filter[key].columnName;
      let colType = this.fiterData.filter[key].type;
      let value = this.fiterData.filter[key].value;

      rows = rows.filter((e: any) => {
        if (value == '') {
          return true;
        }
        if (colType == 'ci') {
          return e[col].toLowerCase().indexOf(value.toLowerCase()) > -1;
        } if (colType == 'numGte') {
          return e[col] >= value;
        } if (colType == 'numLte') {
          return e[col] <= value;
        }  else {
          return e[col] == val;
        }

      })
    }
   



    this.fiterData.rows = rows;
  }
  users = [
    {
      id: 1,
      name: "Abhay",
      age: 23
    },
    {
      id: 2,
      name: "Sneha",
      age: 21
    },
    {
      id: 3,
      name: "Chetan",
      age: 20
    },



  ]
  constructor() { }

  ngOnInit(): void {

    this.fiterData.rows = this.users;
    this.fiterData.data = this.users
  }

}
