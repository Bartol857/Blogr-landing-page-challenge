const btn = document.querySelector('.burger-icon');
const nav = document.querySelector('.nav__mobile');
const navItems = document.querySelectorAll('.menu-item');
const openBtn = document.querySelector('.burger-open');
const closeBtn = document.querySelector('.burger-close');

const openNav = () => {
	nav.classList.toggle('nav__mobile--active');

	navItems.forEach((item) => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav__mobile--active');
			openBtn.classList.remove('disabled');
			closeBtn.classList.add('disabled');
		});
	});
};

const btnChange = () => {
	openBtn.addEventListener('click', () => {
		openBtn.classList.add('disabled');
		closeBtn.classList.remove('disabled');
	});

	closeBtn.addEventListener('click', () => {
		openBtn.classList.remove('disabled');
		closeBtn.classList.add('disabled');
	});
};

btn.addEventListener('click', openNav);
btnChange();
