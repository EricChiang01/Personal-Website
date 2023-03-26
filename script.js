function toggleMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

function toggleDropdown(event) {
  const dropdownContent = event.target.nextElementSibling;
  dropdownContent.classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropdown-btn')) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      const dropdownContent = dropdowns[i];
      if (dropdownContent.classList.contains('show')) {
        dropdownContent.classList.remove('show');
      }
    }
  }
}
