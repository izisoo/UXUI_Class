// const str1 = "Good morning, everyone. Beautiful morning";
// console.log(str1.indexOf("morning"));
// console.log(str1.indexOf("evening"));
// console.log(str1.indexOf("morning", firstIndex + 1));
console.log("=====str2.startsWith=====");
const str2 = "Hello, everyone";
console.log(str2.startsWith("Hello"));
console.log(str2.startsWith("hello"));
console.log(str2.startsWith("he"));
console.log(str2.startsWith("Hello, ev"));
console.log(str2.startsWith("el", 1));
console.log(str2.startsWith("o", 4));

console.log("=====str2.endsWith=====");
console.log(str2.endsWith("everyone"));
console.log(str2.endsWith("Everyone"));
console.log(str2.endsWith("everyone."));
console.log(str2.endsWith("one"));
console.log(str2.endsWith("lo, everyone"));
console.log(str2.endsWith("he"));

console.log("=====str2.includes=====");
console.log(str2.includes("every"));
console.log(str2.includes("one"));

console.log("=====str3.trim=====");
const str3 = "ab cd ef";
const str3_1 = "ab cd ef";
console.log(str3_1);
console.log(str3);
console.log(str3_1.trim());
console.log(str3_1.trimStart());
console.log(str3_1.trimEnd());

console.log("=====str4.toUpperCase/toLowerCase=====");
let str4 = "Good Morning";
console.log(str4.toUpperCase());
console.log(str4.toLowerCase());

console.log("=====str4.substring=====");
console.log(str4.substring(5, 8));
console.log(str4.substring(5));
console.log(str4.substring(-5, 11));
//음수값을 전혀 인식하지 못함!!! => 음수값이 들어오는 순간 바로 0으로 치환

console.log("=====str4.slice=====");
console.log(str4.slice(0, 4));
console.log(str4.slice(0));
console.log(str4.slice(-5, 11));

console.log("=====str4.split=====");
const str5 = "Hellow, everyone";
const array1 = str5.split(" ");
const array2 = str5.split("");
console.log(array1)
console.log(array2)


