export const ceoModal = () => {
  const ceo = document.querySelector('.ceo__modal--open')
  const modal = document.querySelector('.modal__ceo')
  const modalClose = document.querySelector('.ceo__modal--close')
  ceo.addEventListener("click", () => {
    modal.style.display = 'grid'
  })
  modalClose.addEventListener("click", () => {
    modal.style.display = 'none'
  })
}