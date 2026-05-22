

// let marks = [
//     {
//         "name":"vaibhav5",
//         "marks" : 40
//     },
//     {
//         "name":"vaibhav1",
//         "marks" : 50
//     },
//     {
//         "name":"vaibhav2",
//         "marks" : 30
//     }
// ]
// marks.sort((a,b) => a.name.localeCompare(b.name));
// console.log(marks);

// map - creating new array

// let arr = [5, 1,5,2,9,10,13,100,124];


//arr.sort( (a , b) => a - b );

//reduce - aggregation

// let totalSum = arr.reduce((a,b) => a + b, 0)
// console.log(totalSum);

// comparison function in array
// some(any value) and every (every)
// let status1= arr.every( x => x > 0);
// console.log(status1);


// let fArr = arr.filter(x => x > 10)
// console.log(fArr);

// const nArr = arr.map(x => x * 2)
// console.log(nArr)

// arr.reverse();
// console.log(arr);

//1 10 13 100 124
// 1 10 100 124 13 
// value - as string

// console.log(arr);



// let a1 = [10,20];
// let a2 = [30,40];
// let c1 = a1.concat(a2);
// console.log(c1);




let arr= [ 10, [10,20], [[30,40,50,[60,70]]]]

// level 10, [], []
// 
// 

// console.table(arr);
console.log(arr.flat(3));

