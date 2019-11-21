var _els = document.getElementsByClassName("parallax"),
	_layers = [],
	_scrollY = window.scrollY;

for (var i = 0; i < _els.length; i++) {
	var el = _els[i];
	var offset = el.dataset.offset;
	_layers.push({ el: el, y: 0, offset: offset });
}
// console.log("_layers:", _layers);

window.addEventListener("scroll", handle_scroll);
// requestAnimationFrame(animate);

function handle_scroll(e) {
	_scrollY = window.scrollY;
	animate();
}

function animate() {
	_scrollY = window.scrollY; // for mobile devices
	for (let i = 0; i < _layers.length; i++) {
		var oldY = _layers[i].y;
		_layers[i].y = _scrollY * _layers[i].offset;
		// if (oldY !== _layers[i].y) {
		// 	_layers[i].el.style.transform =
		// 		"translateY(" + _layers[i].y + "px)";
		// }

		// use gsap
		if (oldY !== _layers[i].y) {
			TweenMax.to(_layers[i].el, 0.5, {
				y: _layers[i].y,
				overwrite: "all"
			});
		}
	}
	// requestAnimationFrame(animate);
}

// Will gonna be use gsap for smooth scrolling animation
