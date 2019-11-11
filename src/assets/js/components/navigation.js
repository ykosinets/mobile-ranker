export default function Navigation(){
	const headerButton = document.querySelector('.header-toggle');
	const navigationButton = document.querySelector('.navigation-toggle');
	const menu = document.querySelector('.navigation');
	const navigationBackdrop = document.querySelector('.navigation-backdrop');
	const body = document.querySelector('body');

	this.init = function() {
		headerButton.addEventListener('click', toggleMenu);
		navigationButton.addEventListener('click', toggleMenu);
		navigationBackdrop.addEventListener('click', toggleMenu);
	};

	function toggleMenu(){
		navigationBackdrop.classList.toggle('active');
		headerButton.classList.toggle('active');
		navigationButton.classList.toggle('active');
		menu.classList.toggle('active');
		body.classList.toggle('menu-open');
	}
}
