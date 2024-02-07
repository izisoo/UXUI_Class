$("nav a").click(function (e) {
  $.scrollTo(this.hash, 1500);
  e.preventDefault();
});