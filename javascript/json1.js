import jsonData from './data/student-data.json' with {type: 'json'}
import jp from "jsonpath"
// JSON - Javascript object notation
// Json - object = {} , array = []
// JSON Path

//console.log(jsonData)
const names = jp.query(jsonData, "$.students[?(@.marks.math < 50)].name")
console.log(names);

//obfuscation

// key, value
//console.log(student1MarksO["class_10_section_a"][0]["marks"]["math"])


// Assignment - approach logic
// 1 - Sum of Digit present in a number ?
// 78 = 7 + 8 = 15
// break this number in array and then sum 
// sum = 0
// 3445 % 10 = 5
// 3445 / 10 = 344.5 (Math.floor)
// 344 % 10 = 4
// 344 / 10 = 34
// 34 % 10 = 4
// 34/ 10 = 3
// 3 % 10 = 3
// 3 / 10 = 0
// Math.ceil  344.5 = 345   
// Math.floor 344.5 = 344
// Math.round  344.1 = 344 





// 2 - reverse a number
// 78 = 87
// 121 

// 3 - Sorting values inside 1 array
// [10,5,30,2,100]
// [2,5,10,30,100]

// 8 type of sorting 

// operator, condition statement, loops and iteration
// 1 - 
// 2 - 
// 3 - 


console.log(10 * "20" + "5");
// undefined , error, 
// 200 + 5 = 205
// NaN +. 5 = NaN
// 205 , error, undefined 
// 200 number + string
//2005



