const rangeInput = document.querySelector('.wrapper__contentWrap__form__wrap__info__rangeWrap__button');
const percentValue = document.querySelector('.wrapper__contentWrap__form__wrap__info__rangeWrap__percentValue');


(function() {
    const header = document.querySelector('.header')
    window.onscroll = () => {
        if (document.documentElement.scrollTop > 80) {
            header.classList.add('header__active');
        } else {
            header.classList.remove('header__active');
        }
    };
}());

rangeInput.max = 100;
rangeInput.value = 25;

rangeInput.addEventListener('input', () => {
  const resValue = (rangeInput.value / rangeInput.max) * 100;
  percentValue.textContent = `${Math.round(resValue)}%`;
});

rangeInput.dispatchEvent(new Event('input'));


// Burger-styles

(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__wrapper__nav');
    const menuCloseItem = document.querySelector('.header__wrapper__nav__close');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__wrapper__nav__active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__wrapper__nav__active');
    });
}())

