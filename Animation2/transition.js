var loginEmail = document.getElementById("loginEmail");
var loginPassword = document.getElementById("loginPassword");
var loginButton = document.getElementById("loginButton");

function showLoginForm() {
   loginEmail.className = "input loginInput";
   loginPassword.className = "input loginInput right";

   loginEmail.value = "";
   loginPassword.value = "";

   loginButton.className += " loginButton-anim";
   loginButton.blur();
}
