const container = document.querySelector('.container');
const url = 'https://unsplash.it/1920/1080?random';
const rows = 5;
const columns = 5;

for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement('img');
  img.src = `${url}${getRandomSize()}`;
  container.appendChild(img);
}

function getRandomSize() {
  return `${getRandomNumber()}x${getRandomNumber()}`;
}

function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 300;
}
