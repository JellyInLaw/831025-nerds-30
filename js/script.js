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
      modal.classList.remove("modal-error");
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
