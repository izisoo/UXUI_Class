const open = document.querySelector(".open");
const container = document.querySelector(".container");
const close = document.querySelector(".close");

const openFNC = () => {
  open.style.display = "none";
  container.style.display = "flex";
};
const closeFNC = () => {
  close.style.display = "none";
  container.style.display = "block";
};

open.onclick = openFNC;
close.onclick = closeFNC;
