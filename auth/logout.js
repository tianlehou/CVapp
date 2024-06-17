import { auth } from "../environments/firebase-auth.js";
import { signOut } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

const logoutButtons = document.querySelectorAll("#logout, logoutBtn");

logoutButtons.forEach(button => {
    logout.addEventListener("click", async () => {
        try {
            await signOut(auth);
            console.log("user signed out");
            alert("Ha cerrado sesión exitosamente");
            window.location.href = "../index.html";
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
            alert("Error al cerrar sesión");
        }
    });
});