const elemnets = document.querySelectorAll("*");
for (let elemnet of elemnets) {
  elemnet.addEventListener("click", () => {
    console.log(
      `e.target : ${e.target.tagName},e.currentTarget : ${e.currentTarget.tagName}`
    );
  });
}
