const sliderItems = document.querySelectorAll('.slider__item');
const desc = document.querySelector('.description');

const sliderMain = new Swiper('.slider--main', {
  freeMode: true,
  centerSlides: true,
  parallax: true,
  slidesOffsetBefore: 550,
  breakpoints: {
    0: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    680: {
      slidesPerView: 3.5,
      spaceBetween: 60,
    },
  },
});

const sliderBg = new Swiper('.slider--bg', {
  centerSlides: true,
  parallax: true,
  spaceBetween: 60,
  slidesPerView: 3.5,
});

sliderMain.controller.control = sliderBg;

sliderItems.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('slider__item--opened');
  });
});

sliderMain.on('slideChange', () => {
  sliderMain.activeIndex > 0 ? desc.classList.add('hidden') : desc.classList.remove('hidden');
});
