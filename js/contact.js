$(document).ready(function() {
	"use strict";
	function validateEmail(email) { // email validation
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		if (!emailReg.test(email)) {
			return false;
		} else {
			return true;
		}
	}
	$('#contact-us').submit(function(e) {
		e.preventDefault();
		if ($(this).attr('data-status') != 'on') {
			var form = $(this);
			var postdata = form.serialize();
			var url = form.attr('action');
			var result = form.find('.alert');
			var success = form.find('.alert-success');
			var error = form.find('.alert-danger');
			var wait = $('.contact-loading');
			var hasError = 0;
			result.hide();
			form.removeClass('hasError');
			var email = $(this).find('.email').val();
			var name = $(this).find('.name').val();
			var message = $(this).find('.message').val();
			if (name == "" || message == "" || email == "") {
				hasError = 1;
			}
			if (!validateEmail(email)) {
				hasError = 1;
			}
			if (hasError == 1) {
				error.show();
				form.addClass('hasError');
			} else {
				wait.show();
				$.post(url, postdata, function(json) {
					json = JSON.parse(json);
					wait.hide();
					if (json.hasError == 0) {
						success.show();
					} else {
						error.show();
					}
				});
			}
		}
	});
});