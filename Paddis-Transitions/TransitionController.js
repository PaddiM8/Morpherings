$(document).ready(function() {
	$('.textbox').click(function() {
		clearTextBox(this);
	});
});

function startTransition(transitionName) {
	if (transitionName == "button-textbox-form") {
		startButtonTextBoxFormTransition();		
	}
}

function rewindTransition(transitionName) {
	if (transitionName == "button-textbox-form") {
		rewindButtonTextBoxFormTransition();		
	}
}

function startButtonTextBoxFormTransition() {
	
	$('.registerButton').addClass('animateRegisterButton'); //Add animation class to register button to start transition in CSS3
	$('.registerButton').html("Choose a Username..."); //Change button text to what the text box will have as placeholder

	setTimeout(function() { //325ms
		$('.textBox').show();
		$('.registerButton').hide();

		setTimeout(function() { //35ms
			
			setTimeout(function() { //50ms
				$('.passwordTextBox').addClass('animatePasswordTextBox');

				setTimeout(function() { //150ms
					$('.submitButton').show();
					$('.submitButton').addClass('animateSubmitButton');
				}, 150); //Submit button delay
			}, 50); //Password box delay
		}, 35); //Show textboxes 35ms after animation finishes, this method prevents delays
	}, 325); //Username box delay
}

function rewindButtonTextBoxFormTransition() {
	setTimeout(function() {
		$('.submitButton').addClass('animateSubmitButtonUpwards');

		setTimeout(function() {
			$('.submitButton').hide();
			$('.passwordTextBox').addClass('animatePasswordTextBoxUpwards');

			setTimeout(function() {
				$('.passwordTextBox').hide();
				$('.textBox').addClass('animateRegisterButtonToCircle');

				setTimeout(function() {
					var pos = $('.textBox').position();
					$('.spinner').show();
					$('.spinner').offset($('.textBox').offset());
					//$('.spinner').css('margin-left', '-45px').css('margin-top', '4px');

					setTimeout(function() {
						$('.spinner').hide();
						//$('.middle').html($('.middle').html() + "<br /><br />Account Created Successfully!<br />We sent an email to confirm your account.<br /><a href='#'>No email received?</a>");
					}, 1200);	
				}, 300);
			}, 200);
		}, 200);
	}, 10);
}

//Clear text box
function clearTextBox(thisTb) {
	if ($(thisTb).val() == "Choose a Username..." || $(thisTb).val() == "Password") {
		$(thisTb).val("");
		$(thisTb).css('text-align', 'left');
		$(thisTb).css('color', 'black');
	}
}