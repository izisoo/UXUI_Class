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



// footer
const text = document.querySelector('.text p');
text.innerHTML = text.innerText.split('').map(
  (char, i) =>
  `<span style= "transform:rotate(${i * 14.5}deg)">${char}</span>`
).join('');