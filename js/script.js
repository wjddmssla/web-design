// 메인배너
const slides = document.querySelector('.slides');
const slideCount = slides.querySelectorAll('img').length;
let currentIndex = 0;

setInterval(() => {
  currentIndex++;
  if (currentIndex >= slideCount) currentIndex = 0;
  slides.style.transform = `translateX(-${100 * currentIndex}%)`;
}, 3000);

// recommend
const products = [
  { img: "images/recommend/plastic.svg", title: "BLUEBERRY<br>TEA" },
  { img: "../images/recommend/package01.svg", title: "CHAMOMILE<br>TEA" },
  { img: "../images/recommend/package02.svg", title: "CHRYSANTHEMUM<br>TEA" },
  { img: "../images/recommend/package03.svg", title: "LEMON GINGER<br>TEA" },
  { img: "images/recommend/teabox.svg", title: "LAVENDER &<br>CHAMOMILE<br>TEA" }
];

const recommend = document.querySelector('#recommend');
const slots = recommend.querySelectorAll('.slot');         
const leftBtn = recommend.querySelector('.arrow.left');
const rightBtn = recommend.querySelector('.arrow.right');
const dotsWrap = recommend.querySelector('.dots');

dotsWrap.innerHTML = products.map(() => '<span class="dot"></span>').join('');
const dots = dotsWrap.querySelectorAll('.dot');

let center = 2; 
let timer = null;

function render() {
  const N = products.length;
  for (let i = 0; i < 5; i++) {
    const idx = (center - 2 + i + N) % N;
    const data = products[idx];
    const img = slots[i].querySelector('.circle img');
    const cap = slots[i].querySelector('.caption');

    img.src = data.img;
    img.alt = data.title.replace(/<br>/g, ' ');
    cap.innerHTML = data.title;
  }

  const centerImg = slots[2].querySelector('.circle img');
  centerImg.classList.remove('pop');
  void centerImg.offsetWidth; 
  centerImg.classList.add('pop');

  dots.forEach((d, i) => d.classList.toggle('active', i === center));
}

function next() {
  center = (center + 1) % products.length;
  render(); restart();
}
function prev() {
  center = (center - 1 + products.length) % products.length;
  render(); restart();
}

function autoplay() {
  timer = setInterval(next, 3000);
}
function restart() {
  clearInterval(timer);
  autoplay();
}

// 이벤트
rightBtn.addEventListener('click', next);
leftBtn.addEventListener('click', prev);
dots.forEach((dot, i) => dot.addEventListener('click', () => { center = i; render(); restart(); }));

// 초기 렌더 + 자동시작
render(); autoplay();