export const ceoModal = () => {
  const ceo = document.querySelector('.ceo__modal--open')
  const modal = document.querySelector('.modal__ceo')
  const modalClose = document.querySelector('.ceo__modal--close')
  const modalExit = document.querySelector('.exit__modal--ceo')

  ceo.addEventListener("click", () => {
    modal.style.display = 'grid'
  })
  modalClose.addEventListener("click", () => {
    modal.style.display = 'none'
  })
  modalExit.addEventListener("click", () => {
    modal.style.display = 'none'
  })
}

export const ctoModal = () => {
  const cto = document.querySelector('.cto__modal--open')
  const modal = document.querySelector('.modal__cto')
  const modalClose = document.querySelector('.cto__modal--close')
  const modalExit = document.querySelector('.exit__modal--cto')

  cto.addEventListener("click", () => {
    modal.style.display = 'grid'
  })
  modalClose.addEventListener("click", () => {
    modal.style.display = 'none'
  })
  modalExit.addEventListener("click", () => {
    modal.style.display = 'none'
  })
}

export const cfoModal = () => {
  const cfo = document.querySelector('.cfo__modal--open')
  const modal = document.querySelector('.modal__cfo')
  const modalClose = document.querySelector('.cfo__modal--close')
  const modalExit = document.querySelector('.exit__modal--cfo')

  cfo.addEventListener("click", () => {
    modal.style.display = 'grid'
  })
  modalClose.addEventListener("click", () => {
    modal.style.display = 'none'
  })
  modalExit.addEventListener("click", () => {
    modal.style.display = 'none'
  })
}