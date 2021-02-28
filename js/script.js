const btnWriteUs = document.querySelector('.contacts-button')
const closeModal = document.querySelector('.modal-close')
const modal = document.querySelector('.modal')

function toggleHidden(evt){
  evt.preventDefault()
  modal.classList.toggle('hidden')
}

btnWriteUs.addEventListener('click', toggleHidden)
closeModal.addEventListener('click',toggleHidden)
