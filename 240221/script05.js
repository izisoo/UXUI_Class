// 1. Height & Weight 값 정의하기
// 2. button & result 정의하기
// 3. h & w 값 활용 => 연산 > 변수명 > 할당
// 4. 함수 & 조건문 연산작업
// 5. result에 출력하기

const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const form = document.querySelector("form");
const result = document.querySelector(".result");

form.onsubmit = (e) => {
  e.preventDefault();
  const heightValue = parseFloat(height.value) / 100;
  const weightValue = parseFloat(weight.value);
  const bmi = weightValue / (heightValue * heightValue).toFixed(2);

  const display = (bmi) => {
    let group;
    if (bmi >= 30.0) {
      group = "중등도 비만";
    } else if (bmi >= 25.0) {
      group = "경도 비만";
    } else if (bmi >= 18.5) {
      group = "정상";
    } else {
      group = "저체중";
    }
    result.innerText = `${bmi} -> ${group} 입니다.`;
  };
  display(bmi);
};
