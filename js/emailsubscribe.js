$(document).ready(function() {
	"use strict";
	$('#newsletter-signup').submit(function() {
		//check the form is not currently submitting
		if ($(this).data('formstatus') !== 'submitting') {
			//setup variables
			var form = $(this),
				formData = form.serialize(),
				formUrl = form.attr('action'),
				formMethod = form.attr('method'),
				responseMsg = $('#signup-response');
			//add status data to form
			form.data('formstatus', 'submitting');
			//show response message - waiting
			responseMsg.hide()
				.text('')
				.fadeIn(200);
			$('#signup-button').html('<i class="fa fa-life-ring fa-spin"></i>');
			//send data to server for validation
			$.ajax({
				url: formUrl,
				type: formMethod,
				data: formData,
				success: function(data) {
					//setup variables
					var responseData = jQuery.parseJSON(data),
						klass = '';
					//response conditional
					switch (responseData.status) {
						case 'error':
							klass = 'signup-error';
							$('#signup-button').addClass('signup-button-error');
							$('#signup-button').html('<i class="fa fa-times"></i>');
							break;
						case 'success':
							klass = 'signup-success';
							$('#signup-button').addClass('signup-button-success');
							$('#signup-button').html('<i class="fa fa-check"></i>');
							break;
					}
					//show reponse message
					responseMsg.fadeOut(200, function() {
						$(this).addClass(klass)
							.text(responseData.returnmessage)
							.fadeIn(200, function() {
								//set timeout to hide response message
								setTimeout(function() {
									if (klass == 'signup-success') {} else {
										responseMsg.fadeOut(200, function() {
											$(this).removeClass(klass);
											$('#signup-button').removeClass('signup-button-error');
											$('#signup-button').html('<i class="fa fa-check"></i>');
											form.data('formstatus', 'idle');
										});
									}
								}, 3000)
							});
					});
				}
			});
		}
		//prevent form from submitting
		return false;
	});
});