$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 3,
    margin: 30,
    loop: true,
    responsive: {
      992: {
        items: 3
      },
      768: {
        items: 2
      },
      320: {
        items: 1
      }
    }
  });
});
// Mobile menu
 const burgerMenu = document.querySelector('.mobile-menu')
 const topMenu = document.querySelector('.top-menu')

burgerMenu.addEventListener('click', () => {
  topMenu.classList.toggle('show')
})

// Hide menu when click nav links

const menuLinks = document.querySelectorAll('.top-menu a')
menuLinks.forEach(item => item.addEventListener('click', () => {
  topMenu.classList.remove('show')
}))

// Modal window

const modalBtn = document.querySelector('.modal-btn')
const modalWrapper = document.querySelector('.modal-wrapper')
const modalClose = document.querySelector('.modal-close')

modalBtn.addEventListener('click', () => {
  modalWrapper.classList.add('show')
})

modalClose.addEventListener('click', () => {
  modalWrapper.classList.remove('show')
})

