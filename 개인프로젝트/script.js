const header = document.querySelector(".header")
const plus_btn = document.querySelector(".content_right")
const preview = document.querySelector(".preview")

window.addEventListener("scroll", () => {
  if(window.scrollY > 200) {
    header.classList.add("active");
  }
  else {
    header.classList.remove("active");
  }
})

plus_btn.addEventListener("click", () => {
  preview.classList.toggle("active");
})