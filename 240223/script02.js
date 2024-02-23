// const newP = document.createElement("p");
// const textNode = document.createTextNode("Typescript");
// newP.appendChild(textNode);

// document.body.appendChild(newP);

const button = document.querySelector("#order");
const h2text = document.querySelector("#container h2");
const orderInfo = document.querySelector("#orderInfo");

// button.onclick = () => {
//   const textNode = document.createTextNode(h2text.textContent)
//   orderInfo.appendChild(textNode)
// }

// button.addEventListener(
//   "click",
//   () => {
//     const newP = document.createElement("p");
//     const textNode = document.createTextNode(h2text.innerText);
//     newP.appendChild(textNode);
//     newP.style.color = "crimson";
//     newP.style.fontSize = "1.2rem";
//     orderInfo.appendChild(newP);
//   },
//   { once: ture }
// );

const newImg = document.createElement("img");

const srcNode = document.createAttribute("src");
srcNode.value = "https://dimg.donga.com/wps/NEWS/IMAGE/2023/10/06/121540802.2.jpg"
newImg.setAttributeNode(srcNode);
document.body.appendChild(newImg)
console.log(newImg)
