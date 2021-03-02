const btnWriteUs = document.querySelector(".contacts-button");
const modal = document.querySelector(".modal");
const closeModal = modal.querySelector(".modal-close");
const form = modal.querySelector(".modal-form");
const nameInput = form.querySelector("[name = name]");
const emailInput = form.querySelector("[name = email]");
let isStorageSupport = true;
const storage = localStorage.getItem("name");

try {
  storage = localStorage.getItem("name");
} catch (error) {
  isStorageSupport = false;
}

btnWriteUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("hidden");
  if (storage) {
    nameInput.value = storage;
  }
  if (nameInput.value == storage) {
    emailInput.focus();
  } else {
    nameInput.focus();
  }
});

closeModal.addEventListener("click", function () {
  modal.classList.add("hidden");
  modal.classList.remove("modal-error");
});

function addingIsEmpty(input) {
  input.classList.add("is-empty");
}

function removeIsEmpty(input) {
  input.classList.remove("is-empty");
}

form.addEventListener("submit", function (evt) {
  if (!nameInput.value || !emailInput.value) {
    evt.preventDefault();
    modal.classList.toggle("modal-error");
    if (!nameInput.value) {
      addingIsEmpty(nameInput);
    } else {
      removeIsEmpty(nameInput);
    }
    if (!emailInput.value) {
      addingIsEmpty(emailInput);
    } else {
      removeIsEmpty(emailInput);
    }
  } else {
    localStorage.setItem("name", nameInput.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode == 27) {
    if (!modal.classList.contains("hidden")) {
      modal.classList.add("hidden");
      modal.classList.add("modal-error");
    }
  }
});
