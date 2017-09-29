# Paddis-Transitions
Collection of smooth CSS3 transitions (controlled by jQuery, transitions are CSS)

## Getting Started
I tried to make it relatively simple to get started. There's a few things you'll need to have. There's an example provided.

If you want the UI I designed, add the CSS file "Transitions-with-UI.css", otherwise, add "Transitions.css". Only add *one* of them.

![](https://media.giphy.com/media/xT9IgDbKxTG8vb3u7u/giphy.gif)

### In head
```html
<head>
  <link type="text/css" rel="stylesheet" href="Paddis-Transitions/Transitions-with-UI.css"> <!-- Has to be before Config.css -->
  <link type="text/css" rel="stylesheet" href="Paddis-Transitions/Config.css">
  <script src="jquery.min.js"></script>
  <script src="Paddis-Transitions/TransitionController.js"></script>
</head>
```

Now this may seems like a lot, but to make it simple for you to configure, I split the most needed CSS configurations to another
file (if you aren't using the UI). You see the first CSS file, it says "with-UI" at the end, remove that and you'll get a barebones
CSS file, for if you make the UI yourself. 

The *Config.css* is filled with comments to help you get started. 

### In body
```html
  <div id="buttonArea">
    <button class="button registerButton">Register</button>
    <div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>

    <input type="text" class="button textBox usernameTextBox" value="Choose a Username..." /><br />
    <input type="password" class="button textBox passwordTextBox" value="Password" /><br />
    <button class="button submitButton">Create Account</button>
  </div>
```

This is the typical setup for the register. If you go with the UI I provide, it's already set up! 

## Needed classes
**Register Button:** button, registerButton<br />
**Username Text Field:** button, textBox, usernameTextBox<br />
**Password Text Field:** button, textBox, passwordTextBox<br />
**Submit Button:** button, submitButton<br />
**Loading Animation:** spinner<br />

All these elements should be positioned at the same place.

## The jQuery

The jQuery part should be straight forward. You don't need to write much of it at all! Just call a function.

```javascript
$(document).ready(function() {
  $('.registerButton').click(function() {
    startTransition('button-textbox-form');
  });
});
```

This is all what's needed for the first transition. Call the "startTransition" function once the register button is clicked.
The register form transition is called 'button-textbox-form', as it goes from a button, to a textbox, to a form. 

To add a transition for the submit button, simply add this:

```javascript
$('.submitButton').click(function() {
  rewindTransition('button-textbox-form');
});
```

**startTransition** starts the transition you tell it to start. 
**rewindTransition** does a transition backwards, or nearly backwards.

### Transition Names
*button-textbox-form* - Typical register form transition(but could be used for other things), transitions a *button* in to a *text field*,
then another *text field* slides under, and the *submit button* comes at the end. Rewinded, everything go back upwards and turned in to a
loading circle.
