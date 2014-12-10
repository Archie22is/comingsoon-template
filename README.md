Xofo - Responsive Coming Soon Template. Demo: http://trijon.com/project/demo/xofo/

Xofo is a fully responsive, clean and minimal one page scrolling coming soon template.

Color is a big focus in Xofo – so it gives an one click solution to set up beautiful color combinations. All you have to do is type in a HEX color code, and Xofo does the rest for you.

Xofo is very easy to set up, and includes ‘Welcome’, countdown, email subscription, about us and contact sections – so that visitors can get to know more about your company from your under construction page.

Powered by CSS3, HTML5 and jQuery (all valid), Xofo has an animated background slideshow, YouTube video background, jQuery countdown script, working AJAX email subscription form (MailChimp compatible), working AJAX contact form, and uses Google Fonts, Bootstrap and Font Awesome.

And it's totally free :) I hope, you'll enjoy
===================

This template is extremely easy to setup. All settings for color, background, countdown etc can be found at the bottom of every HTML file.

-----------------------------------------------------------------
<script>
	// SETTINGS for XOFO Coming Soon Template
	// Check documentation for guidline
	// ==== color SCHEME ====
	var color = "#169AA0";
	var bgOpacityLevel = "0.80";
 
 
	// ==== SLIDESHOW BACKGROUND ====
	var slideshowBackground = 'on';
 
	var slideshowBackgroundURLS = [
		"images/background1.jpg",
		"images/background2.jpg",
		"images/background3.jpg",
	];
 
	var slideshowFade = 1000;
	var slideshowDuration = 4000;
 
			
	// ==== VIDEO BACKGROUND ====
	var videoBackground = 'off';
	var videoBackgroundURL = 'PASTE-YOUTUBE-URL-HERE';
	var videoMuted = true;
 
 
	// ==== COUNTDOWN ====
	var countdownDate = "01 January 2015 00:00:00";
</script>
-----------------------------------------------------------------

#Color Scheme

Type in the HEX Code for the color you want to use as the background of the site. You can also adjust the opacity of the color overlay - so you have complete control over the color and strength of the overlay over the background slideshow and video.

Remember to include the Hex (#) symbol, e.g. #169AA0
Darker colors work best - avoid light / pale colors and Set opacity of color overlay, between 0 and 1

Example:

// ==== color SCHEME ====
var color = "#169AA0";
var bgOpacityLevel = "0.80";
-----------------------------------------------------------------

# Slideshow

In the settings look for the slideshow section of variables - the first section you see after color. Even if you want to use the video background feature, it is still highly advisable to set up an image slideshow background (even if it only has one image) because the video background doesn't work in all browsers / devices, so it needs the image slideshow to fall back on.

You'll see some variables that look like this:

// ==== SLIDESHOW BACKGROUND ====
var slideshowBackground = 'on';
 
var slideshowBackgroundURLS = [
	"images/background1.jpg",
	"images/background2.jpg",
	"images/background3.jpg",
];
 
var slideshowFade = 1000;
var slideshowDuration = 4000;
To change the images, edit the URL paths to your image files. To add more images, add more lines of "URL-TO-IMAGE.jpg", - and remove these lines to have fewer images.

The other two variables, slideshowFade and slideshowDuration are both set in milliseconds. The 'fade' controls the amount of time the fade transition takes, whereas the 'duration' sets the amount of time between animations - i.e. the time you see each image for. Now the slideshow background is set up!
-----------------------------------------------------------------

# Video Background

This time look for the video background section of variables. As mentioned earlier, it's important to know that should you use the video background feature, it won't work in some older browsers and can't work on mobile devices due to restrictions from YouTube and restrictions placed on content by the devices themselves. If the video background is enabled, mobile users will instead see the image slideshow background.

// ==== VIDEO BACKGROUND ====
var videoBackground = 'on';
var videoBackgroundURL = 'https://www.youtube.com/watch?v=l_tHTmd5pgk';
var videoMuted = true;
-----------------------------------------------------------------

# Countdown

In the end, you will find the Countdown section of variables. Only one variable is required to set up the countdown, and it is responsible for setting the date and time that the script will countdown to.

// ==== COUNTDOWN ====
var countdownDate = "01 January 2015 00:00:00";
Enter the date in the format DD Month YYYY, and the time in the format HH:MM:SS (in 24 hour format, for example 23:00:00).

If the date you enter is in the past, you'll see a constant loading screen and the page will not display. The countdown only works to dates in the future.
-----------------------------------------------------------------

# Email Subscription

All of the settings needed to set up the email subscription form are in the php/settings.php file. Open it up. You'll see a page of variables and code comments to help explain everything. For the email subscription settings, look for the section under the comment // **** SETTINGS FOR SUBSCRIBE FORM ****.

Example:

// **** SETTINGS FOR SUBSCRIBE FORM ****
 
$saveToMySQL = 'true';
$sendToEmail = 'false';
$mailChimpList = 'false';'

**Saving to MySQL: a database (signup-database.sql) is already created which is located in php/
Import it to your database then fill in your table names etc. and connection details in the following variables in php/settings.php:

// MySQL Connection Settings
 
$mysql_host = "localhost";
$mysql_username = "root";
$mysql_password = "root";
$mysql_database = "databasename";
$mysql_table = "tablename";

**Sending to Email: To send email addresses to your email, make sure $sendToEmail variable is set to 'true', then edit the following variables:

// Email Notification Settings
 
$myEmail = "youremail@youremailaddress.com";
$emailFrom = "Xofo - Under Construction ";

$myEmail is the email address of yours which subscription notifications will be sent to. $emailFrom sets the name of the 'sender' - i.e. in your email client it will be displayed as From: xofo - Under Construction (hello@emailofmysite.com) (from the example variables above).

**Setting up MailChimp

Either as an alternative or as well as using email notifications or MySQL as explained above, you can also use MailChimp integration. This means that when a user subscribes, their email address is automatically added to your List of subscribers on MailChimp, so all of the addresses are there ready and waiting for you to contact them. Using MailChimp helps to simplify the whole process of subscribing, managing and emailing your users.

If you want to enable MailChimp integration for the template, you'll need to set the $mailChimpList variable to 'true' in php/settings.php.

Copy that ID code, and paste it into the variables in php/settings.php, where it says LIST ID HERE.

Then simply copy the API Key from your mainChimp account, and paste it into the space API KEY HERE in php/settings.php, like this:

// MailChimp Settings
 
$apikey = 'API KEY HERE';
$listId = 'LIST ID HERE';
-----------------------------------------------------------------

# Contact Form

To set up the contact form, you need to supply two pieces of information. Most importantly is your email address, which is where any messages from the contact form are sent to. Secondly, you can provide the name of your site which will be seen in the subject of the email to you and also to help prevent email clients from thinking the message is spam.

To set up the contact form, open up php/settings.php and look for the following section of two variables, near the top of the file:

// **** SETTINGS for CONTACT FORM ****
 
$yourEmail = 'youremail@youremailaddress.com'; // Your Email Address that messages will be sent to
$siteName = 'xofo - Under Construction '; // For subject line of email to you - will display as 'YourSiteName - Message from Bill Bloggs'

To enter your email address, type it inbetween the speech marks (' ') in the variable $yourEmail and do the same for the next variable, $siteName. This is essentially helps email clients to identify who the email is from (so less likely to be marked as spam), and makes it clearer for you aswell.

All settings must be in speech marks, like this: ' ... '

