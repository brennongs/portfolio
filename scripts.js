const modals = document.querySelectorAll('.modal');
const backgrounds = document.querySelectorAll('.modal-background');
const closeButtons = document.querySelectorAll('.modal-close');
const resources = document.querySelector('#resources');
const contact = document.querySelector('#contact');
const rModal = document.querySelector('#resources-modal');
const cModal = document.querySelector('#contact-modal');

function closeModals(){
  modals.forEach(({ classList }) => {
    classList.remove('is-active');
  });
}

if (closeButtons.length) {
  [...closeButtons, ...backgrounds].forEach(el => {
    el.addEventListener('click', closeModals);
  });
}

resources.addEventListener('click', () => {
  rModal.classList.add('is-active');
});

contact.addEventListener('click', () => {
  cModal.classList.add('is-active');
});

//mobile
if(document.querySelector('#burger')){
  const burger = document.querySelector('#burger');
  const menu = document.querySelector('#navbar-menu');

  burger.addEventListener('click', ({ target }) => {
    target.classList.toggle('is-active');
    menu.classList.toggle('is-active');
  });
}
