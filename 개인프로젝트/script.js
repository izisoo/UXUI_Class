const header = document.querySelector(".header")
const previw_btn = document.querySelector("#preview_btn")
const preview = document.querySelector(".preview")
const work = document.querySelector(".work")

window.addEventListener("scroll", () => {
  if(window.scrollY > 200) {
    header.classList.add("active");
  }
  else {
    header.classList.remove("active");
  }
})

previw_btn.addEventListener('click', function() {

  const isPreviewVisible = (preview.style.display === 'block');
  preview.style.display = 'block';
  const toggleHeight = preview.offsetHeight;
  preview.style.display = 'none';

  preview.style.display = isPreviewVisible ? 'none' : 'block';

  work.style.marginTop = isPreviewVisible ? '0' : (toggleHeight+100) + 'px';
});
