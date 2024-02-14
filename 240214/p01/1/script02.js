//1. 사용자에게 키값을 받아온다
//2. 사용자에게 몸무게값을 받아온다
//3. 사용자에게 받아온 키 & 몸무게값을 가지고 적정체중을 구한다
//4. 적정체중을 구한 이후에 +-5kg의 범위를 설정한다
//5. 적정체중 여부의 조건에 따라서 출력할 문자열을 구분한다
//6. 최종 결과값을 웹 브라우저 화면에 출력한다

// const button = document.querySelector("#button");
// const showResult = document.querySelector("#showResult");

// btn.addEventListener("click", function() {
//   const height = document.querySelector("#height").value;
//   const weight = document.querySelector("#weight").value;
//   const result = (height - 100) * 0.9;
//   const goodweight = result >= 5 || result <= -5;
//   showResult.innerHTML =
// })

const userName = prompt("당신의 이름을 말씀해주세요", "ex.홍길동");
const userHeight = Number(prompt("당신의 키는 어떻게 되십니까?", "ex.180"));
const userWeight = Number(
  prompt("당신의 몸무게는 어떻게 되십니까?", "ex.64kg")
);

const normalweight = (userHeight - 100) * 0.9;
let result = userWeight >= normalweight - 5 && userWeight <= normalweight + 5;
result = result
  ? "적정체중이시네요! 축하드립니다."
  : "적정체중이 아닙니다. 노력해주세요!";
document.write(`${userName}님 ${result}`);
