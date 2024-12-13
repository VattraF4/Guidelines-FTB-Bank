
// Use this method to call files in project directory
document.addEventListener("DOMContentLoaded", () => {
  fetch('./Section/2.download-and-install.html') // Update the path to the correct one
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.text();
    })
    .then(data => {
      const cssCodeElement = document.getElementById('download');
      if (cssCodeElement) {
        cssCodeElement.innerHTML = data;
        console.log('Seciontion 2 loaded successfully.');
      } else {
        console.error('Element download not found');
      }
    })
    .catch(error => console.error('Error loading file', error));
});