const modals = document.getElementsByClassName('modal')
const backgrounds = document.getElementsByClassName('modal-background')
const closeButtons = document.getElementsByClassName('modal-close')
const resources = document.getElementById('resources')
const contact = document.getElementById('contact')
const rModal = document.getElementById('resources-modal')
const cModal = document.getElementById('contact-modal')

function closeModals(){
  Array.from(modals).map(modal => {
    if (modal.classList.contains('is-active')){
      modal.classList.remove('is-active')
      return
    }
  })
}

if (closeButtons) {
  Array.from(closeButtons).map(button => {
    button.addEventListener('click', closeModals)
  })

  Array.from(backgrounds).map(bg => {
    bg.addEventListener('click', closeModals)
  })
}

resources.addEventListener('click', () => {
  rModal.classList.add('is-active')
})

contact.addEventListener('click', () => {
  cModal.classList.add('is-active')
})

//mobile
if(document.getElementById('burger')){
  const burger = document.getElementById('burger')
  const menu = document.getElementById('navbar-menu')

  burger.addEventListener('click', () => {
    if (menu.classList.contains('is-active')) {
      burger.classList.remove('is-active')
      menu.classList.remove('is-active')
      return
    }
    burger.classList.add('is-active')
    menu.classList.add('is-active')
  })
}
