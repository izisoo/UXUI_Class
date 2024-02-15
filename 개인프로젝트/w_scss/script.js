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

//cursor
// document.addEventListener("mousemove", function (e) {
//   let cursor = document.getElementById("custom-cursor");
//   cursor.style.display = "block";

//   cursor.style.left = e.pageX + "px";
//   cursor.style.top = e.pageY + "px";

//   let element = document.elementFromPoint(e.clientX, e.clientY);
//   let id = element.id;

//   switch (id) {
//     case "w_Graphic":
//       cursor.querySelector("img").src = "./img/graphic.png";
//       break;
//     case "w_Branding":
//       cursor.querySelector("img").src = "./img/brand.png";
//       break;
//     case "w_Edit":
//       cursor.querySelector("img").src = "./img/edit.png";
//       break;
//     case "w_Media":
//       cursor.querySelector("img").src = "./img/media.png";
//       break;
//     case "w_Web":
//       cursor.querySelector("img").src = "./img/uxui.png";
//       break;
//     default:
//       cursor.style.display = "none";
//   }
// });

// footer
const text = document.querySelector(".logo p");
text.innerHTML = text.innerText
  .split("")
  .map(
    (char, i) =>
      `<text style= "transform:rotate(${i * 14.5}deg)">${char}</text>`
  )
  .join("");
