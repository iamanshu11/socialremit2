"use strict";

document.addEventListener('DOMContentLoaded', function () {
    // Set up a click listener for each dropdown button
    document.querySelectorAll('.dropdown-button').forEach(button => {
        button.addEventListener('click', function (event) {
            const dropdownId = this.getAttribute('data-target');
            const dropdown = document.getElementById(dropdownId);

            // Prevent the click from propagating, which can trigger outside click prematurely
            event.stopPropagation();

            // Toggle the current dropdown and close others
            if (dropdown.classList.contains('hidden')) {
                // Close all dropdowns first
                closeAllDropdowns();
                // Show the current dropdown
                dropdown.classList.remove('hidden');
            } else {
                // If clicking the same button while open, close it
                dropdown.classList.add('hidden');
            }

            // Function to handle clicking outside, closing all dropdowns
            function handleClickOutside(event) {
                if (!dropdown.contains(event.target) && !button.contains(event.target)) {
                    dropdown.classList.add('hidden');
                    // Remove this listener once it's not needed
                    document.removeEventListener('click', handleClickOutside);
                }
            }

            // Add listener for clicks outside the dropdown
            document.addEventListener('click', handleClickOutside);
        });
    });

    // Close all dropdowns function
    function closeAllDropdowns() {
        document.querySelectorAll('.dropdown-content').forEach(dropdown => {
            dropdown.classList.add('hidden');
        });
    }

    // Handling nested dropdowns inside each dropdown-content
    document.querySelectorAll('.nested-dropdown-button').forEach(button => {
        button.addEventListener('click', function (event) {
            // Prevent the click from affecting parent dropdowns
            event.stopPropagation();

            const nestedDropdownId = this.getAttribute('data-target');
            const nestedDropdown = document.getElementById(nestedDropdownId);

            // Toggle the visibility of the nested dropdown
            nestedDropdown.classList.toggle('hidden');
        });
    });
});


function toggleSlideMenu(menuId) {
    const mainMenu = document.getElementById("main-menu");
    const slideMenu = document.getElementById(menuId);

    // Hide Main Menu and show Slide Menu
    mainMenu.classList.add("hidden");
    slideMenu.classList.remove("hidden");
    slideMenu.classList.add("active");
  }

  function goBack() {
    const mainMenu = document.getElementById("main-menu");
    const activeSlideMenu = document.querySelector(".slide-in.active");

    // Hide Slide Menu and show Main Menu
    if (activeSlideMenu) {
      activeSlideMenu.classList.remove("active");
      setTimeout(() => {
        activeSlideMenu.classList.add("hidden");
        mainMenu.classList.remove("hidden");
      }, 300); // Match the transition duration
    }
  }


( function( $ ) {

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
  
}( jQuery ) );


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






