const container = document.getElementById("container")
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71', '#A52019', "#F80000", "#DE4C8A", "#F8F32B", "#A6FFF6" ]
const SQUARES = 900

for(let i = 0; i < SQUARES; i++){
    const square = document.createElement("div")
    square.classList.add("square")

    square.addEventListener("mouseover", () => setColor(square))
    square.addEventListener("mouseout", () => remooveColor(square))

    container.appendChild(square)
}

function setColor(element){
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function remooveColor(element){
    element.style.background = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}