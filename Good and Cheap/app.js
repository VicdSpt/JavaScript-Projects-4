const togglesBtn = document.querySelectorAll(".toggle");
const good = document.querySelector("#good");
const cheap = document.querySelector("#cheap");
const fast = document.querySelector("#fast");

togglesBtn.forEach((toggle) =>
  toggle.addEventListener("change", (e) => changeBtn(e.target))
);

function changeBtn(btnClicked) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === btnClicked) {
      fast.checked = false;
    }
    if (cheap === btnClicked) {
      good.checked = false;
    }
    if (fast === btnClicked) {
      cheap.checked = false;
    }
  }
}
