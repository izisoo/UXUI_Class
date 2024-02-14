// // let arr = [1, 2, 3, 4];
// // let arrStr = ["a", "b", "c"];
// // let arr01 = [];

// // console.log(arr[2]);
// // console.log(arrStr.length);

// // let var1 = Symbol();
// // let var2 = Symbol();

// // console.log(var1 === var2);

// let id = Symbol();

// const member01 = {
//   name: "Kim",
//   [id]: 12345,
// };

// member01.id = 6789;

// const member02 = {
//   name: "Kim",
//   id: 12345,
// };

// console.log(member02);

// // const member02 = {
// //   name: "Park",
// //   id: "abc",
// // };

// let grade = Symbol("grade");
// member01[grade] = "VIP";
// console.log(member01);

// const fnc = function () {
//   console.log("test");
// };

// let str = "20";
// let num = 10;

// let result = str + num;
// console.log(result);

// let result01 = str - num;
// console.log(result01);

// console.log(Number(true));
// console.log(Number("Hi!"));

// //Number() vs parseInt() vs parseFloat()

// // const userAge = parseInt(prompt("당신의 나이를 입력하세요!"));
// // console.log(typeof userAge);

// console.log(parseInt(false));

// const userHot = parseFloat(prompt("당신의 체온을 입력해주세요!"));

// console.log(userHot);

// let num = 10;

// console.log(typeof num.toString());
// console.log(Boolean(5));

const degree = parseFloat(prompt("당신의 화씨 온도를 입력하세요"));

const result = (degree - 32) / (1.8).toFixed(1);

document.write(`화씨 ${degree}도는 섭씨 ${result}도 입니다!`);
