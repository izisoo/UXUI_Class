// 1. 사용자가 입력한 2개의 숫자를 찾아온다
// 2. 출력될 공간을 정의한다
// 3. 계산하기 버튼을 클릭했을 때, result 공간에 값을 출력해준다.
// 4. 값을 출력시켜주기 위한 연산작업이 필요하다.
// 5. 최대공약수에 대한 개념이 필요하다.

const num1 = document.querySelector("#number1");
const num2 = document.querySelector("#number2");
const btn = document.querySelector("#calc");
const result = document.querySelector("#result");

const getGCD = (num1, num2) => {
  const max = num1 > num2 ? num1 : num2;
  let GCD = 0;
  for (let i = 1; i <= max; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      GCD = i;
    }
  }
  return GCD;
};

btn.onclick = function (e) {
  e.preventDefault();
  result.innerText = getGCD(num1.value, num2.value);
};
