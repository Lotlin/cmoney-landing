import { burgerMenuBtn, headerNavMenu } from '../getElements.js'

const burgerMenuToggle = () => {
  burgerMenuBtn.classList.toggle('burger--active');
}

const navMenuToggle = () => {
  headerNavMenu.classList.toggle('header__nav--active');
}

export const burgerMenuController = () => {
  if (burgerMenuBtn && headerNavMenu) {
    burgerMenuBtn.addEventListener('click', () => {
      burgerMenuToggle();
      navMenuToggle();
    });
  } else {
    console.warn('Не удалось найти элементы для бургера или меню');
  }
}