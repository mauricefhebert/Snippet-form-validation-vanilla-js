const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const passwordConfirmation = document.querySelector('#password-confirmation');
let valid = false;

form.addEventListener('submit', (e) => {
  //if (!validateInputs())
  e.preventDefault();
  validateInputs();
});

const setSuccess = (element, message) => {
  const inputControl = element.parentElement;
  const successDisplay = inputControl.querySelector('.form-feedback');
  const iconDisplay = inputControl.querySelector('.form-feedback-icon');

  iconDisplay.textContent = '✔';
  successDisplay.textContent = message;
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
  valid = true;
};

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.form-feedback');
  const iconDisplay = inputControl.querySelector('.form-feedback-icon');

  iconDisplay.textContent = '✖';
  errorDisplay.textContent = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
  valid = false;
};

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const passwordConfirmationValue = passwordConfirmation.value.trim();

  usernameValue === '' ? setError(username, 'Username is required') : setSuccess(username, 'Excellent!');

  if (emailValue === '') {
    setError(email, 'Email is required');
  } else if (!isValidEmail(emailValue)) {
    setError(email, 'Provide a valid email address');
  } else {
    setSuccess(email, 'Excellent!');
  }

  if (passwordValue === '') {
    setError(password, 'Password is required');
  } else if (passwordValue.length < 8) {
    setError(password, 'Password must be at least 8 character.');
  } else {
    setSuccess(password, 'Excellent!');
  }

  if (passwordConfirmationValue === '') {
    setError(passwordConfirmation, 'Please confirm your password');
  } else if (passwordConfirmationValue !== passwordValue) {
    setError(passwordConfirmation, "Passwords doesn't match");
  } else {
    setSuccess(passwordConfirmation, 'Excellent!');
  }
  return valid;
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
