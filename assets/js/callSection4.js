
// Use this method to call files in project directory
document.addEventListener("DOMContentLoaded", () => {
  fetch('./Section/4.Resource.html') // Update the path to the correct one
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.text();
    })
    .then(data => {
      const cssCodeElement = document.getElementById('sub-resource');
      if (cssCodeElement) {
        cssCodeElement.innerHTML = data;
        console.log('Seciontion "Re loaded successfully.');
      } else {
        console.error('Element "sub-resource" not found');
      }
    })
    .catch(error => console.error('Error loading file', error));
});