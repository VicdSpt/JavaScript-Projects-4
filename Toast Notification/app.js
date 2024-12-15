const button = document.getElementById("button")
const toasts = document.getElementById("toasts")

const messages = [
  "Hello, and welcome to this page 🔥",
  "🔔 New update available! Download the latest version to enjoy improved performance and new features.",
  "⚡ Your battery is running low. Plug in your charger to avoid interruptions.",
  "📅 Don't forget: Your meeting starts in 10 minutes!",
  "🎉 Congrats! You earned a reward for completing your task. Check it out now!",
  "🔒 Your account was accessed from a new device. If this wasn't you, please secure your account.",
  "🛒 Your shopping cart is waiting! Don't miss out on your items before they sell out.",
]

const types = ["info", "success", "error"]

button.addEventListener("click", () => createNotification())

function createNotification(message = null, type = null){
  const notif = document.createElement("div")
  notif.classList.add("toast")
  notif.classList.add(type ? type : getRandomType())

  notif.innerText = message ? message : getRandomMessage()

  toasts.appendChild(notif)

  setTimeout(() => {
    notif.remove()
  }, 3000)
}

function getRandomMessage(){
  return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomType(){
  return types[Math.floor(Math.random() * types.length)]
}