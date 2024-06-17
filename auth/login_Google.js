import { auth } from "../environments/firebase-auth.js";
import { signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

const provider = new GoogleAuthProvider();

// Google Login
const googleLogin = document.getElementById("google-login-btn");
googleLogin.addEventListener("click", function () {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      console.log(user);
      window.location.href = "pages/home.html";
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
})
