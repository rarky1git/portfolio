// Get the full view div
var fullView = document.getElementById("full-view");

// Add an event listener to each image
var images = document.getElementsByTagName("img");
for (var i = 0; i < images.length; i++) {
	images[i].addEventListener("click", function (event) {
		// When an image is clicked, show it in the full view div
		fullView.style.display = "flex";
		fullView.children[0].src = event.target.src;
		event.stopPropagation(); // prevent the event from bubbling up to the full view div
	});
}

// Add an event listener to the full view div
fullView.addEventListener("click", function () {
	// When the full view div is clicked, hide it
	fullView.style.display = "none";
});

document.getElementById("menu-button").addEventListener("click", function () {
	var header = document.querySelector("header");
	if (header.style.display === "none") {
		header.style.display = "flex";
	} else {
		header.style.display = "none";
	}
});

document.addEventListener("DOMContentLoaded", function () {
	const toggleButtons = document.querySelectorAll(".toggle-button");

	toggleButtons.forEach(function (button) {
		button.addEventListener("click", function () {
			const target = document.getElementById(button.dataset.target);
			target.classList.toggle("show");
		});
	});
});

window.onload = function () {
	var scrollableDiv = document.querySelector('.horizontal-scrollable');

	scrollableDiv.addEventListener('wheel', function(e) {
		// Normalize scroll speed across browsers and prevent vertical scroll
		e.preventDefault();
		// Multiply by 1.5 to make the scroll speed similar to normal
		scrollableDiv.scrollLeft += e.deltaY * 1.5;
	});
}
