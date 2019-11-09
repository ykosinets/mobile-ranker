export default function Badge(selector) {
	this.cartElement = document.querySelector(selector);
	const oldBackground = getComputedStyle(this.cartElement.querySelector('.notification-badge')).backgroundColor;

	this.setNumber = (n) => {
		n = n || 0;
		let numberElement = this.cartElement.querySelector('.number');
		let notificationElement = this.cartElement.querySelector('.notification-badge');
		let newNumberElement = numberElement.cloneNode();

		if (typeof n != 'number' || n < 0 || isNaN(n)) {
			console.error('Wrong type or n(' + n + ') is less then 0!');
			notificationElement.classList.remove('active');
			numberElement.innerHTML = '';

			return false;
		}

		if (n === 0) {
			notificationElement.classList.remove('active');
			numberElement.innerHTML = '';

			return false;
		}

		if (n > 99) {
			notificationElement.style.backgroundColor = getComputedStyle(numberElement).color;
		}else{
			notificationElement.style.backgroundColor = oldBackground;
		}

		if (!notificationElement.classList.contains('active')) {
			notificationElement.classList.add('active');
		}

		newNumberElement.innerHTML = n;
		newNumberElement.classList.add('new');
		numberElement.classList.add('old');
		numberElement.after(newNumberElement);

		setTimeout(() => {
			newNumberElement.classList.remove('new');
		});
		setTimeout(() => {
			numberElement.remove();
		}, 300);
	};

	this.getNumber = () => {
		let numberElement = this.cartElement.querySelector('.number');
		let n = parseInt(numberElement.innerHTML);
		return typeof n != 'number' ? 0 : n;
	};

	this.increase = (n) => {
		n = n || 1;
		let current = this.getNumber() || 0;

		if (current + n < 0) {
			return false;
		}

		this.setNumber(current + n);
	};

	this.decrease = (n) => {
		n = n || 1;
		let current = this.getNumber() || 0;

		if (current - n < 0) {
			return false;
		}

		this.setNumber(current - n);
	};
}
