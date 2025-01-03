/* в этот файл добавляет скрипты*/
const navMain = document.querySelector('.main-nav__user');
const navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav__user--nojs');
navMain.classList.remove('main-nav__user--opened');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-nav__user--closed')) {
    navMain.classList.remove('main-nav__user--closed');
    navMain.classList.add('main-nav__user--opened');
  } else {
    navMain.classList.add('main-nav__user--closed');
    navMain.classList.remove('main-nav__user--opened');
  }
});
