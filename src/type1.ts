type Student = {
    id: number,    
    firstName: string,
    lastName?: string
}

const vaibhav1:Student = {
    id: 1,
    firstName: "Vaibhav",
    lastName: ""
}


type Status = "Pending" | "Success" | "Failed";
let testStatus:Status = "Pending";


function showMeStatus(a:Status){
    console.log(a);
}

showMeStatus("Success")
