const rangeInput = document.querySelector('.wrapper__contentWrap__from-wrap-info__rangeWrap-button');
const percentValue = document.querySelector('.wrapper__contentWrap__from-wrap-info__rangeWrap-percentValue');

(function() {
    const header = document.querySelector('.header')
    window.onscroll = () => {
        if (document.documentElement.scrollTop > 80) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
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
