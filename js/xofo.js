/*------------------------------------------------------------------
[Main Javascript]

Template Name: Xofo - Responsive Coming Soon Template
Description: Xofo - Responsive Coming Soon Template
Author: Emran
Behance URL: http://www.behance.net/emran251
Facebook URL: http://fb.com/emran251
Version: 1.0.0
Tags: responsive, html5 template, one page, coming soon, css3, mailchimp, corporate, bootstrap
-------------------------------------------------------------------*/
(function($) {
	"use strict";
	$(document).ready(function() {
	
		/* Helper function  */
		function hexToRgb(hex) {
			var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
			hex = hex.replace(shorthandRegex, function(m, r, g, b) {
				return r + r + g + g + b + b;
			});
			var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
			return result ? {
				r: parseInt(result[1], 16),
				g: parseInt(result[2], 16),
				b: parseInt(result[3], 16)
			} : null;
		}
		

		/* Create dynamic CSS for selected color code */
		var rgbacolor = "rgba(" + hexToRgb(color).r + "," + hexToRgb(color).g + "," + hexToRgb(color).b + "," + bgOpacityLevel + ")";
		var rgbaLightcolor = "rgba(" + hexToRgb(color).r + "," + hexToRgb(color).g + "," + hexToRgb(color).b + ",0.15)";
		$('.overlay').css('background-color', rgbacolor);
		$('.countdown-circle').css('background-color', rgbaLightcolor);
		$('.countdown-circle h2').css('color', color);
		$('.about-box span').css('color', color);
		$('.contact-box.right ul li i.fa').css('color', color);
		$('.contact-form-button').css('border', '1px solid ' + color);
		$('.contact-form-button').css('color', color);
		$('#contact-success').css('color', color);
		var div = $("<div />", {
			id: 'xofoCSS',
			html: '<style> ::selection, { background-color: ' + rgbacolor + '; color: white; } ::-moz-selection { background-color: ' + rgbacolor + '; color: white; } .backstretch:after { background-color: ' + rgbacolor + '; } .YTPOverlay { background-color: ' + rgbacolor + '; } .coloured-h2 { color: ' + color + ' !important; } .preloader { background-color: ' + color + '; } .about-box-logo { border-color: ' + color + '; } .about-box:hover .about-box-logo{ background:' + color + '; } a { color: ' + color + '; } a:hover { border-bottom-color: ' + color + '; color: ' + color + '; } .subscribe .signup-button { color: ' + color + '; } .subscribe .signup-button:hover { background-color: ' + color + '; } h2.coloured-h2:after{ background-color: ' + color + '; } .submit-btn:hover { background-color: ' + color + '; color:#fff; } .section.footersection a.footer-social:hover { color: ' + color + ' !important; } </style>'
		}).appendTo("body");
		
		
		/* Scroll to down button */
		$(".scroll").click(function(event) {
			event.preventDefault();
			//calculate destination place
			var dest = 0;
			if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
				dest = $(document).height() - $(window).height();
			} else {
				dest = $(this.hash).offset().top;
			}
			//go to destination
			$('html,body').animate({
				scrollTop: dest
			}, 1000, 'swing');
			$('.active').removeClass('active');
			$(this).addClass('active');
		});
		
		
		/* Fixing title position to middle */
		var titleHeight = ($('.title').height()) / 2;
		$('.title').css("margin-top", "-" + titleHeight + "px");
		$(window).resize(function() {
			titleHeight = ($('.title').height()) / 2;
			$('.title').css("margin-top", "-" + titleHeight + "px");
		});
		
		
		/* Backgrounds */
		if (videoBackground == 'on') {
			if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
				$(".player").hide();
				$.backstretch(slideshowBackgroundURLS, {
					fade: slideshowFade,
					duration: slideshowDuration
				});
				$('.backstretch img').load(function() {
					$('.preloader').delay(1000).fadeOut(1000);
				});
			} else {
				$(".player").mb_YTPlayer({
					videoURL: videoBackgroundURL,
					containment: 'body',
					autoPlay: true,
					mute: videoMuted,
					startAt: 0,
					opacity: 1
				});
				$('#bgndVideo').on("YTPStart", function() {
					$('.preloader').delay(1000).fadeOut(1000);
				});
				if (videoMuted == false) {
					$('.videoMuteButton').show();
				}
			}
		} else {
			$.backstretch(slideshowBackgroundURLS, {
				fade: slideshowFade,
				duration: slideshowDuration
			});
			$('.backstretch img').load(function() {
				$('.preloader').delay(1000).fadeOut(1000);
			});
		}
		
		
		/* Activate countdown */
		$("#countdown").countdown({
			date: countdownDate
		});

		
	});
})(jQuery);