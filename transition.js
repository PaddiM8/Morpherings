var emailbox = document.getElementById("email");
var passwordbox = document.getElementById("password");
var button = document.getElementById("submit");

function registerClick() {
   emailbox.className = "input email";
   emailbox.placeholder = "smith@example.org";
   emailbox.value = "";
   emailbox.readOnly = false;

   passwordbox.className += " password-anim";
   button.className += " button-anim";
}

function submitForm() {
   passwordbox.className += " password-anim-reverse";
   button.className += " button-anim-reverse";
   emailbox.className += " email-revert";
   emailbox.placeholder = "";
   emailbox.value = "";

   setTimeout(function() {
      emailbox.value = "Register";

      var registerForm = document.getElementById("registerForm");
      registerForm.innerHTML = "Account created. Check your email."
      registerForm.fontAlign = "center";
   }, 1525)
}
