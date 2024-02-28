// // 객체!
// // 프로퍼티!1
// // 프로퍼티 = 속성
// // key : value 한 쌍 => 프로퍼티

// const book1 = {
//   title: "자바스크립트",
//   pages: 648,
// };

// //온점 표기법
// console.log(book1.title);

// // 대괄호 표기법
// console.log(book1["pages"]);

// book1.pages = 50;

// console.log(book1.pages);

// book1.author = "David";
// console.log(book1.author);

// // 프로토타입 = 붕어빵 틀
// // 인스턴스 = 붕어빵 틀을 활용해서 만들어진 붕어빵

// new Date();
// new Object();
// new Array();

// const book2 = new Object();
// console.log(typeof book2);

// book2.title = "Typescript";
// book2.pages = 500;
// book2.author = "Alice";

// console.log(book2)

// delete book2.pages;
// console.log(book2)

// 객체 중첩~!

// const student = {
//   name: "David",
//   score: {
//     history: 85,
//     science: 94,
//     average: function () {
//       return (this.history + this.science) / 2;
//     },
//   },
// };

// console.log(student.score.history)
// console.log(student.score.average())

// const book3 = {
//   title : "파이썬",
//   pages : 360,
//   buy() {
//     console.log("이 책을 구입했습니다")
//   }
// }

// console.log(book3)

// this
// 1) addEventListener => 콜백함수 / 화살표함수 => window
// 2) addEventListener => 콜백함수 / 익명함수 => 바로 위에 상위요소
// 3) 객체 메서드 함수를 생성할 때 => 익명함수 => this 바로위에 상위요소
// 4) 객체 메서드 함수를 생성할 때 => 화살표함수 => this => window

// const book4 = {
//   title : "HTML5 + CSS3",
//   author : "Peter",
//   pages : 500,
//   done : false,
//   finish : funtion () {
//     this.done === false ? console.log("읽는 중") : console.log("완독"),
//   },
// }

// book4.finish();

//원시타입 => 숫자, 문자, 논리 : primitive
// 참조타입 => 객체 : reference
// 원본 데이터 자료 && 사본 데이터 자료

// const book1 = {
//   title: "인구와 투자의 미래",
//   pages: 500,
//   publish: "2024-02-28",
//   price: 30000,
// };
// 커스터마이징 된 객체를 생성!
// 생성자 "함수" => 다른 일반적인 함수와는 기능 상이함
// 함수이름 첫글자 => 대문자 입력
// 생성자함수 = 붕어빵 틀
// 만들어질 객체 = 붕어빵

// function Book(title, pages, done = false) {
//   this.title = title;
//   this.pages = pages;
//   this.done = done;
//   this.finish = function () {
//     let str = "";
//     this.done === flase ? (str = "읽는 중") : (str = "완독");
//   };
// }

// const book1 = new Book("자바스크립트", 648, false);
// const book2 = new Book("파이썬", 360, true);
// console.log(book1)
// console.log(book2)

// class

// class Book2 {
//   constructor(title, pages, done) {
//     this.title = title;
//     this.pages = pages;
//     this.done = done;
//   }

//   finish() {
//     let str = "";
//     this.done === false ? (str = "읽는중") : (str = "완독");
//   }
// }

// const book4 = new Book2("html5", 380, true);
// console.log(book4)

// 원기둥의 부피 = 밑면적 x 높이
// 밑면적 = 파이 x ((지름 / 2) 제곱)

// 생성자 함수 혹은 class를 활용해서 코드 작성

// console.log(height);
// console.log(diameter);

// const form = document.querySelector("form");

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
// });

// class calc {
//   constructor(pi, diameter, height) {
//     this.pi = Math.PI;
//     this.diameter = document.querySelector("#cyl-diameter").value;
//     this.height = document.querySelector("#cyl-height").value;
//   }
//   finish() {
//     let result = this.pi * (this.diameter / 2) ** 2;
//     return result;
//   }
// }``
// const myCalc = new calc();
// const result = myCalc.finish();
// document.querySelector("#result").innerHTML = result;

// function Cylinder(cyldiameter, cylheight) {
//   this.diameter = cyldiameter;
//   this.height = cylheight;
//   this.getVolume = function () {
//     let radius = this.diameter / 2;
//     return (Math.PI * radius * radius * this.height).toFixed(2);
//   };
// }

// const cyliner = new Cylinder();
// console.log(`원기둥의 부피는 ${cyliner.getVolume()} 입니다.`);

const form = document.querySelector("form");
const button = document.querySelector(input[(type = "submit")]);
const result = document.querySelector("#result");

class Cylinder {
  constructor(cylinderDiameter, cylinderHeight) {
    this.diameter = cylinderDiameter;
    this.height = cylinderHeight;
  }

  getVolume() {
    let radius = this.diameter / 2;
    return (Math.PI * radius * radius * this.height).toFixed(2);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const diameter = document.querySelector("#cyl-diameter").value;
  const height = document.querySelector("#cyl-height").value;

  if(diameter === "" || height === "") {
    result.innerText = "지름과 높이값을 입력하세요!"
  } else {
    const cylinder = new Cylinder(parseInt(diameter), parseInt(height));
    result.innerText = `원기둥의 부피는 ${cylinder.getVolume()} 입니다.`
  }

});
