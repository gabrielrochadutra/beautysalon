
/* ABRE E FECHA O MENU HAMBURGUER NO CLIQUE */

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle) {
  element.addEventListener('click', function() {
    nav.classList.toggle('show')
  })
}

/* FECHA MENU AO CLICAR EM UM ITEM */

const links = document.querySelectorAll('nav ul li a')

for(const link of links) {
  link.addEventListener('click', function(){
    nav.classList.remove('show')
  })
}

/* APLICA SOMBRA NO HEADER AO DAR SCROLL */

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function(){
  if(window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})

/* CARROSSEL SWIPER */

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
});

/* SCROLL REVEAL */

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social
  `, 
{ interval: 100 })

/* BACK TO TOP */

const backToTopButton = document.querySelector('.back-to-top')
  window.addEventListener('scroll', function() {
    if(this.window.scrollY >=560) {
      backToTopButton.classList.add('show')
    } else {
      backToTopButton.classList.remove('show')
    }
})
