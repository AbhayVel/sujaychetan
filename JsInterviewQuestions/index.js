var arr=[1,2,3,4,6,6];
console.log(arr[0]);
arr[0]="a";
console.log(arr[0]);
arr["name"]="Quickitdotnet";
console.log(arr["name"]);
console.log(arr);
class Human{
    address='blank';
}

class Employee extends Human {
    id=1;
    name="aa"

    showName(){
        console.log(this.name);
    }


    showName(aaa){
        console.log(this.name);
    }

}

function Person(){
    data="aa";
    this.id=1;
    this.name="aaa";


}


Person.prototype=new Human();
var showName= function(){
    console.log(this.name);
}
var emp=new Employee();

console.log( emp.address)
console.log( emp instanceof Employee)
emp=new Person();
console.log( emp.address)
console.log( emp instanceof Employee)
//emp=12;
console.log(typeof emp)
console.log(emp.showName)
 

var showNameIns= showName.bind(emp);
showNameIns();

showName.call(emp,1,23,4,5);
showName.apply(emp,[1,23,4,5]);



/*

1. CLass 
2. Object 
pollym..
Inheritance
Abstraction/Encapsula

*/