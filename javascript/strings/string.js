
// String = array of char

// let str = "vaibhav";
// let str1 = 'vaibhav';
// let str2 = `${str}`;
        // v a i b h a v
// console.log(str, str1, str2)
// for (let ch of str){
//     console.log(ch);
// }



let text = "Hello this is javascript string";
console.log(text.length)
// trim
console.log(text);
console.log(text.trim());
console.log(text.replaceAll(" ","").length);
console.log("Uppercase - ",text.toUpperCase());
console.log("Lowercase - ",text.toLowerCase());

console.log(text.includes("javascript1"));
console.log(text.startsWith("He"));
console.log(text.endsWith("string"));

console.log(text.indexOf("javascript"));
console.log(text.indexOf("s",10));
console.log(text.indexOf("s",13));
console.log(text.indexOf("s",19));
console.log(text.indexOf("s",26));

console.log(text.charAt(12));

console.log(text.slice(10));
console.log(text.slice(-6));

const textAr = text.split("s");
console.log(textAr);

let string = "Rs 134/-"
console.log(string.split(" ")[1].split("/")[0])


