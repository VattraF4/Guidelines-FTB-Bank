//github display html file by dynamically loading
// Call Ra-Vattra from github.com
document.addEventListener("DOMContentLoaded", () => {
    fetch('/Guidelines-FTB-Bank/Members/Ra Vattra.html') // Adjust the path for GitHub Pages
        // fetch('../Members/Ra Vattra.html') // Adjust the path for GitHub Pages
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('mid-vattra').innerHTML = data;
            console.log('Team section loaded successfully.');
        })
        .catch(error => console.error('Error loading team section:', error));
});
// Yan Yan-Pich from gitServer
document.addEventListener("DOMContentLoaded", () => {
    fetch('/Guidelines-FTB-Bank/Members/Yan Pich.html') // Adjust the path for GitHub Pages
        // fetch('../Members/Ra Vattra.html') // Adjust the path for GitHub Pages
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('mid-pich-yan').innerHTML = data;
            console.log('Team section loaded successfully.');
        })
        .catch(error => console.error('Error loading team section:', error));
});

// Ra Raksa from gitServer
document.addEventListener("DOMContentLoaded", () => {
    fetch('/Guidelines-FTB-Bank/Members/Ra Raksa.html') // Adjust the path for GitHub Pages
        // fetch('../Members/Ra Vattra.html') // Adjust the path for GitHub Pages
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('mid-ra-raksa').innerHTML = data;
            console.log('Team section loaded successfully.');
        })
        .catch(error => console.error('Error loading team section:', error));
});


// Yorn Soyun from gitServer
document.addEventListener("DOMContentLoaded", () => {
    fetch('/Guidelines-FTB-Bank/Members/Yorn soyun.html') // Adjust the path for GitHub Pages
        // fetch('../Members/Ra Vattra.html') // Adjust the path for GitHub Pages
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('mid-yorn-soyun').innerHTML = data;
            console.log('Team section loaded successfully.');
        })
        .catch(error => console.error('Error loading team section:', error));
});


// RC Nan from gitServer
document.addEventListener("DOMContentLoaded", () => {
    fetch('/Guidelines-FTB-Bank/Members/RC Nan.html') // Adjust the path for GitHub Pages
        // fetch('../Members/Ra Vattra.html') // Adjust the path for GitHub Pages
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('mid-rc-nan').innerHTML = data;
            console.log('Team section loaded successfully.');
        })
        .catch(error => console.error('Error loading team section:', error));
});

// Ralin from gitServer
document.addEventListener("DOMContentLoaded", () => {
    fetch('/Guidelines-FTB-Bank/Members/Ralin Thai.html') // Adjust the path for GitHub Pages
        // fetch('../Members/Ra Vattra.html') // Adjust the path for GitHub Pages
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('mid-ralin').innerHTML = data;
            console.log('Team section loaded successfully.');
        })
        .catch(error => console.error('Error loading team section:', error));
});

// Run Oudom from gitServer
document.addEventListener("DOMContentLoaded", () => {
    fetch('/Guidelines-FTB-Bank/Members/Run Oudom.html') // Adjust the path for GitHub Pages
        // fetch('../Members/Ra Vattra.html') // Adjust the path for GitHub Pages
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('mid-run-oudom').innerHTML = data;
            console.log('Team section loaded successfully.');
        })
        .catch(error => console.error('Error loading team section:', error));
});

// Chamnan David from gitServer
document.addEventListener("DOMContentLoaded", () => {
    fetch('/Guidelines-FTB-Bank/Members/Chamnan David.html') // Adjust the path for GitHub Pages
        // fetch('../Members/Ra Vattra.html') // Adjust the path for GitHub Pages
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('mid-chamnan-david').innerHTML = data;
            console.log('Team section loaded successfully.');
        })
        .catch(error => console.error('Error loading team section:', error));
});


// ------------- Call file with local links for local files host -----------------//
// Call Ra Vattra
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