const faqBtn = document.querySelectorAll(".faq-toggle")

faqBtn.forEach(toggle => {
    toggle.addEventListener("click", () => {
        toggle.parentNode.classList.toggle("active")
    })
})