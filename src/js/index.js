import {
  sliderOpen,
  sliderClose
} from './components/header'

import {
  ceoModal,
  ctoModal,
  cfoModal
} from './components/modal'

const help = document.querySelector('.help')
help.addEventListener("click", () => {
  console.log('help')
})


const pageType = document.querySelector('.PageType')

if (pageType) {
  ceoModal()
  ctoModal()
  cfoModal()

}

sliderOpen()
sliderClose()