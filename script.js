function toggleMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

// Get all the project title elements
const projectTitles = document.querySelectorAll('#projects li h3');

// Loop through each project title
projectTitles.forEach(title => {
  // Add a click event listener to each project title
  title.addEventListener('click', () => {
    // Get the sibling <p> element that contains the project description
    const description = title.nextElementSibling;
    // Toggle the visibility of the description element
    description.classList.toggle('show');
  });
});