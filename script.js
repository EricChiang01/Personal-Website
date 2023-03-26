function toggleMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

// Function to toggle dropdown menu
function toggleDropdown(event) {
  const dropdown = event.target.parentNode.nextElementSibling;
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
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