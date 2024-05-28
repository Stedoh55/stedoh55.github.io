// Preventing the initial upscrolling above the Navbar
document.addEventListener("scroll", function () {
	if (window.scrollY < 0) {
		window.scrollTo(0, 0);
	}
});

console.log('Hellow Wowrld')
console.log(window)