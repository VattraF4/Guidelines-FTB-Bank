
// Use this method to call files in project directory
document.addEventListener("DOMContentLoaded", () => {
  fetch('assets/css/styles.css') // Update the path to the correct one
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.text();
    })
    .then(data => {
      const cssCodeElement = document.getElementById('css-code');
      if (cssCodeElement) {
        cssCodeElement.innerText = data;
        console.log('CSS loaded successfully.');
      } else {
        console.error('Element with id "css-code" not found.');
      }
    })
    .catch(error => console.error('Error loading CSS:', error));
});