import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription, of, interval, filter, map, Observable, ObservedValueOf, Observer, skip, findIndex } from 'rxjs';
import { IMessage } from '../../interface/imessage';
import { CompanyAddress } from '../../models/company-address';
import { Employee,Abc,   } from '../../models/employee';
import { CalcService } from '../../service/calc.service';

import { EmailMessage } from '../../service/email-message';
import { FirstService } from '../../service/first.service';
import { Message } from '../../service/message';
import { SmsMessage } from '../../service/sms-message';


function MyMap(fun: any) {

  return function (Obs: Observable<any>) {   //currying function 
    return new Observable((o: Observer<any>) => {
      Obs.subscribe((r) => {
        o.next(fun(r))
      },
        (err) => {

        } ,
        () => {
          o.complete();
        }

      )
    })
  }
}

function MyFilter(fun: any) {
  return function (Obs: Observable<any>) {   //currying function 
    return new Observable((o: Observer<any>) => {
      Obs.subscribe((r) => {
        let t = fun(r);
        debugger;
        if (fun(r)) {
          o.next(r)
        }
      
      },
        (err) => {

        },
        () => {
          o.complete();
        }


      )
    })
  }
}


function MySkip(num: number) {
  return function (Obs: Observable<any>) {   //currying function
    let i = 1;
    return new Observable((o: Observer<any>) => {

      Obs.subscribe((r) => {
        if (i > num) {
          o.next(r);
        }
        i = i + 1;

         
        

      },
        (err) => {

        },
        () => {
          o.complete();
        }


      )
    })
  }
}



function MyFindIndex(fun : any) {
  return function (Obs: Observable<any>) {   //currying function
    let i = 0;
    return new Observable((o: Observer<any>) => {

      Obs.subscribe((r) => {
        if (fun(r)) {
          o.next(i);
          o.complete();
        }
        i = i + 1;



      },
        (err) => {

        },
        () => {
          o.complete();
        }


      )
    })
  }
}

@Component({
  selector: 'smom-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CategoryComponent implements OnInit {

 // first!: FirstService;
  constructor(private first: FirstService, private cal: CalcService) {
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
  result: any = "";
  message: any = "";
  timeCallBack = "";
  timePromise = "";
  timeObs = "";
  startCallBack() {
    this.cal.startCallBack((res: any) => {
      this.timeCallBack = res;
    });
  }

  startPromise() {
    this.cal.startPromise().then((res: any) => {
      this.timePromise = res;
    });
     
  }

  currentLocation: string = "";

  getLL() {
    this.cal.getCurrentLatLan().subscribe((r: any) => {
      debugger;
      this.currentLocation = `your current location is ${r.coords.latitude} ${r.coords.longitude}`;

    })
  }
  getMyOf() {
    this.cal.myOf(1, 2, 3, 4, 5).subscribe((r) => {
      console.log(`I am in My of ${r}`)
    })
  }

  getOf() {
    of(1, 2, 3, 4, 5).subscribe((r) => {
      console.log(`I am in of ${r}`)
    })
  }
  getInterval() {
    interval(1000).subscribe((r) => {
      console.log(`I am in Interval ${r}`)
    })
  }

  getMyInterval() {
    this.cal.myinterval(1000).subscribe((r) => {
      console.log(`I am in my Interval ${r}`)
    })
  }


  getMyMap() {
    of(1, 23, 6, 8, 9, 5, 2, 7, 16, 18).pipe(MyMap((x: any) => x * 3)).subscribe((r) => {

      console.log(`I am in of ${r}`)
    })
  }

  getMap() {
    of(1, 23, 6, 8, 9, 5, 2, 7, 16, 18).pipe(map(x => x*3)).subscribe((r) => {

      console.log(`I am in of ${r}`)
    })
  }

  getMyFilter() {
    of(1, 23, 6, 8, 9, 5, 2, 7, 16, 18).pipe(map(x => x * 3), MyFilter((x: any) => x % 2 == 0)).subscribe((r) => {

      console.log(`I am in of ${r}`)
    })
  }

  getFilter() {
    of(1, 23, 6, 8, 9, 5, 2, 7, 16, 18).pipe(MyFindIndex((x: any)=>x==2)).subscribe((r) => {
 
      console.log(`I am in of ${r}`)
    })
  }
  stopObs() {
    debugger;
    if (this.mysub) {
      this.cal.stopObsInterVal();
      this.mysub.unsubscribe();
    }
  
  }

  mysub!: Subscription;
  startObs() {
  this.mysub=  this.cal.startObs().subscribe((res: any) => {
    this.timeObs = res;

    });

  }
  async calc(a: any, b: any) {



    // try {
    //  this.result = await this.cal.devObs(a, b).toPromise();
    //  this.message = "";
    //} catch (ex) {
    //  this.message = ex;
    //}

    //this.cal.devObs(a, b).toPromise().then((res) => {
    //  debugger;
    //  this.result = res;
    //  this.message = "";
    //}, (ex) => {
    //  debugger;
    //  this.result = "";
    //  this.message = ex;
    //});

    //this.cal.devObs(a, b).subscribe((res) => {
    //  this.result = res;
    //  this.message = "";
    //},
    //  (ex) => {
    //    this.result = "";
    //    this.message = ex;
    //  },

    //)
    //try {
    //  this.result = await this.cal.devPromise(a, b);
    //  this.message = "";
    //} catch (ex) {
    //  this.message = ex;
    //}
  
    //this.cal.devPromise(a, b).then((res) => {
    //  this.result = res;
    //  this.message = "";
    //}, (ex) => {
    //  this.result = "";
    //  this.message = ex;
    //});

    //this.cal.devCallBack(a, b, (res: any) => {
    //  this.result =res;
    // this.message = "";
    //}, (ex: any) => {
    //  this.result = "";
    //  this.message = ex;
    //}


   // )
    //try {
    //  this.result = this.cal.dev(a, b);
    //  this.message = "";
    //} catch (ex) {
    //  this.message = ex;
    //  this.result = "";
    //}
   
  }

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
