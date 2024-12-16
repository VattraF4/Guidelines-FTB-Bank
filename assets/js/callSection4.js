
// Use this method to call files in project directory
document.addEventListener("DOMContentLoaded", () => {
  fetch('./Section/4.Usage.html') // Update the path to the correct one
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.text();
    })
    .then(data => {
      const htmlCodeSection = document.getElementById('usage');
      if (htmlCodeSection) {
        htmlCodeSection.innerHTML = data;
        console.log('Seciontion "usage successfully.');
      } else {
        console.error('Element "usage" not found');
      }
    })
    .catch(error => console.error('Error loading file', error));
});