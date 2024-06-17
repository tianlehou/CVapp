// Show/Hide signIn Password
const passwordInput = document.getElementById('signInPassword');
const togglePasswordShow = document.getElementById('togglePasswordShow');
const togglePasswordHide = document.getElementById('togglePasswordHide');

togglePasswordShow.addEventListener('click', function() {
  passwordInput.type = 'text';
  togglePasswordShow.classList.add('hide');
  togglePasswordHide.classList.remove('hide');
});

togglePasswordHide.addEventListener('click', function() {
  passwordInput.type = 'password';
  togglePasswordShow.classList.remove('hide');
  togglePasswordHide.classList.add('hide');
});

// Show/Hide signup Password
const signupPasswordInput = document.getElementById('signupPassword');
const signupTogglePasswordShow = document.getElementById('signupTogglePasswordShow');
const signupTogglePasswordHide = document.getElementById('signupTogglePasswordHide');

signupTogglePasswordShow.addEventListener('click', function() {
  signupPasswordInput.type = 'text';
  signupTogglePasswordShow.classList.add('hide');
  signupTogglePasswordHide.classList.remove('hide');
});

signupTogglePasswordHide.addEventListener('click', function() {
  signupPasswordInput.type = 'password';
  signupTogglePasswordShow.classList.remove('hide');
  signupTogglePasswordHide.classList.add('hide');
});