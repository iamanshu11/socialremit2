"use strict";
document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-button');
    const blogCards = document.querySelectorAll('.blog-card');

    // Set initial active state on page load
    setActiveButton(filterButtons[0]);  // Assuming the first button is 'All'

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            setActiveButton(this);

            const selectedFilter = this.getAttribute('data-filter');
            blogCards.forEach(card => {
                if (selectedFilter === 'all' || card.classList.contains(selectedFilter)) {
                    card.style.display = 'block'; // Ensure they follow the grid
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    function setActiveButton(activeButton) {
        filterButtons.forEach(btn => {
            btn.classList.remove('bg-primary', 'text-white');
            btn.classList.add('bg-gray-200', 'text-black');
        });
        activeButton.classList.remove('bg-gray-200', 'text-black');
        activeButton.classList.add('bg-primary', 'text-white');
    }
});



// Matrix characters
const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const charactersArray = characters.split("");

// Matrix configuration
const fontSize = 16;
const speed = 9;

// Create the canvas and context
const canvas = document.getElementById("matrix");
const context = canvas.getContext("2d");

// Set the canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Calculate the number of columns and rows
const columns = Math.floor(canvas.width / fontSize);
const rows = Math.floor(canvas.height / fontSize);

// Initialize the columns
const matrix = [];
for (let i = 0; i < columns; i++) {
    matrix[i] = 1;
}

// Matrix animation
function drawMatrix() {
    context.fillStyle = "rgba(0, 0, 0, 0.05)";
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = "#00AACE";
    context.font = fontSize + "px monospace";

    for (let i = 0; i < matrix.length; i++) {
        const text = charactersArray[Math.floor(Math.random() * charactersArray.length)];
        context.fillText(text, i * fontSize, matrix[i] * fontSize);

        if (matrix[i] * fontSize > canvas.height && Math.random() > 0.975) {
            matrix[i] = 0;
        }

        matrix[i]++;
    }
}

// Render loop
function animateMatrix() {
    drawMatrix();
    requestAnimationFrame(animateMatrix);
}

// Start the animation
animateMatrix();



// JavaScript to handle slide-in menus
function toggleSlideMenu(menuId) {
    const currentMenu = document.querySelector(".slide-in.active") || document.getElementById("main-menu");
    const nextMenu = document.getElementById(menuId);

    // Hide current menu and show next menu
    currentMenu.classList.remove("active");
    setTimeout(() => {
        currentMenu.classList.add("hidden");
        nextMenu.classList.remove("hidden");
        nextMenu.classList.add("active");
    }, 10); // Small delay to allow the transition to work
}

function goToMainMenu() {
    const currentMenu = document.querySelector(".slide-in.active");
    const mainMenu = document.getElementById("main-menu");

    // Hide current menu and show main menu
    currentMenu.classList.remove("active");
    setTimeout(() => {
        currentMenu.classList.add("hidden");
        mainMenu.classList.remove("hidden");
        mainMenu.classList.add("active");
    }, 10); // Small delay to allow the transition to work
}


(function($) {

    "use strict";

    $(".card").tilt({
        maxTilt: 15,
        perspective: 1400,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        speed: 1200,
        glare: true,
        maxGlare: 0.2,
        scale: 1.04
    });

}(jQuery));


function toggleDropdown() {
    const dropdownList = document.getElementById('nationality-drop-list');
    dropdownList.classList.toggle('hidden');
}

function filterCountries() {
    const input = document.getElementById('nationality-drop-input').value.toLowerCase();
    const listItems = document.querySelectorAll('.dropdown-item');

    listItems.forEach(item => {
        const country = item.getAttribute('data-country').toLowerCase();
        if (country.includes(input)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}

function selectNationality(countryName, flagUrl) {
    const input = document.getElementById('nationality-drop-input');
    const flag = document.getElementById('nationality-flag');

    input.value = countryName;
    flag.src = flagUrl;
    flag.classList.remove('hidden'); // Show the flag

    // Hide the dropdown after selection
    const dropdownList = document.getElementById('nationality-drop-list');
    dropdownList.classList.add('hidden');
}


