const header = document.querySelector(".header")
const previw_btn = document.querySelector("#preview_btn")
const preview = document.querySelector(".preview")

window.addEventListener("scroll", () => {
  if(window.scrollY > 200) {
    header.classList.add("active");
  }
  else {
    header.classList.remove("active");
  }
})

previw_btn.addEventListener('click', function() {
  const isPreviewVisible = getComputedStyle(preview).display !== 'none'
  if (getComputedStyle(preview).display !== 'none') {
    preview.style.display = 'none';
  } else {
    preview.style.display = 'block';
  }
});