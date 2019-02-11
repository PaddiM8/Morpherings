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

   // remove aria-hidden to mitigate any issues with screen readers
   // that have problems with aria-hidden=false
   loginEmail.removeAttribute("aria-hidden");
   loginPassword.removeAttribute("aria-hidden");

   // remove tabindex=-1 (which is necessary so keyboard focus can't navigate
   // to the visually hidden fields prior to the form fields expanding)
   loginEmail.removeAttribute('tabindex');
   loginPassword.removeAttribute('tabindex');

   // set focus to the email field so that keyboard users don't have to navigate
   // backwards in the DOM to get to the start of the login fields.
   loginEmail.focus();


   // Now that the login button has expanded the fields, change the
   // button's label to "submit" to indicate it no longer does the same
   // action as before.  Remove the onclick because it's already expanded,
   // and after the animation has occurred, set to type=submit so that
   // the button can be used to submit the form.
   loginButton.value = "Submit";
   loginButton.removeAttribute('onclick');

   setTimeout(function () {
   	loginButton.type = "submit";
   }, 100);
}
