//toggle
const section = document.querySelectorAll(".section");
console.log(section);

section.forEach((section) => {
  const toggle = section.querySelector(".toggle");
  const preview = section.querySelector(".preview");

  toggle.addEventListener("click", () => {
    preview.classList.toggle("visible");

    if (preview.classList.contains("visible")) {
      preview.style.display = "block";
    } else {
      preview.style.display = "none";
    }
  });
});

const toggle = document.querySelector(".header_toggle");
const preview = document.querySelector(".header_gnb_mo");

toggle.addEventListener("click", () => {
  preview.classList.toggle("visible");
});
//cursor

let worklists = document.querySelectorAll(".worklist");

worklists.forEach(function (worklist) {
  let cursorimg = "";
  switch (worklist.id) {
    case "w_Graphic":
      cursorimg = "graphic.png";
      break;
    case "w_Branding":
      cursorimg = "branding.png";
      break;
    case "w_Edit":
      cursorimg = "edit.png";
      break;
    case "w_Media":
      cursorimg = "media.png";
      break;
    case "w_Web":
      cursorimg = "w_mobile.png";
      break;
    default:
      cursorimg = "";
      break;
  }

  worklist.style.cursor = "url('./img/" + cursorimg + "') 0 0 , auto";
});
