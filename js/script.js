const btnWriteUs = document.querySelector('.contacts-button')
const modal = document.querySelector('.modal')
const closeModal = modal.querySelector('.modal-close')
const nameInput = modal.querySelector('[name = name]')

btnWriteUs.addEventListener('click', function(evt){
  evt.preventDefault()
  modal.classList.remove('hidden')
  nameInput.focus()
})

closeModal.addEventListener('click', function () {
  modal.classList.add('hidden')
})
