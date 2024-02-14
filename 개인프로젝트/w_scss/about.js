// carrers
document.addEventListener("DOMContentLoaded", function () {
  var careersContainer = document.querySelector(".careers");
  var graphicDivs = document.querySelectorAll(".graphic .ellipse");
  var careerDivs = document.querySelectorAll(".career .company");
  var graphicIndex = 0;
  var careerIndex = 0;
  var wheelTimeout;

  careersContainer.addEventListener("wheel", function (event) {
    clearTimeout(wheelTimeout);
    careersContainer.style.overflowY = "hidden";

    wheelTimeout = setTimeout(function () {
      careersContainer.style.overflowY = "scroll";
    }, 100);

    var deltaY = event.deltaY;

    if (deltaY < 0) {
      graphicIndex = Math.max(graphicIndex - 1, 0);
      careerIndex = Math.max(careerIndex - 1, 0);
    } else {
      graphicIndex = Math.min(graphicIndex + 1, graphicDivs.length - 1);
      careerIndex = Math.min(careerIndex + 1, careerDivs.length - 1);
    }

    showContent();
  });

  function showContent() {
    graphicDivs.forEach(function (element, i) {
      element.classList.toggle("show", i === graphicIndex);
    });
    careerDivs.forEach(function (element, i) {
      element.classList.toggle("show", i === careerIndex);
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
