const preview = document.querySelector(".preview");
const toggle = document.querySelector(".toggle");
const about = document.querySelector(".about")
const work = document.querySelector(".work")
const contact = document.querySelector(".contact")

toggle.addEventListener("click", () => {
  const isPreviewVisible = getComputedStyle(preview).display !== "none"

  if (isPreviewVisible) {
    preview.computedStyleMap.display ="none";
  } else {
    preview.computedStyleMap.display ="block";
  }
})