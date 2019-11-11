export default function Navigation() {
	const headerButton = document.querySelector('.header-toggle');
	const navigationButton = document.querySelector('.navigation-toggle');
	const menu = document.querySelector('.navigation');
	const navigationBackdrop = document.querySelector('.navigation-backdrop');
	const body = document.querySelector('body');

	this.init = function () {
		headerButton.addEventListener('click', toggleMenu);
		navigationButton.addEventListener('click', toggleMenu);
		navigationBackdrop.addEventListener('click', toggleMenu);
	};

	function toggleMenu() {
		setScrollbarPadding();
		navigationBackdrop.classList.toggle('active');
		headerButton.classList.toggle('active');
		navigationButton.classList.toggle('active');
		menu.classList.toggle('active');
		body.classList.toggle('menu-open');
	}

	let setScrollbarPadding = function () {
		body.style.paddingRight = (body.classList.contains('menu-open') && body.style.paddingRight === getScrollbarWidth()) ? 0 : getScrollbarWidth()
	};

	let getScrollbarWidth = function () {
		const outer = document.createElement('div');
		outer.style.visibility = 'hidden';
		outer.style.overflow = 'scroll';
		outer.style.msOverflowStyle = 'scrollbar';
		document.body.appendChild(outer);

		const inner = document.createElement('div');
		outer.appendChild(inner);

		const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);
		outer.parentNode.removeChild(outer);

		return scrollbarWidth + 'px';
	};
}
