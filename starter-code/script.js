'use strict';
// Get the form element
const form = document.getElementById('formId');

// Get the input field elements
let inputFieldName = document.getElementById('name');
let inputFieldEmail = document.getElementById('email');
let inputFieldMessage = document.getElementById('message');
let submitButton = document.getElementById('submit-button');
let allInputWhite = document.querySelector('.all-input-border-bottom');

// Get all buttons
const buttons = document.querySelectorAll('.button_contact-me');

// Get the error message and icon elements
const errorIcon = document.querySelector('.form_email-error');
const errorMessage = document.querySelector('.form_email-error-message');

// Form submission function
form.addEventListener('submit', function (e) {
  e.preventDefault(); // prevent form submission

  let isFormValid = true;

  // check if fields are empty
  const validateField = (inputField, errorMessage, errorIcon) => {
    if (!inputField.value) {
      inputField.classList.remove('all-input-border-bottom');
      inputField.classList.add('invalid');
      if (errorMessage) {
        errorMessage.classList.remove('hidden');
      }
      if (errorIcon) {
        errorIcon.classList.remove('hidden');
      }
      isFormValid = false;
    } else {
      inputField.classList.remove('invalid');
      if (errorMessage) {
        errorMessage.classList.add('hidden');
      }
      if (errorIcon) {
        errorIcon.classList.add('hidden');
      }
    }
  };

  validateField(inputFieldName);
  validateField(inputFieldEmail, errorMessage, errorIcon);
  validateField(inputFieldMessage);

  // check if name is valid
  if (isNaN(inputFieldName.value) && inputFieldName.value.length >= 5) {
    inputFieldName.classList.remove('invalid');
    inputFieldName.classList.add('valid');
  } else {
    inputFieldName.classList.remove('valid');
    inputFieldName.classList.add('invalid');
  }

  // check if the email is valid
  if (!validateEmail(inputFieldEmail.value)) {
    inputFieldEmail.classList.add('invalid');
    errorIcon.classList.remove('hidden');
    errorMessage.classList.remove('hidden');
    isFormValid = false;
  } else {
    inputFieldEmail.classList.remove('invalid');
    inputFieldEmail.classList.add('valid');
    errorIcon.classList.add('hidden');
    errorMessage.classList.add('hidden');
  }

  // check if message is valid
  if (inputFieldMessage.value.length >= 5) {
    inputFieldMessage.classList.remove('invalid');
    inputFieldMessage.classList.add('valid');
  } else {
    inputFieldMessage.classList.remove('valid');
    inputFieldMessage.classList.add('invalid');
  }

  // check if form is valid, if yes, submit form
  if (isFormValid) {
    form.submit();
  }
});

// Email validation function
function validateEmail(email) {
  // using  regex that match most valid email addresses
  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-zA-Z0-9-]*[a-zA-Z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
  return regex.test(email);
}

// Smooth scrolling function
const scrollButton = function (button) {
  button.addEventListener('click', function () {
    const section = document.getElementById('my-section');
    section.scrollIntoView({ behavior: 'smooth' });
  });
};

for (let i = 0; i < buttons.length; i++) {
  scrollButton(buttons[i]);
}
/*/
const heroH1 = document.querySelector(".hero__h1");
const newHeroH1 = `
<h1 class="hero__h1">
  Nice to <br />meet you! I'm
  <span class="hero__presentation-text">Adam Keyes.</span>
</h1> 
`;/*
/*
window.addEventListener("resize", function () {
  if (window.innerWidth < 769) {
    heroH1.innerHTML = newHeroH1;
  }
}); */
