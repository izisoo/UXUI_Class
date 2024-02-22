// const body = document.querySelector("body");
// const button = document.querySelector("button");

// const btnFnc = () => {
//   body.style.backgroundColor = "green";
// }

// button.onclick = btnFnc

// button.onclick = () => {
//   body.style.backgroundColor = "green";
// };

// const result = document.querySelector("#result");

// document.body.onkeydown = (event) => {
//   result.innerText = `
//   code : ${event.code},
//   key : ${event.key}
//   `;
// };

// const button = document.querySelector("button");

// // button.onclick = () => {
// //   document.body.style.backgroundColor = "crimson";
// // };

// button.addEventListener("click", () => {
//   document.body.style.backgroundColor = "green";
// });

const button = document.querySelector("input[type='submit']");
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const word = document.querySelector("input[type='text']").value;
  const result = document.querySelector(".result");
  const count = word.length;
  result.innerText = count;

  if(count >= 10)
});
