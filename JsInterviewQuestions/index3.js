
var i=undefined

for(i=0;i<5;i++){
    setTimeout(()=>{
        console.log(i);
        },1000)
}

for(let i=0;i<5;i++){
   
    setTimeout(()=>{
        console.log(i);
        },1000)
}

for(var i=0;i<5;i++){
    setTimeout(function(){
        console.log(this.i);
        }.bind({i: i}),1000)
}


