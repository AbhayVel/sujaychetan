class DummyController{

  products=  [
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


  orderBy=-1;
  //varName: DataType
  sort(columnName){
    this.orderBy=this.orderBy*-1;
    let orderBy=this.orderBy;
    if(columnName =='productName'){
      this.products.sort((a, b)=> { 

        console.log("I am in side sort method");
        console.log(`I am a instance variable ${this.orderBy}`);
        console.log(`I am a local variable ${orderBy}`);
       let instanceOrderBy = this.orderBy;
        let localOrderBy = orderBy;
        return a.productName > b.productName ? -1 * this.orderBy : 1 * this.orderBy;
        })
    } else if(columnName=='rate'){
      this.products.sort(function(a,b){
        return a.rate>b.rate?-1*orderBy: 1*orderBy;
      })
    } else if(columnName=='currentQuantity'){
      this.products.sort(function(a,b){
        return a.currentQuantity>b.currentQuantity?-1*orderBy: 1*orderBy;
      })
    }
  }



}

let dc= new DummyController();

dc.sort("productName");

dc.products.filter((e)=>{
  return e.id===1;
})

for(var a of dc.products){
  console.log(a.productName);
}


// var obj={
//   id: 1,
//   name: "chetan"
// }

// console.log(`id value is ${obj.id}`);
// console.log(`id value is ${obj['id']}`);
