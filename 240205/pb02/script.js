const btns = document.querySelectorAll(".gnb li");
const contents = document.querySelectorAll(".contents div")
btns.forEach((btn) => {
  btn.addEventListener("click", function() {
    function sibilings(e) {
      const children = e.parentElement.children;
      for(let i = 0; i < children.length; i++) {
        children[i].classList.remove("active");
      }
    }
    siblings(this);
    this.classList.add("active");

    contents.forEach(function(content) {
      content.classList.remove("active");      
    });
    const targetContentID = this.getAttribute("data-alt");
    const targetContent = document.querySelector('#${targetContentID}');
    if (targetContent) {
      targetContent.classList.add("active");
    }
  });
});