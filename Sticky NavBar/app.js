const navBar = document.querySelector(".nav")
window.addEventListener("scroll", fixNavBar)

function fixNavBar(){
  if(window.scrollY > navBar.offsetHeight + 150){
    navBar.classList.add("active")
  } else {
    navBar.classList.remove("active")
  }
}