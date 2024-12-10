
// This code use to reload the webpage when the logo is clicked
$(document).ready(function () {
	$('#logo').on('click', function (e) {
		e.preventDefault(); // Prevent the default anchor behavior
		location.reload(); // Reload the page
	});
});

// This code use snip view to display the code
// GitHub raw file URLs for HTML, CSS, and JS
const htmlUrl = "https://raw.githubusercontent.com/VattraF4/Guidelines-FTB-Bank/main/index.html";
const cssUrl = "/assets/css/styles.css";  // Local CSS file path, ensure the server serves it
const jsUrl = "https://raw.githubusercontent.com/VattraF4/Guidelines-FTB-Bank/main/assets/js/script.js";
const tra = "https://raw.githubusercontent.com/VattraF4/Guidelines-FTB-Bank/main/Members/Ra Vattra.html";

// Function to fetch and display the code from GitHub using jQuery
function fetchCode(url, elementId) {
    $.ajax({
        url: url,          // URL to fetch the content from
        method: "GET",     // HTTP method (GET)
        success: function(data) {
            $("#" + elementId).text(data);  // Set the text content of the specified element
        },
        error: function() {
            console.error("Error fetching the file:", url);
        }
    });
}

// Wait for the DOM to fully load before executing fetchCode
$(document).ready(function() {
    fetchCode(htmlUrl, "html-code-block");
    fetchCode(cssUrl, "css-code-block");
    fetchCode(jsUrl, "js-code-block");
    fetchCode(tra, "tra-code-block");
});


$(document).ready(function() {
    $('#github-code').hide();
    $('#btn-hide-show').click(function() {
        $('#github-codes').toggle(500); // Toggle the visibility of the element with the id "github-code" over a period of 500 milliseconds
    });
});
