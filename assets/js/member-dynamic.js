document.addEventListener("DOMContentLoaded", function () {
    fetch('../Members/our-team.html')
        .then(response => {
            console.log('Response:', response);
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
