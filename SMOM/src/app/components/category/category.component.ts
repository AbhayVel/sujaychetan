import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IMessage } from '../../interface/imessage';
import { CompanyAddress } from '../../models/company-address';
import { Employee,Abc,   } from '../../models/employee';

import { EmailMessage } from '../../service/email-message';
import { FirstService } from '../../service/first.service';
import { Message } from '../../service/message';
import { SmsMessage } from '../../service/sms-message';

@Component({
  selector: 'smom-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CategoryComponent implements OnInit {

 // first!: FirstService;
  constructor(private first: FirstService) {
    //this.first = first;
  }
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


  //Association -> Reusability
  //-->Method
  //Constructor
  //-->Property

  //Interface -> Reusability + Readability
  //Assciation +Interface/Abstract/Virtual=> Dependency Inversion;
  //-->Dependency Injection
  //-->Service Locator 
  //Dependency Inversion  + Third party Object Creation=> Inversion of Control 
  getPrefered(type: string) {
    if (type == 'Email') {
      return new EmailMessage();  //run time polimorphisim
    } else if (type == 'sms') {
      return new SmsMessage();
    } else {
      return new Message();
    }
  }
  showEmployee() {
    let address: CompanyAddress = new CompanyAddress();
    let message: Message = new Message();
    let message2: SmsMessage = new SmsMessage();
    let message3: EmailMessage = new EmailMessage();
    
    let emp: Employee = new Employee(address);
    let emp2: Employee = new Employee();
    emp2.setCompanyAddress(address);
    let m: IMessage = new SmsMessage();//Staic Polymorphisim/ compile time Polymorphisim;

    emp.PreferedMessage = m;//Dependency Injection

    m = this.getPrefered(emp2.PreferdMessageType='');

    emp.PreferedMessage = message2;
    emp2.setCompanyAddress(address);
    emp2.companyAddress = address;
    emp2.PreferedMessage = m; //service locator //run  time 




  }

  sortColumn(columnName:any) {
    this.orderBy = this.orderBy*-1
    let orderBy = this.orderBy;
    this.categoryDetails.sort(function(a,b){
      return a[columnName]>b[columnName]? -1*orderBy : 1*orderBy;
    })
  }
  
  ngOnInit(): void {
   //this.first
  }

}
