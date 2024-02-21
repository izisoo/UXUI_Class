const btn = document.querySelector("#btn");
const detail = document.querySelector("#detail");

// btn.addEventListener("click", () => {
//   detail.classList.toggle("clicked");
// });

btn.onclick = () => {
  detail.classList.toggle("clicked")
}
