// Object 
// pen 
// attribute - width, color, height 
// behaviour - write 

// Human
// attribute - name, height, age, weight
// behaviour - walk, talk, run, 

// class - template
// access modifier
// public - visible every where - default 
// private - within class 
// protected - inherited class 
// Inheritance 
// Encapsulation - POJO , getter setter 

export class Human{
    private _name: string = "";
    private _age : number = 0;
    
    constructor(name:string, age:number){
        this._name = name;
        this._age = age;
    }

    get age(){
        return this._age;
    }
    set name(name:string){
        if(this._name !== "vaibhav"){
            this._name = name;
        }
    }
    get name(){
        return this._name;
    }

    talk(content:string){
        console.log(`${this._name} - ${this._age} => ${content}`)
    }
}
const emp = new Human("vaibhav", 34);
emp.name = "Sanjay"
console.log(emp.name);
emp.talk("hello");


// class Test extends Human{
//     run(){
//        console.log(this.name);
//     }
// }
//emp.talk("Hello this is vaibhav");