function show(){
    if(arguments.length==0){
        console.log("No Name Passed")
    } else if(arguments.length===1){
        console.log("welcome "+ arguments[0])
    }else {
        for(var i=0;i<arguments.length;i++){
            console.log("welcome "+ arguments[i])
        }
    }
}

show();
show("aa");
show("aa","asas");