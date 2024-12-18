const numbers = document.querySelectorAll(".nums span");
const counter = document.querySelector(".counter");
const finalMessage = document.querySelector(".final");
const replayBtn = document.querySelector("#replay");

runAnimation();

function resetDOM() {
  counter.classList.remove("hide");
  finalMessage.classList.remove("show");

  numbers.forEach((num) => {
    num.classList.value = "";
  });

  numbers[0].classList.add("in");
}

function runAnimation() {
  numbers.forEach((num, idx) => {
    const nextToLast = numbers.length - 1;

    num.addEventListener("animationend", (e) => {
      if (e.animationName === "goIn" && idx !== nextToLast) {
        num.classList.remove("in");
        num.classList.add("out");
      } else if (e.animationName === "goOut" && num.nextElementSibling) {
        num.nextElementSibling.classList.add("in");
      } else {
        counter.classList.add("hide");
        finalMessage.classList.add("show");
      }
    });
  });
}

replayBtn.addEventListener("click", () => {
  resetDOM();
  runAnimation();
});
