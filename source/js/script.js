var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

var modalBackdrop = document.querySelector('.page-main__modal-backdrop');
var modalWindow = document.querySelector('.modal-cart');
var openModalWindowForm = [].slice.call(document.querySelectorAll('.product__image-cart'));
var openModalWindowIndex = [].slice.call(document.querySelectorAll('.featured__button'));
var closeModalWindow = document.querySelector('.modal-cart__button');

function openModal (backdrop, targetModal) {
  if (backdrop) {
    modalBackdrop.classList.add('is-visible');
  }
  if (targetModal) {
    targetModal.classList.add('is-visible');
  } else {
    throw new Error('No modal targeted');
  }
}

openModalWindowForm.forEach(function(openModalWindowForm) {
  openModalWindowForm.addEventListener('click', function(e) {
    e.preventDefault();
    openModal(true, modalWindow);
  });

  closeModalWindow.addEventListener('click', function() {
    modalWindow.classList.remove('is-visible');
    modalBackdrop.classList.remove('is-visible');
  });
});

openModalWindowIndex.forEach(function(openModalWindowIndex) {
  openModalWindowIndex.addEventListener('click', function(e) {
    e.preventDefault();
    openModal(true, modalWindow);
  });

  closeModalWindow.addEventListener('click', function() {
    modalWindow.classList.remove('is-visible');
    modalBackdrop.classList.remove('is-visible');
  });
});
