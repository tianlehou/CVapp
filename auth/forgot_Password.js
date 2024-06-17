import { sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { auth } from "../environments/firebase-auth.js"

let Email = document.getElementById('email');
let RecoveryPassword = document.getElementById('recoveryPassword');

const ForgotPassword = () => {
    sendPasswordResetEmail(auth, Email.value)
    .then(() => {
        alert("A Password Link has benn sent to your email");
    })
    .catch((error) => {
        console.log(error.code);
        console.log(error.message);
    })
}

RecoveryPassword.addEventListener('click', ForgotPassword);
