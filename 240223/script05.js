// 1. 책 제목 & 저자 값을 찾아와야한다.
// - input > .value

// 2. 찾아온 값을 출력해주도록 도와주는 이벤트 함수
// addEventListener
// e.preventDefault
// button => click
// form => submit

// 3. 출력할 공간에 대한 정의
// querySelector

//4. 삭제하기 버튼 정의
// CreateElement, appendChild
// 삭제하기 버튼이 복수의 갯수로 생석 => 반복문 사용해서 클릭한 삭제버튼을 찾아오기 위해서 => this (*클래스 함수 vs 화살표함수)

// 5. 삭제하기 버튼 클릭시, 목록삭제 이벤트 함수
// parentNode, removeChild

// const titleText = document.querySelector("#title");
// const authorText = document.querySelector("#author");
// const btn = document.querySelectorAll(".btn");
// const bookList = document.querySelector("#bookList");

// // span.addEventListener("click", () => {
// //   bookList.remove();
// // });

// btn[0].addEventListener("click", (e) => {
//   e.preventDefault();
//   titleText.remove();
//   authorText.remove();
// });

// btn[1].addEventListener("click", (e) => {
//   e.preventDefault();
//   const list = document.createElement("li");
//   const span = document.createElement("span");
//   span.innerText = "삭제";
//   const listNode = document.createTextNode(
//     `${titleText.innerText}-${authorText.innerText}`
//   );
//   list.appendChild(span)
//   list.appendChild(listNode);
//   bookList.appendChild(list);
// });

// span.addEventListener("click", () => {
//   list.remove();
// })

const save = document.querySelector(".submit");
const bookList = document.querySelector("#bookList");

save.addEventListener("submit", (e) => {
  const title = document.querySelector("#title");
  const author = document.querySelector("#author");
  e.preventDefault();
  const li = document.createElement("li");
  li.innerHTML = `
  ${title.value} - ${author.value}
  <span>삭제</span>
  `;
  bookList.appendChild(li);
  title.value = "";
  author.value = "";

  const delButtons = document.querySelectorAll("span");
  for (let delButton of delButtons) {
    delButton.addEventListener("click", function () {
      this.parentNode.parentNode.removeChild(this.parentNode);
    });
  }
});
