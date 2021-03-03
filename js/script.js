const btnWriteUs = document.querySelector(".contacts-button");
const modal = document.querySelector(".modal");
const closeModal = modal.querySelector(".modal-close");
const form = modal.querySelector(".modal-form");
const nameInput = form.querySelector("[name = name]");
const emailInput = form.querySelector("[name = email]");
const textarea = form.querySelector(".textarea");
let isStorageSupport = true;
const storageName = localStorage.getItem("name");
const storageEmail = localStorage.getItem("email");

try {
  const storage = localStorage.getItem("name");
} catch (error) {
  isStorageSupport = false;
}

btnWriteUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("hidden");

  if (isStorageSupport) {
    nameInput.value = localStorage.getItem("name");
    emailInput.value = localStorage.getItem("email");
    textarea.focus();

    if (!textarea.value) {
      textarea.focus();
    }

    if (!emailInput.value) {
      emailInput.focus();
    }

    if (!nameInput.value) {
      nameInput.focus();
    }
  }
});

function addingIsEmpty(input) {
  input.classList.add("is-empty");
}

function removeIsEmpty(input) {
  input.classList.remove("is-empty");
}

closeModal.addEventListener("click", function () {
  modal.classList.add("hidden");
  modal.classList.remove("modal-error");

  removeIsEmpty(nameInput);
  removeIsEmpty(emailInput);
});

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
    localStorage.setItem("email", emailInput.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode == 27) {
    if (!modal.classList.contains("hidden")) {
      modal.classList.add("hidden");
      modal.classList.remove("modal-error");

      removeIsEmpty(nameInput);
      removeIsEmpty(emailInput);
    }
  }
});

const slides = document.querySelectorAll(".slide");
const controls = document.querySelectorAll(".slider-control");

controls[0].classList.add("current-slider-control");

for (let index = 0; index < controls.length; index++) {
  const control = controls[index];
  control.addEventListener("click", function () {
    let sliderControl = document.querySelector(".current-slider-control");
    let currentSlide = document.querySelector(".current-slide");

    sliderControl.classList.remove("current-slider-control");
    currentSlide.classList.remove("current-slide");

    control.classList.add("current-slider-control");
    slides[index].classList.add("current-slide");
  });
}
