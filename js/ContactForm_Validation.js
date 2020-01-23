/*
** This script validates the content for a form based on specific rules
** for each item in the form 
*/

window.onload = init;

function init() {
			// when page loads attach event to validate form

			var formsubmit = document.getElementById("submit");
			if (formsubmit) {
						formsubmit.onclick = checkForm;
							}							
			}
			
function checkForm() {
			// test the fields in the form
			
			// FIRSTNAME: Required, at two letters long
			var firstname = document.getElementById('firstname').value;
			var firstname_msg = document.getElementById('firstname_msg');
			var valid = true;
	
			if (firstname.length < 2) {
					firstname_msg.innerHTML = "First name should be at least 2 letter in length";
					firstname_msg.className = 'error';
					valid = false;
					} 
			else {
					firstname_msg.innerHTML = "";
					firstname_msg.className = '';
					}
					
					
// FAMILY NAME field Required, at least two letters long
		
		var familyname = document.getElementById('familyname').value;
		var familyname_msg = document.getElementById('familyname_msg');

			if (familyname.length < 2)
				{
					familyname_msg.innerHTML = "Family name should be at least 2 letters in length";
					familyname_msg.className = 'error';
					valid = false;
					} 
			else {
					familyname_msg.innerHTML = "";
					familyname_msg.className = '';
					}
			
// EMAIL: is required, and must be valid email address
		var email = document.getElementById('email').value;
		var email_msg = document.getElementById('email_msg');

		// regular expression for validation
		var emailRegExp = /^(\w+@[a-z\d]+?([a-z-\d_\.]*?)\.[a-z]{2,6})$/i;

			if (email == "" && !emailRegExp.test(email))
			{
					email_msg.innerHTML = "Must be a valid email address.";
					email_msg.className = 'error';
					valid = false;
					}
			else {
					email_msg.innerHTML = "";
					email_msg.className = '';
					}
				

// Feedback: must pick one of the valid choices.		

		var service = document.getElementById('service').value;
		var sv_msg = document.getElementById('sv_msg');
					if (service == -1) {
					sv_msg.innerHTML = "Please select the party size.";
					sv_msg.className = 'error';
					valid = false;
					} else {
					sv_msg.innerHTML = "";
					sv_msg.className = '';
					}
					
// TANDCAGREE: must be checked

		var tandcagree = document.getElementById('tandcagree').checked;
		var tandcagree_msg = document.getElementById('tandcagree_msg');

				if (!tandcagree) {
						tandcagree_msg.innerHTML = "You must agree to the terms and conditions to continue.";
						tandcagree_msg.className = 'error';
						valid = false;
						}
				else {
						tandcagree_msg.innerHTML = "";
						tandcagree_msg.className = '';
						}

return valid;
}
				
		

			