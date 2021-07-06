const headerCityButton = document.querySelector('.header__city-button');

headerCityButton.textContent =
  localStorage.getItem('lomoda-location') || 'Ваш город?';

headerCityButton.addEventListener('click', () => {
  const city = prompt('Укажите Ваш город.');
  headerCityButton.textContent = city;
  localStorage.setItem('lomoda-location', city);
});

// Блокировка скролла

const desableScroll = () => {
  const widthScroll = window.innerWidth - document.body.offsetWidth;

  document.body.dbScrollY = window.scrollY;

  document.body.style.cssText = `
    position: fixed;
    top: ${-window.scrollY}px;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    padding-right: ${widthScroll}px;
  `;
};

const enableScroll = () => {
  document.body.style.cssText = '';
  window.scroll({
    top: document.body.dbScrollY,
  });
};

// Модальное окно

const subheaderCart = document.querySelector('.subheader__cart');
const cartOverlay = document.querySelector('.cart-overlay');

const cartModalOpen = () => {
  cartOverlay.classList.add('cart-overlay-open');
  desableScroll();
};

const cartModalClose = () => {
  cartOverlay.classList.remove('cart-overlay-open');
  enableScroll();
};

subheaderCart.addEventListener('click', cartModalOpen);

cartOverlay.addEventListener('click', (e) => {
  const target = e.target;
  if (
    target.classList.contains('cart__btn-close') ||
    target.matches('.cart-overlay')
  ) {
    cartModalClose();
  }
});

document.addEventListener('keydown', (e) => {
  const key = e.key;
  if (key === 'Escape') {
    cartModalClose();
  }
});
