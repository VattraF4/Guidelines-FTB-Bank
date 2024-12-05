document.addEventListener("DOMContentLoaded", () => {
    fetch('../Members/Ra Vattra.html')
    .then(response => response.ok ? response.text() : Promise.reject(`HTTP error! Status: ${response.status}`))
    .then(data => {
        document.getElementById('mid-vattra').innerHTML = data;
        console.log('Team section loaded successfully.');
    })
    .catch(error => console.error('Error loading team section:', error));
});


//Call Yan pich
document.addEventListener("DOMContentLoaded", () => {
    fetch('../Members/Yan Pich.html')
    .then(response => response.ok ? response.text() : Promise.reject(`HTTP error! Status: ${response.status}`))
    .then(data => {
        document.getElementById('mid-pich-yan').innerHTML = data;
        console.log('Team section loaded successfully.');
    })
    .catch(error => console.error('Error loading team section:', error));
});

// Call Raksa
document.addEventListener("DOMContentLoaded", () => {
    fetch('../Members/Ra Raksa.html')
    .then(response => response.ok ? response.text() : Promise.reject(`HTTP error! Status: ${response.status}`))
    .then(data => {
        document.getElementById('mid-ra-raksa').innerHTML = data;
        console.log('Team section loaded successfully.');
    })
    .catch(error => console.error('Error loading team section:', error));
});

// Call RC Nan
document.addEventListener("DOMContentLoaded", () => {
    fetch('../Members/RC Nan.html')
    .then(response => response.ok ? response.text() : Promise.reject(`HTTP error! Status: ${response.status}`))
    .then(data => {
        document.getElementById('mid-rc-nan').innerHTML = data;
        console.log('Team section loaded successfully.');
    })
    .catch(error => console.error('Error loading team section:', error));
});

// Call Ralin
document.addEventListener("DOMContentLoaded", () => {
    fetch('../Members/Ralin Thai.html')
    .then(response => response.ok ? response.text() : Promise.reject(`HTTP error! Status: ${response.status}`))
    .then(data => {
        document.getElementById('mid-ralin').innerHTML = data;
        console.log('Team section loaded successfully.');
    })
    .catch(error => console.error('Error loading team section:', error));
});
document.addEventListener("DOMContentLoaded", () => {
    fetch('../Members/Run Oudom.html')
    .then(response => response.ok ? response.text() : Promise.reject(`HTTP error! Status: ${response.status}`))
    .then(data => {
        document.getElementById('mid-run-oudom').innerHTML = data;
        console.log('Team section loaded successfully.');
    })
    .catch(error => console.error('Error loading team section:', error));
});
document.addEventListener("DOMContentLoaded", () => {
    fetch('../Members/Chamnan David.html')
    .then(response => response.ok ? response.text() : Promise.reject(`HTTP error! Status: ${response.status}`))
    .then(data => {
        document.getElementById('mid-chamnan-david').innerHTML = data;
        console.log('Team section loaded successfully.');
    })
    .catch(error => console.error('Error loading team section:', error));
});

document.addEventListener("DOMContentLoaded", () => {
    fetch('../Members/Yorn soyun.html')
    .then(response => response.ok ? response.text() : Promise.reject(`HTTP error! Status: ${response.status}`))
    .then(data => {
        document.getElementById('mid-yorn-soyun').innerHTML = data;
        console.log('Team section loaded successfully.');
    })
    .catch(error => console.error('Error loading team section:', error));
});