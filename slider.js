const stepNextBtn  = document.querySelector('#right');
const stepPrevBtn  = document.querySelector('#left');
const slider = document.querySelector('.orderOffer__contentWrap__slider');
const slide = document.querySelectorAll('.orderOffer__contentWrap__slider__item');
const dots = document.querySelectorAll('.orderOffer__contentWrap__slider__dotsWrap__dot');

let activeSlide = 0;

stepPrevBtn.addEventListener('click', () => {
    activeSlide = Math.max(activeSlide - 1, 0);
    slider.scrollTo({ left: activeSlide * slider.offsetWidth, behavior: 'smooth' });
    updateSlide();
  });
  
stepNextBtn.addEventListener('click', () => {
activeSlide = Math.min(activeSlide + 1, slide.length - 1);
slider.scrollTo({ left: activeSlide * slider.offsetWidth, behavior: 'smooth' });
updateSlide();
});

function updateSlide() {
    dots.forEach((dot, index) => dot.classList.toggle('active', index === activeSlide));
    stepPrevBtn.disabled = activeSlide === 0;
    stepNextBtn.disabled = activeSlide >= slide.length - 1;
}
  

