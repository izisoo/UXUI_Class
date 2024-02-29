//사용자가 이메일 주소를 입력하면, result 공간에 사용자의 이메일정보를 출력하게 해주세요
//딘, 이메일 주소 중 @ 앞의 내용을 세자리까지만 출력하게 해주세요. 그리고 네번째 자리부터는 ... 온점으로 표기해주세요

// 이메일 정보 받기
// 버튼 누르기
// 정보 받기
// substring 사용해서 글자 배열 찾기
// 온점 적용하기
// 최종 출력하기


// 전제조건 : 모든 이메일 주소에는 @이 존재한다
//1. @이라는 문자열을 중심으로 앞.뒤쪽으로 쪼갠다 => split 함수
//2. 앞쪽에 쪼개진 문자열에서 1~3번 인덱스까지만 정상출력 + ... => substring / slice 함수
//3. 뒤쪽에 쪼개진 문자열은 그대로 보관하고 있다가 앞쪽 문자열과 합친다.

// const form = document.querySelector("form");
// const userEmail = document.querySelector("#userEmail");
// const button = document.querySelector("input[type='submit']");

// const getData = () => {
//   if (userEmail.includes("@")) {
//     if (button.addEventListener("click", () => {
//       let email = userEmail.substring(0,2) + "..." + substring(4)
//     }))

//   }
// }

const form = document.querySelector("form");
const userEmail = document.querySelector("#userEmail");
const button = document.querySelector("input[type='submit']");
const result = document.querySelector("#result")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  let userName = ""
  let domain = ""

  if (userEmail.value !== "") {
    userName = userEmail.value.split("@")[0];
    userName = userName.substring(0, 3)
    domain = userEmail.value.split("@")[1];
    result.innerText = `${userName}...@${domain}`
    console.log(userName)
  }
})



