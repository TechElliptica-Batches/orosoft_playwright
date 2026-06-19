


function LogMethod(
    target:any, 
    propertyKey: string,
    descriptor: PropertyDescriptor
){
    console.log(`Log :  ${propertyKey}`)
}

class Student{

    @LogMethod
    display(){
        console.log("hello");
    }

}


let st1 = new Student();
st1.display();

//"experimentalDecorators": true,