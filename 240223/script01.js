const button = document.querySelector("button");
const nav = document.querySelector("nav");

button.onclick = () => {
  nav.classList.toggle("active");
  nav.style.transition = "all 0.3s"
  const navWidth = nav.offsetWidth;
  button.style.transform = `translateX(-${navWidth}px)`;
};
