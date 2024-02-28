const buttons = document.querySelectorAll("button");
const computerChoice = document.querySelector(".computer-choice");
const userChoice = document.querySelector(".user-choice");
const winner = document.querySelector(".result");

const result = ["가위", "바위", "보"];

const show = (user, computer, message) => {
  userChoice.innerText = user;
  computerChoice.innerText = computer;
  winner.innerText = message;
};

const game = (user, computer) => {
  if (user === computer) {
    let message = "무승부!";
    console.log("무승부");
  } else {
    switch (user + computer) {
      case "가위보":
      case "바위가위":
      case "보바위":
        console.log("사용자승리!");
        break;
      case "가위바위":
      case "바위보":
      case "보가위":
        console.log("컴퓨터승리!");
        break;
    }
  }
  SharedWorker(user, computer, message);
};

const play = (e) => {
  // e.prevetDefault();
  const user = e.target.innerText;
  const randomIndex = Math.floor(Math.random() * 3);
  const computer = result[randomIndex];
  game(user, computer);
};

buttons.forEach((button) => {
  button.addEventListener("click", play);
});
