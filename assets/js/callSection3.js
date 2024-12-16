
// Use this method to call files in project directory
document.addEventListener("DOMContentLoaded", () => {
  fetch('./Section/3.Register.html') // Update the path to the correct one
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.text();
    })
    .then(data => {
      const htmlCodeSection = document.getElementById('register');
      if (htmlCodeSection) {
        htmlCodeSection.innerHTML = data;
        console.log('Seciontion "Re loaded successfully.');
      } else {
        console.error('Element download not found');
      }
    })
    .catch(error => console.error('Error loading file', error));
});