// 사용자로부터 "오늘부터 며칠간 만 보 걷기"를 했는지 물어보고 임의 숫자를 받으세요
// 00일 연속 달성 출력될 수 있도록
const userDay = prompt("며칠까지 만 보 걷기를 하셨나요?", "ex.2024-01-01");
const now = new Date();
const result = document.querySelector("#result");
const goal = new Date(`${userDay}`);

const passedTime = goal.getTime() - now.getTime;
const passedDay = Math.floor(passedTime / (24 * 60 * 60 * 1000));

result.innerText = passedDay;
