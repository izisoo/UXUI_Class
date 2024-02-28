// //수학객체
// //Math

// let num = 2.1234;
// let maxNum = Math.max(10, 5, 8, 30);
// console.log(maxNum);

// let minNum = Math.min(10, 5, 8, 30);
// console.log(minNum)

// let roundNum = Math.round(num);
// console.log(roundNum) // 이거 뭔소린지 모르겟음

// let floorNum = Math.floor(num)
// console.log(floorNum)

// let ceilNum = Math.ceil(num)
// console.log(ceilNum)

// let rndNum = Math.random();
// console.log(rndNum); // => 0 초과 1미만인 실수값이 나옴

// let piNum = Math.PI;
// console.log(piNum)

document.write("<h1>컴퓨터 & 나의 가위,바위,보 맞추기 게임!</h1>");

const game = prompt("가위, 바위, 보 중 선택하세요", "ex. 가위 바위 보");

switch (game) {
  case "가위":
    gameNum = 1;
    break;
  case "바위":
    gameNum = 2;
    break;
  case "보":
    gameNum = 3;
    break;
  default:
    alert("잘못 작성했습니다!");
    location.reload();
}

const com = Math.ceil(Math.random() * 3);
document.write(`<img src="./images/math_img_${com}.jpg">`);

if (gameNum == com) {
  document.write("컴퓨터와 동일합니다!");
} else {
  document.write("컴퓨터와 동일하지 않습니다!");
}

console.log(gameNum, com);
