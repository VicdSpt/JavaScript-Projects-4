// Get DOM elements
const currDate = document.getElementById("currDate");
const dateOfBirth = document.querySelector("#DOB");
const calcAgeButton = document.getElementById("CalcAge");
const displayAge = document.getElementById("displayAge");
const ageDisplay = document.getElementById("age");

// Get today's date
const today = new Date();
currDate.innerText = `Today's Date is: ${today.toLocaleDateString('fr-FR')}`;

// Function to calculate age
function calculateAge() {
    const birthDate = new Date(dateOfBirth.value);

    // Check if the birth date is valid
    if (isNaN(birthDate)) {
        alert("Please enter a valid date of birth.");
        return;
    }

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    // Adjust age if the birth date hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    // Display the calculated age
    displayAge.style.visibility = "visible";
    ageDisplay.innerText = `You are ${age} years old.`;
}

// Add event listener to the calculate age button
calcAgeButton.addEventListener("click", calculateAge);
