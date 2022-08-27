function cal(a){
    return function add(b,c){
        return a+b+c;
    }
}

var addc=cal(1);
var t=addc(2,3)
console.log(t);

arr=[1,2,3,4];
var i=0;
arr[++i]=arr[i++]+arr[++i];
console.log(arr.join(","));
