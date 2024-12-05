// const corsProxy = 'https://cors-anywhere.herokuapp.com/';
// const url = 'https://raw.githubusercontent.com/VattraF4/Guidelines-FTB-Bank/main/Members/our-team.html';


document.addEventListener("DOMContentLoaded", function () {
    fetch('../Members/our-team.html')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('team-container').innerHTML = data;
        console.log('Team section loaded successfully.');
    })
    .catch(error => console.error('Error loading team section:', error));
});


