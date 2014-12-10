<?php

// **** SETTINGS for CONTACT FORM ****
$yourEmail = 'youremail@youremailaddress.com'; // Your Email Address that messages will be sent to
$siteName = 'xofo - Under Construction <hello@emailofmysite.com>'; // For subject line of email to you - will display as 'YourSiteName - Message from Bill Bloggs'






// **** SETTINGS FOR SUBSCRIBE FORM ****
// Choose a method for the subscribed email addresses to be saved or sent. You can choose both options to be used at the same time, i.e. store in MySQL and email you.

// To save email addresses into MySQL Server, set the following variable to 'true' and add in your MySQL connection settings below. Settings this to 'false' will disable all usage of MySQL, such as checking if addresses is already subscribed.
$saveToMySQL = 'false';

// To receive an email notification containing subscribed address (i.e. Joe Bloggs has subscribed, email address: joe@bloggs.net), set the following variable to 'true' and add in your email notification settings below
$sendToEmail = 'true';
	
// To subscribe the given email address to your MailChimp list, set the following variable to 'true' and update your MailChimp settings belowl
$mailChimpList = 'false';


// MySQL Connection Settings
// Change these details with the correct information for your server

// Host name, domain or IP Address for MySQL Database location
$mysql_host = "localhost";

// Username for MySQL Access
$mysql_username = "root";

// Password for MySQL Access
$mysql_password = "root";

// Name of MySQL Database to use
$mysql_database = "databasename";

// Name of MySQL table where email information will be stored
$mysql_table = "tablename";


// Email Notification Settings
// Change these details so notification emails can be sent to you

// Email address to send notifications to
$myEmail = "youremail@youremailaddress.com";

// Where email is 'from', i.e. when you read email it will say From: (whatever you say). Add a name then email address you have setup inbetween the < and >
$emailFrom = "xofo - Under Construction <hello@emailofmysite.com>";


// MailChimp Settings
// Change these details according to information available from your MailChimp account - see documentation for more help

// Enter your MailChimp API Key - see http://admin.mailchimp.com/account/api
$apikey = 'API KEY HERE';

// List ID is required in order to decide which of your lists to subscribe users to. This can be found by loggin into your MailChimp account and by going to Lists --> List Tools, and List ID entry at bottom of page. See Documentation for more info
$listId = 'LIST ID HERE';



/* === Error / Success Messages === */
// Change these details with your own custom messages if you wish

// Error message if no email is entered
$emailempty_errormsg = "Please enter an address.";

// Error message if email is invalid
$invalidemail_errormsg = "That's not a valid email address.";

// Error message if another error occurred (such as could not insert data into database)
$insertfailure_errormsg = "Error. Try again.";

// Error message if email address already exists in the database
$emailexists_errormsg = "That address is already subscribed.";

// Success message once email address is successfully stored in database
$subscriptionsuccess_msg = "Thanks for subscribing! You'll hear from us soon.";

?>