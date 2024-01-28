const header = document.querySelector(".header")
const work = document.querySelector(".work")
const contact = document.querySelector(".contact")
const previw_btn_01 = document.querySelector("#preview_btn_01")
const preview_01 = document.querySelector(".preview_01")
const previw_btn_02 = document.querySelector("#preview_btn_02")
const preview_02 = document.querySelector(".preview_02")
const previw_btn_03 = document.querySelector("#preview_btn_03")
const preview_03 = document.querySelector(".preview_03")
const footer = document.getElementById("#footer")

window.addEventListener("scroll", () => {
  if(window.scrollY > 200) {
    header.classList.add("active");
  }
  else {
    header.classList.remove("active");
  }
})

previw_btn_01.addEventListener('click', function() {

  const isPreviewVisible = (preview_01.style.display === 'block');
  preview_01.style.display = 'block';
  const toggleHeight = preview_01.offsetHeight;
  preview_01.style.display = 'none';

  preview_01.style.display = isPreviewVisible ? 'none' : 'block';

  work.style.marginTop = isPreviewVisible ? '0' : (toggleHeight+100) + 'px';
});

previw_btn_02.addEventListener('click', function() {

  const isPreviewVisible = (preview_02.style.display === 'block');
  preview_02.style.display = 'block';
  const toggleHeight = preview_01.offsetHeight;
  preview_02.style.display = 'none';

  preview_02.style.display = isPreviewVisible ? 'none' : 'block';

  contact.style.marginTop = isPreviewVisible ? '0' : (toggleHeight+500) + 'px';
});

previw_btn_03.addEventListener('click', function() {

  const isPreviewVisible = (preview_03.style.display === 'block');
  preview_03.style.display = 'block';
  const toggleHeight = preview_01.offsetHeight;
  preview_03.style.display = 'none';

  preview_03.style.display = isPreviewVisible ? 'none' : 'block';

  footer.style.marginTop = isPreviewVisible ? '0' : (toggleHeight+200) + 'px';
});