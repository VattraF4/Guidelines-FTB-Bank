// const corsProxy = 'https://cors-anywhere.herokuapp.com/';
// const url = 'https://raw.githubusercontent.com/VattraF4/Guidelines-FTB-Bank/main/Members/our-team.html';


// document.addEventListener("DOMContentLoaded", function () {
//     fetch('../Members/our-team.html')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.text();
//     })
//     .then(data => {
//         document.getElementById('team-container').innerHTML = data;
//         console.log('Team section loaded successfully.');
//     })
//     .catch(error => console.error('Error loading team section:', error));
// });



fetch('../Members/our-team.html')
.then(response => response.text())
.then(data => {
    const teamSection = document.getElementById('team-container');
    teamSection.innerHTML = data;

    // Execute any scripts inside the loaded content
    const scripts = teamSection.querySelectorAll('script');
    scripts.forEach(script => {
        const newScript = document.createElement('script');
        newScript.textContent = script.textContent;
        document.body.appendChild(newScript);
        script.remove();
    });
})
.catch(error => console.error('Error loading our-team.html:', error));
