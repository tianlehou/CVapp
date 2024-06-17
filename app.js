import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { auth } from "./environments/firebase-auth.js";
import { loginCheck } from "./auth/login_Check.js";

// Login
import "./auth/login_Google.js";
// import './auth/login_Check.js';
// import "./auth/logout.js";
import './auth/signin_Form.js';
import "./auth/signup_Form.js";
import "./auth/forgot_Password.js";

// Show / Hide Password
import "./module/showHidePassword.js";
// Spinner Animation
// import "./module/animation/spinner/spinner.js"

onAuthStateChanged(auth, async (user) => {
    if (user) {
        loginCheck(user);
    } else {
    }
});
