//Carousel
const carousel = document.querySelector('.carousel');
const flechasIzquierda = document.querySelector('.fa-angles-left');
const flechasDerecha = document.querySelector('.fa-angles-right');
const puntos = document.querySelectorAll('.punto');

let currentIndex = 0;
const totalBanners = 3;
let timer 

function actualizarPuntos() {
  puntos.forEach(punto => punto.classList.remove('activo'));
  puntos[currentIndex].classList.add('activo');
}

function moverCarousel() {
  const movimiento = currentIndex * -(100 / totalBanners);
  carousel.style.transform = `translateX(${movimiento}%)`;
}

function iniciarTimer() {
  timer = setInterval(() => {
    if (currentIndex === totalBanners - 1) {
        currentIndex = 0;
      } else {
        currentIndex = currentIndex + 1;
      }      
    moverCarousel();
    actualizarPuntos();
  }, 6500);
}

function detenerTimer() {
  clearInterval(timer);
}

flechasIzquierda.addEventListener('click', () => {
   if (currentIndex === 0) {
        currentIndex = totalBanners - 1;
      } else {
        currentIndex = currentIndex - 1;
      }      
  moverCarousel();
  actualizarPuntos();
  detenerTimer();
  iniciarTimer();
});

flechasDerecha.addEventListener('click', () => {
    if (currentIndex === totalBanners - 1) {
        currentIndex = 0;
      } else {
        currentIndex = currentIndex + 1;
      }   
  moverCarousel();
  actualizarPuntos();
  detenerTimer();
  iniciarTimer();
});

puntos.forEach((punto, index) => {
  punto.addEventListener('click', () => {
    currentIndex = index;
    moverCarousel();
    actualizarPuntos();
    detenerTimer();
    iniciarTimer();
  });
});

iniciarTimer();
