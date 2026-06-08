// Declearation Merging 
interface Student{
    id: number,    
}

interface Student{
    readonly firstName: string,
    lastName?: string
}



let student_vaibhav:Student = {
    "firstName" : "Vaibhav",
   "id" : 23
}
//student_vaibhav.firstName = "jignesh";
console.log(student_vaibhav.firstName)


