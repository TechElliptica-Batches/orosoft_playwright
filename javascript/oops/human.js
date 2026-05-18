
export class Human{
    constructor(name , age){
        this.name = name;
        this.age = age;
    }
    
    talk(content){
        console.log(this.name , "->",content)
    }
}

let obj1 = new Human("Vaibhav", 35);
let obj2 = new Human("Sachin", 40);

obj1.talk("Hello");
obj2.talk("hello Vaibhav. how r u ?")



// Page object model