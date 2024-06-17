import { auth } from "../environments/firebase-auth.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

onAuthStateChanged(auth, (user) => {
  if (!user) {
    // Si no hay usuario autenticado, redirige a la página de inicio de sesión
    window.location.href = "../index.html";
  }
});

// Prevenir regresar a index.html
history.pushState(null, null, location.href);
window.onpopstate = function () {
  history.go(1);
};