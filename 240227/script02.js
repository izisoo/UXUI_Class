window.onload = () => {
  const bgCount = 5;
  const randomNumber = Math.ceil(Math.random() * bgCount);
  document.body.style.background = `url(./imgaes/bg-${randomNumber}.jpg)`;
};
