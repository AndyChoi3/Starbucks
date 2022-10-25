const badgeEl = document.querySelector('header .badges');
const toTopel = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
  //console.log(window.scrollY);
  if(window.scrollY > 500){
    // 배지 숨기기
    //gsap.to(요소, 지속시간, 옵션); 애니메이션처리
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    // 버튼 보이기
    gsap.to(toTopel, .2, {
      x: 0
    });
  }
  else {
    // 배지 보여주기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    // 버튼 숨기기
    gsap.to(toTopel, .2, {
      x: 100
    });
  }
}, 300));
// _.throttle(함수, 딜레이ms) 딜레이처리

toTopel.addEventListener('click', function () {
  gsap.to(window, .7,  {
    scrollTo: 0
  });
});

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index){
  //gsap.to(요소, 지속시간, 옵션); 애니메이션처리
  gsap.to(fadeEl, 1, {
    delay: (index+1) * .3,
    opacity: 1
  } );
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper', {
  // direction: 'horizontal',  => Default Value
  slidesPerView: 3, // 한번에 보여 줄 슬라이드 수
  spaceBetween: 10, // 슬라이드 간 여백
  centeredSlides: true, // 가운데부터 시작
  autoplay: {
    delay: 5000
  },
  loop: true,
  pagination: {
    el: '.promotion .swiper-pagination', // page number 선택자
    clickable: true
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next',
  }
});

/* Awards Swiper */

new Swiper('.awards .swiper', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
  
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion;
  if(isHidePromotion) {
    // 숨김 처리
    promotionEl.classList.add('hide');
  } 
  else{
    // 보임 처리
    promotionEl.classList.remove('hide');
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

// 애니메이션 처리
function floatingObject(selector, delay, size) {
  //gsap.to(요소, 지속시간, 옵션); 애니메이션처리
  gsap.to(selector, random(1.5, 2.5), {
    y: size, // y축 이동
    repeat: -1, // 무한반복
    yoyo: true, // 동작 역재생까지 반복
    ease: Power1.easeInOut, // 자연스럽게 처리
    delay: random(0, delay) // 지연시간
  });
}
// 함수 실행
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
      .Scene({
        triggerElement: spyEl, // 보여짐 여부를 감시할 요소
        triggerHook: .8 // 어느지점까지 내려가야 동작할지 
      })
      .setClassToggle(spyEl, 'show') // triiger가 되면 추가할 class 지정
      .addTo(new ScrollMagic.Controller());
});