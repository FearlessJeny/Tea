const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navbg = document.querySelector('.nav-bg');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
  navbg.classList.toggle('active');
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



function toggleTeaText() {
  if (window.innerWidth > 768) return; // Только для мобильных

  const shortText = document.querySelector("#teaText .short");
  const fullText = document.querySelector("#teaText .full");
  const toggleBtn = document.querySelector("#teaText .toggle");

  const isHidden = fullText.style.display === "none";

  shortText.style.display = isHidden ? "none" : "inline";
  fullText.style.display = isHidden ? "inline" : "none";
  toggleBtn.textContent = isHidden ? "скрыть" : "ещё";
}

// При загрузке страницы — сразу показать полный текст на больших экранах
window.addEventListener("load", function () {
  if (window.innerWidth > 768) {
    document.querySelector("#teaText .short").style.display = "none";
    document.querySelector("#teaText .full").style.display = "inline";
    document.querySelector("#teaText .toggle").style.display = "none";
  }
});




function setupTeaToggles() {
  document.querySelectorAll(".teaText").forEach(function (block) {
    const shortText = block.querySelector(".short");
    const fullText = block.querySelector(".full");
    const toggleBtn = block.querySelector(".toggle");

    // Только для мобильных
    if (window.innerWidth <= 768) {
      toggleBtn.onclick = function () {
        const isHidden = fullText.style.display === "none";
        shortText.style.display = isHidden ? "none" : "inline";
        fullText.style.display = isHidden ? "inline" : "none";
        toggleBtn.textContent = isHidden ? "скрыть" : "ещё";
      };
    } else {
      // На больших экранах сразу показываем весь текст
      shortText.style.display = "none";
      fullText.style.display = "inline";
      toggleBtn.style.display = "none";
    }
  });
}

window.addEventListener("load", setupTeaToggles);