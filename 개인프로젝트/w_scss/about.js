// carrers
document.addEventListener("DOMContentLoaded", function () {
  var graphicDivs = document.querySelectorAll(".graphic .ellipse");
  var careerDivs = document.querySelectorAll(".career .company");
  var graphicIndex = 0;
  var careerIndex = 0;
  var isAtBottom = false;

  window.addEventListener("scroll", function () {
    var scrolledToBottom =
      window.scrollY + window.innerHeight >= document.body.offsetHeight;
    if (scrolledToBottom) {
      isAtBottom = true;
      document.querySelector(".graphic").addEventListener("wheel", handleWheel);
      document.querySelector(".career").addEventListener("wheel", handleWheel);
    } else {
      isAtBottom = false;
      document
        .querySelector(".graphic")
        .removeEventListener("wheel", handleWheel);
      document
        .querySelector(".career")
        .removeEventListener("wheel", handleWheel);
    }
  });

  function handleWheel(event) {
    if (event.deltaY < 0) {
      graphicIndex = Math.max(graphicIndex - 1, 0);
      careerIndex = Math.max(careerIndex - 1, 0);
    } else {
      graphicIndex = Math.min(graphicIndex + 1, graphicDivs.length - 1);
      careerIndex = Math.min(careerIndex + 1, careerDivs.length - 1);
    }
    showContent(graphicDivs, graphicIndex);
    showContent(careerDivs, careerIndex);
    event.preventDefault();
  }

  function showContent(elements, index) {
    elements.forEach(function (element, i) {
      element.classList.toggle("show", i === index);
    });
  }
});

// footer
const text = document.querySelector(".text p");
text.innerHTML = text.innerText
  .split("")
  .map(
    (char, i) =>
      `<span style= "transform:rotate(${i * 14.5}deg)">${char}</span>`
  )
  .join("");
