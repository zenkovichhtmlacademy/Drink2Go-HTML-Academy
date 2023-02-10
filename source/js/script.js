const navMain = document.querySelector('.header__nav');
const navToggle = document.querySelector('.header__nav-toggle');
const body = document.querySelector('.page__body');
const headerContainer = document.querySelector('header__container');

// navMain.classList.remove('header__nav--nojs');
headerContainer.classList.remove('header__container--nojs')
navMain.classList.add('header__nav--closed');
navMain.classList.remove('header__nav--opened');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('header__nav--closed')) {
    navMain.classList.remove('header__nav--closed');
    navMain.classList.add('header__nav--opened');
    body.classList.add('page__body--locked');
  } else {
    navMain.classList.add('header__nav--closed');
    navMain.classList.remove('header__nav--opened');
    body.classList.remove('page__body--locked');
  }
});
