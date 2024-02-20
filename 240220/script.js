// 자바스크립트에서 숫자를 어디까지 사용할 수 있을까?

// 비트 : 메모리의 최소단위
//바이트 : 8비트 => 1바이트

//js : 자료구조 & 알고리즘
// 제어문 : 반복분 => for, forEach, for in, for of

// const testNum = Number.MAX_SAFE_INTEGER;
// const testNum01 = Number.MIN_SAFE_INTEGER;
// console.log(testNum01);
// console.log(testNum);

// const testNum02 = BigInt(Number.MAX_SAFE_INTEGER) + 1n;
// const testNum03 = BigInt(Number.MIN_SAFE_INTEGER) ;
// console.log(testNum02);
// console.log(testNum03);

// const testNum04 = 14e2;
// console.log(testNum04);

// const testNum05 = 14e-2;
// console.log(testNum05)

/* DOM = 시스템 */
// Document Object Model
// 문서 객체 모델 시스템
// Documnet = html 문서
// Object = 프로그래밍의 모든 전 과정 및 절차 => 객체화

// const h1 = document.querySelector("h1");
// const profile = document.querySelector("#Profile");
// const img = document.querySelector("img");
// const users = document.querySelectorAll(".user");
// const address = users[1];

// console.log(h1);
// console.log(profile);
// console.log(img);
// console.log(users);
// console.log(address);

// const h1 = document.getElementsByTagName("h1");
// const profile = document.getElementsById("profile");
// const users = document.getElementsByClassName("user")
// console.log(h1);
// console.log(profile);
// console.log(users)

// const desc = document.querySelector("#desc");
// // desc. innerText = "이름 : 홍길동"
// const decsName = desc.innerText;
// console.log(decsName)

// const descHtml = desc.innerHTML;
// console.log(descHtml)

// const descContext = desc.textContent;
// console.log(descContext)

// 이벤트 핸들러 => 이벤트 작동 실행
// const title = document.querySelector("h1");
// // title.onclick = function () {
// //   title.innerText = "마이프로필";
// // };
// title.onclick = () => (title.innerText = "마이프로필");

// const userName = document.querySelector("#desc p");
// userName.onclick = () => userName.innerHTML = "이름 : <b>영심이</b>"

// const pfImg = document.querySelector("#profile img")
// console.log(pfImg)
// pfImg.onclick = () => pfImg.src = "./img/pf2.png"

const title = document.querySelector("h1");
const userName = document.querySelectorAll(".user")[0];
console.log(userName);

title.onclick = () => {
  title.style.backgroundColor = "black";
  title.style.color = "#fff";
};

// userName.onclick = () => {
//   userName.classList.add("clicked");
// }

// const clickedTrue = userName.classList.contains("clicked");

// userName.onclick = () => {
//   if(!userName.classList.contains("clicked")) {
//     userName.classList.add("clicked")
//   } else {
//     userName.classList.remove("clicked")
//   }
// }

userName.onclick = () => {
  userName.classList.toggle("clicked");
};
