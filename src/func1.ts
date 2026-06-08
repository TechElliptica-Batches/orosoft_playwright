
function add(a:number, b:number = 10): number{
    if(b){
        return  a + b;
    }else{
        return a;
    }
}

add(10, 20)