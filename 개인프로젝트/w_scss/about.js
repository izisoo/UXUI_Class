// carrers
document.addEventListener("DOMContentLoaded", function () {
  var graphicDivs = document.querySelectorAll(".graphic div");
  var careerDivs = document.querySelectorAll(".career div");
  var graphicIndex = 0;
  var careerIndex = 0;

  document
    .querySelector(".graphic")
    .addEventListener("wheel", function (event) {
      if (event.deltaY < 0) {
        graphicIndex = Math.max(graphicIndex - 1, 0); // 인덱스를 0 미만으로 감소하지 않도록 제한
      } else {
        graphicIndex = Math.min(graphicIndex + 1, graphicDivs.length - 1); // 인덱스를 마지막 인덱스를 초과하지 않도록 제한
      }
      showContent(graphicDivs, graphicIndex);
    });

  document.querySelector(".career").addEventListener("wheel", function (event) {
    if (event.deltaY < 0) {
      careerIndex = Math.max(careerIndex - 1, 0); // 인덱스를 0 미만으로 감소하지 않도록 제한
    } else {
      careerIndex = Math.min(careerIndex + 1, careerDivs.length - 1); // 인덱스를 마지막 인덱스를 초과하지 않도록 제한
    }
    showContent(careerDivs, careerIndex);
  });

  function showContent(elements, index) {
    elements.forEach(function (element, i) {
      element.classList.toggle('show', i === index);
    });
  }
});

// document.addEventListener('DOMContentLoaded', function() {
//   let ellipse = document.querySelectorAll(".graphic .ellipse");
//   let company = document.querySelectorAll(".career .company");
//   let ellipseIndex = 0;
//   let companyIndex = 0;

//   document.querySelector(".graphic").addEventListener('wheel', funcion(event) {
//     if (event.deltaY < 0) {
//       ellipseIndex = Math.max(ellipseIndex -1 , 0);
//     } else {
//       ellipseIndex = Math.min(companyIndex + 1, ellipse.lenght - 1);
//     }
//     showContent(ellipseIndex,ellipse);
//   });

//   document.querySelector(".career").addEventListener('wheel', function(event) {
//     if (event.deltaY < 0) {
//       companyIndex = Math.max(companyIndex -1, 0);
//     } else {
//       companyIndex = Math.min(companyIndex + 1, company.lenght -1);
//     }
//     showContent(company, companyIndex);
//   });
//   function showContent(elemnets, index) {
//     elemnets.forEach(function(element, i) {
//       elemnet.style.display = i === index ? 'block' : 'none' ;
//     });
//   }
// });

// footer
const text = document.querySelector(".text p");
text.innerHTML = text.innerText
  .split("")
  .map(
    (char, i) =>
      `<span style= "transform:rotate(${i * 14.5}deg)">${char}</span>`
  )
  .join("");
