<?php

include('settings.php');

// Code (no need to edit beyond here)
	if(isset($_GET['action'])) {
		if($_GET['action'] == 'contact') {
			if(isset($_POST['submitted'])) {
				$hasError = false;
				
				if(trim($_POST['contactName']) === '') { 
					$hasError = true;
				} else {
					$name = trim($_POST['contactName']);
				}
			
				if(trim($_POST['email']) === '')  {
					$hasError = true;
				} else if (!preg_match("/^[[:alnum:]][a-z0-9_.-]*@[a-z0-9.-]+\.[a-z]{2,4}$/i", trim($_POST['email']))) {
					$hasError = true;
				} else {
					$email = trim($_POST['email']);
				}
			
				if(trim($_POST['comments']) === '') {
					$hasError = true;
				} else {
					if(function_exists('stripslashes')) {
						$comments = stripslashes(trim($_POST['comments']));
					} else {
					$comments = trim($_POST['comments']);
					}
				}
			
				if(!$hasError) {
			
					$emailTo = $yourEmail;
					$subject = 'Message from '. $name;
					$body = "Name: $name \n\nEmail: $email \n\nMessage: $comments";
					$headers = 'From: '. $email .'\r\n' . 'Reply-To: ' . $email;
			
					mail($emailTo, $subject, $body, $headers);
			
					$emailSent = true;

				}
				
				$result_array = array(
							'hasError' => $hasError
							);
							
				echo json_encode($result_array);
			}
		}
	}
?>