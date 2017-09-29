$(document).ready(function() {
	$('.registerButton').click(function() {
		startTransition('button-textbox-form');
	});

	$('.submitButton').click(function() {
		rewindTransition('button-textbox-form');
	});
});