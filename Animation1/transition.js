var emailbox = document.getElementById("email");
var passwordbox = document.getElementById("password");
var button = document.getElementById("submit");

function registerClick() {
   emailbox.className = "input email";
   emailbox.placeholder = "smith@example.org";
   emailbox.value = "";
   emailbox.readOnly = false;

   // Accessibility
   emailbox.setAttribute("role", "textbox");
   emailbox.type = "email";
   emailbox.setAttribute("aria-label", "enter email address");
   passwordbox.setAttribute("aria-hidden", "false");
   button.setAttribute("aria-hidden", "false");

   passwordbox.className += " password-anim";
   button.className += " button-anim";
}

function submitForm() {
   passwordbox.className += " password-anim-reverse";
   button.className += " button-anim-reverse";
   emailbox.className += " email-revert";
   emailbox.placeholder = "";
   emailbox.value = "";

   var loadingCircles = document.getElementById("loadingCircles");
   setTimeout(function() {
      loadingCircles.style.display = "block"
   }, 620)

   setTimeout(function() {
      emailbox.value = "Register";

      var registerForm = document.getElementById("registerForm");
      registerForm.innerHTML = "Account created. Check your email."
      registerForm.setAttribute("aria-live", "assertive");
      registerForm.fontAlign = "center";
   }, 2620);
}
