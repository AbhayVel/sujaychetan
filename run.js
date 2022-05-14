let arr=  [
    {
      id: 1,
      productName: 'Horn - Regular Size',
      rate: 225,
      currentQuantity: 14,
      TotalQuantity: 24,
      brand: 'Automobile',
      category: 'Automobile',
      status: 1
    },
    {
      id: 2,
      productName: 'Horn - Small',
      rate: 200,
      currentQuantity: 5,
      TotalQuantity: 10,
      brand: 'Automobile',
      category: 'Automobile',
      status: 1
    },
    {
      id: 3,
      productName: 'Pannal lok',
      rate: 60,
      currentQuantity: 2,
      TotalQuantity: 5,
      brand: 'Automobile',
      category: 'Hero',
      status: 1
    }

  ];

console.log("First Way");
//first type 
for(var i=0;i<arr.length;i++){
console.log(arr[i].productName);
}

console.log("Second Way");
//Second type 
for(var i in arr){
    console.log(arr[i].productName);
}

console.log("Third Way");
//Third type 
for(var a of arr){
    console.log(a.productName);
}
var count=2;
var title="Mr."
var str=`${title} abhay

velankar  ${count}`;
console.log(str);

var arrInt= [0,3,1,2,7,90,6];
arrInt.sort(function(a,b){
    return a> b?1:-1;
})
console.log(arrInt.join(":->"))
arrInt.sort(function(a,b){
    return a> b?-1:1;
})

console.log(arrInt.join(":->"))