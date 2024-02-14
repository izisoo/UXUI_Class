const Tmoney = Number(
  prompt("오늘 하루동안 지출한 교통비를 입력해주세요", "ex.1500원")
).valeu;
const Fmoney = Number(
  prompt("오늘 하루동안 지출한 식비를 입력해주세요", "ex.11500원")
).valeu;
const Dmoney = Number(
  prompt("오늘 하루동안 지출한 음료비를 입력해주세요", "ex.4500원")
).valeu;

const usedmoney = Tmoney + Fmoney + Dmoney;
let result = usedmoney < 10000;
const result1 = 10000 - usedmoney;
const result2 = usedmoney - 10000;

result = result
  ? `${result1}원 남았습니다. 돈관리 잘하셨습니다!`
  : `${result2}원 초과하셨습니다. 조금만 더 노력해주세요!`;
document.write(result);
