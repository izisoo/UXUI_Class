const today = new Date();
const hrs = today.getHours();

const container = document.querySelector("#container")
const newImg = document.createElement("img")
newImg.src = hrs < 12 ? "./0.images/morning.jpg" : "./0.images/afternoon.jpg"
container.appendChild(newImg)

