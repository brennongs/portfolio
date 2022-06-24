const modals = document.querySelectorAll('.modal');
const backgrounds = document.querySelectorAll('.modal-background');
const closeButtons = document.querySelectorAll('.modal-close');
const resources = document.querySelector('#resources');
const contact = document.querySelector('#contact');
const resourcesModal = document.querySelector('#resources-modal');
const contactModal = document.querySelector('#contact-modal');
const burger = document.querySelector('#burger');

if (closeButtons.length) {
  [...closeButtons, ...backgrounds].forEach(element => {
    element.addEventListener('click', closeModals);
  });
}

resources.addEventListener('click', () => {
  resourcesModal.classList.add('is-active');
});

contact.addEventListener('click', () => {
  contactModal.classList.add('is-active');
});

//mobile
if(burger) {
  const menu = document.querySelector('#navbar-menu');

  burger.addEventListener('click', ({ target }) => {
    target.classList.toggle('is-active');
    menu.classList.toggle('is-active');
  });
}

function closeModals() {
  modals.forEach(({ classList }) => {
    classList.remove('is-active');
  });
}