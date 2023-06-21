//  Slider - start

const sliderTrack = document.querySelector('.slider__track');
const privBtn = document.querySelector('.slider__btn-prev');
const nextBtn = document.querySelector('.slider__btn-next');
const slides = document.querySelectorAll('.slider__slide');

const slide = slides[0];
const slideWidth = slide.clientWidth

let count = 1;

nextBtn.addEventListener('click', function(){
    if (count === 3){
        count = 0;
    }
    sliderTrack.style.transform = `translateX(${count * -slideWidth}px)`;
    count++;
})

privBtn.addEventListener('click', function(){
    if (count === 0){
        count = 3;
    }
    count--;
    sliderTrack.style.transform = `translateX(${count * -slideWidth}px)`;
})

// Slider - end


// const swiper = new Swiper('.myswiper', {
//     direction: 'vertical',
//     loop: true,
  
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//   });







