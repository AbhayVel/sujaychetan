// function namePrint(...a) {
//  // var a= arguments;
//   console.log(`${a[0]} ${a[1]} ${a[2]}`)
// }

// function namePrint2(a,b,c) {
//   // var a= arguments;
//    console.log(`${a} ${b} ${c}`)
//  }
 

// namePrint("Hi","abhay" , "QuickITDOtnet");

// var arr=["hi", "abhay", "quickITDotnet"]
// namePrint2(...arr)

var a="chetan";
var b="chetan";

console.log(a==b);

var history=3;
var current=3;

console.log(history==current);

var obj={
  name:"Chetan"
}

//var history=obj;
var history=Object.assign({},obj);
var current=obj;
current.name="sujay";


console.log(current.name);
console.log(history.name);
console.log(obj.name);
console.log(history==current);
current.name="aa";
console.log(history==current);
/*
Primitive
string 
number 
boolean
null
undefine 
*/
/*
Non-primitive
Object


symbol 

*/
