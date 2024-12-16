const textBox = document.getElementById("text");
const speedText = document.getElementById("speed");
const text = "We love Gaming 🔥";

let idx = 1;
let speed = 300 / speedText.value;

writeText();

function writeText() {
  textBox.innerText = text.slice(0, idx);
  idx++;
  if (idx > text.length) {
    idx = 1;
  }
  setTimeout(writeText, speed);
}

speedText.addEventListener("input", (e) => (speed = 300 / e.target.value));
