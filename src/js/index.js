import {
  sliderOpen,
  sliderClose
} from './components/header'

import {
  ceoModal,
  ctoModal,
  cfoModal
} from './components/modal'


const pageType = document.querySelector('.PageType')
if (pageType) {
  ceoModal()
  ctoModal()
  cfoModal()

}

sliderOpen()
sliderClose()