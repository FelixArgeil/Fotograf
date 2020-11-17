//Основа для бургер меню
const menuIcon = document.querySelector('.hamburger__menu');
const navBar = document.querySelector('.header__wrapper');
////////////////////////////////////////////////////////////////



//Основа для бургер меню
menuIcon.addEventListener('click', () => {
	navBar.classList.toggle("change");
})
////////////////////////////////////////////////////////////////