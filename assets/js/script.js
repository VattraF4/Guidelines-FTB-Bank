// Change Active State on Scroll
var sections = $('section') // select all sections
	, nav = $('nav') // select the navigation
	, nav_height = nav.outerHeight(); // get the height of the navigation

$(window).on('scroll', function () { // add event listener to window's scroll event
	var cur_pos = $(this).scrollTop(); // get the current scroll position

	sections.each(function () { // loop through each section
		var top = $(this).offset().top - nav_height, // calculate the top position of the section
			bottom = top + $(this).outerHeight(); // calculate the bottom position of the section

		if (cur_pos >= top && cur_pos <= bottom) { // check if the current scroll position is within the section
			nav.find('a').removeClass('active'); // remove active class from all navigation links
			sections.removeClass('active'); // remove active class from all sections

			$(this).addClass('active'); // add active class to the current section
			nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active'); // add active class to the corresponding navigation link
		}
	});
});

// Smoth Scroll
$(function () { // document ready event
	$('a[href*="#"]:not([href="#"])').click(function () { // select all links that have a href attribute starting with "#"
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) { // check if the link is on the same domain
			var target = $(this.hash); // get the target element
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']'); // if the target element is not found, try to find it by name
			if (target.length) { // if the target element is found
				$('html, body').animate({ // animate the scroll to the target element
					scrollTop: target.offset().top - 60
				}, 1000);
				return false; // prevent default link behavior
			}
		}
	});
});

// Print Current Year in html footer copyright
document.getElementById("mgsYear").innerText = new Date().getFullYear(); // get the current year and update the innerText of the element with the id "mgsYear"


// This code use to reload the webpage when the logo is clicked
$(document).ready(function () {
	$('#logo').on('click', function (e) {
		e.preventDefault(); // Prevent the default anchor behavior
		location.reload(); // Reload the page
	});
});