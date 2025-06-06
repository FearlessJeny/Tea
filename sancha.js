// Services script

const modalViews = document.querySelectorAll('.services-modal'),
  modalBtns = document.querySelectorAll('.services-button'),
  modalCloses = document.querySelectorAll('.services-modal-close');

const modal = function (modalClick) {
  modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener('click', () => {
    modal(i)
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener('click', () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove('active-modal')
    });
  });
});


//Portfolio swiper script

var swiperPortfolio = new Swiper('.portfolio-container', {
  grabCursor: true,
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
});


$(window).on('scroll', function () {
  $('.scroll-top').toggleClass('show', $(window).
    scrollTop() >= 100);
});

$('.scroll-top').on('click', function () {
  $('html, body').stop().animate({ scrollTop: 0 },
    500);
});

let path = document.querySelector('.scroll-top path');
let length_path = path.getTotalLength();

path.style.strokeDasharray = length_path + " " + length_path;
path.style.strokeDashoffset = length_path;
path.getBoundingClientRect();
path.style.transition = path.style.WebkitTransition = "stroke-dashoffset 10ms linear";

function updateScrollTop() {
  let offset = $(document).height() - $(window).height();
  path.style.strokeDashoffset = length_path - ($(window).scrollTop() * length_path) / offset;
}

updateScrollTop();
$(window).scroll(updateScrollTop);


// Scrool section active link script

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
    } else {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
    };
  });
}

window.addEventListener('scroll', scrollActive);