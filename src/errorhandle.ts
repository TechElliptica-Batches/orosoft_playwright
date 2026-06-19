
// InsufficentError 


class InValidLoginError extends Error{
    constructor(msg: string){
        super(msg);
        this.name = "InsufficentError (Amount not present account)"
    }
}

// function test(){
//     throw new InsufficentError("You balance is 1000. but you trying to send 5000.");
// }
// try{
//     test();
// }catch(InsufficentError){
//     console.log(InsufficentError)
// }
