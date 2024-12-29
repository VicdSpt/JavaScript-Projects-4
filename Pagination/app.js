const showCardsPerPage = 4;
const dataContainer = document.getElementById("data-container");
const pagination = document.getElementById("pagination");
const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");
const pageNumbers = document.getElementById("page-numbers");
const pageLinksNumbers = document.querySelectorAll(".page-link");

const cards = Array.from(dataContainer.getElementsByClassName("card"));

// calculate total number of pages
const totalPages = Math.ceil(cards.length / showCardsPerPage);
let currentPage = 1;

// Function to show the cards for a specific page
function displayPage(page) {
  const startIndex = (page - 1) * showCardsPerPage;
  const endIndex = startIndex + showCardsPerPage;
  cards.forEach((card, index) => {
    if (index >= startIndex && index < endIndex) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

function updatePagination() {
  pageNumbers.textContent = `Page ${currentPage} of ${totalPages}`;
  prevButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage === totalPages;
  pageLinks.forEach((link) => {
    const page = parseInt(link.getAttribute("data-page"));
    link.classList.toggle("active", page === currentPage);
  });
}

btnPrev.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    displayPage(currentPage);
    updatePagination();
  }
});

btnNext.addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++;
    displayPage(currentPage);
    updatePagination();
  }
});

pageLinksNumbers.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const page = parseInt(link.getAttribute("data-page"));
    if (page !== currentPage) {
      currentPage = page;
      displayPage(currentPage);
      updatePagination();
    }
  });
});

displayPage(currentPage);
updatePagination();
