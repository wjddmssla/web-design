// 메인배너
const slides = document.querySelector('.slides');
const slideCount = slides.querySelectorAll('img').length;
let currentIndex = 0;

setInterval(() => {
  currentIndex++;
  if (currentIndex >= slideCount) currentIndex = 0;
  slides.style.transform = `translateX(-${100 * currentIndex}%)`;
}, 3000);

// recommend 슬라이드
