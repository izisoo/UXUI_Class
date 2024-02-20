// const content = document.querySelectorAll(".dark");
// const toggleBox = document.querySelector(".toggle-box button");

// toggleBox.onclick = () => {
//   content.classList.toggle("clicked");
//   if ((toggleBox.innerText = "다크모드로 바꾸기")) {
//     toggleBox.innerText = "라이트모드로 바꾸기";
//   }
// };

const body = document.querySelector("body");
const button = document.querySelector(".toggle-box button");

button.onclick = () => {
  if (!body.classList.contains("dark")) {
    body.classList.add("dark");
    button.innerText = "라이트모드로 바꾸기";
  } else {
    body.classList.remove("dark");
    button.innerText = "다크모드로 바꾸기";
  }
};
