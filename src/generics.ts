

function add(a:number, b:number){
    return a + b;
}

function append(a:string, b:string){
    return a + b;
}

function add2info1(a:any, b:any){
    if(typeof a === 'number' && typeof b === "number"){
        return a + b;
    }else if(typeof a === 'string' && typeof b === "string"){
        return a + b;    
    }
}



function add2info<T>(a:T, b:T){
    if(typeof a === 'number' && typeof b === "number"){
        return a + b;
    }else if(typeof a === 'string' && typeof b === "string"){
        return a + b;    
    }else{
        throw new Error("Invalid data")
    }
}

//add2info1("10d",20);
add2info<number>(10,20);
add2info<number>(10,10);
add2info<string>("vaibhav","singh");
try{
    add2info<boolean>(true, false);
}catch(error){

}

console.log("hello");