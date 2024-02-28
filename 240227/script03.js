// 오늘 옆에있는 친구들과 점심!!
// 짜장면, 돈가스, 부대찌개, 회덮밥, 마라탕
// 상기 메뉴 후보!!
// 상기 메뉴 중 랜덤으로 1개 메뉴를 선택해서 웹브라우저에 출력

const result = ["짜장면", "돈까스", "부대찌개", "회덮밥", "마라탕"];

window.onload = () => {
  const textCount = 5;
  const randomNumber = Math.floor(Math.random() * textCount);
  document.write(result[randomNumber]);
}
