
// Arrays
// 3 subject = math, science, arts
// 100 students , 3 subject 

// Collections
// 1 - arrays are indexed , 0 
// 2 - array are dynamic in nature , increase and decrease
// add
// push = add value after last index. 
// unshift = add value in start
// remove
// pop = remove value at last index. 
// shift = remove value from start
// splice
//student1Marks.shift();

// slice - original array not impacted 
// splice - delete data from array , add new to array , 
// 3 param, start, delete count, element(s) to add

// student1Marks.splice(2, 0, 100,101,102)
// console.log(student1Marks);
// console.log(student1Marks[100]);

let student1Marks = [ 70, 80, 90 ];

let student2Marks = [75, 85, 95, 60];
let student3Marks = [73, 83, 93];

// 2D Array, 60D
let allStudentMarks = [student1Marks, student2Marks,student3Marks]
console.table(allStudentMarks)
console.log(allStudentMarks[1][2])
console.log(student2Marks.length);


// excel, spread sheet, = example of 2D array
// let slicedArr = student1Marks.slice(2,4)
// console.log(slicedArr);
// console.log(student1Marks);





