class PasswordToggle {
    constructor(inputId, toggleShowId, toggleHideId) {
      this.passwordInput = document.getElementById(inputId);
      this.togglePasswordShow = document.querySelector(`[data-target=${toggleShowId}]`);
      this.togglePasswordHide = document.querySelector(`[data-target=${toggleHideId}]`);
  
      this.init();
    }
  
    init() {
      this.togglePasswordShow.addEventListener('click', () => {
        this.passwordInput.type = 'text';
        this.togglePasswordShow.classList.add('hide');
        this.togglePasswordHide.classList.remove('hide');
      });
  
      this.togglePasswordHide.addEventListener('click', () => {
        this.passwordInput.type = 'password';
        this.togglePasswordShow.classList.remove('hide');
        this.togglePasswordHide.classList.add('hide');
      });
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    new PasswordToggle('signupPassword', 'signupPasswordShow', 'signupPasswordHide');
  });
  