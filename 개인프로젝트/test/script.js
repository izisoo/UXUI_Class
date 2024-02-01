const sections = document.querySelectorAll(".section");

sections.forEach((section) => {
  const toggle = section.querySelector(".toggle");
  const preview = section.querySelector(".preview");

  preview.style.display = "none";

  toggle.addEventListener("click", () => {
    preview.classList.toggle("visible");

    if (preview.classList.contains("visible")) {
      preview.style.display = "block";
    } else {
      preview.style.display = "none";
    }
  });
});
