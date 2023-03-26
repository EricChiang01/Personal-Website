function toggleMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

// Function to toggle dropdown menu
function toggleDropdown(event) {
  const dropdownContent = event.target.nextElementSibling;
  dropdownContent.classList.toggle('show');
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
  if (!event.target.matches('.dropdown-btn')) {
  const dropdowns = document.querySelectorAll('.dropdown-content');
  dropdowns.forEach(dropdown => {
  if (dropdown.classList.contains('show')) {
  dropdown.classList.remove('show');
  }
  });
  }
  }