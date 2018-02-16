const burger = document.querySelector('.BurgerBox');
const nav = document.querySelector('nav');
const body = document.body;

burger.addEventListener('click', () => {
  burger.classList.toggle('BurgerOpened');
  nav.classList.toggle('MenuOpened');
  body.classList.toggle('NoScroll');
})