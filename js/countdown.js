$(document).ready(function() {
	"use strict";
	$.fn.countdown = function(options) {
			var settings = {
				'date': null
			};
			if (options) {
				$.extend(settings, options);
			}
			var this_sel = $(this);

			function count_exec() {
					var seconds,days,hours,minutes;
					var eventDate = Date.parse(settings['date']) / 1000; // Parse the date string
					var currentDate = Math.floor($.now() / 1000); // Find the timestamp for now
						seconds = eventDate - currentDate; // Find the number of seconds remaining
					if (seconds <= 0) { // After the event date has passed
						days = 0;
						hours = 0;
						minutes = 0;
						seconds = 0;
					} else {
						days = Math.floor(seconds / (60 * 60 * 24)); // Divide to find the number of days remaining
						seconds -= days * 60 * 60 * 24; // Subtract the number of (complete, => 24 hours) days calculated above
						hours = Math.floor(seconds / (60 * 60)); // Get the number of hours from that modified number ^
						seconds -= hours * 60 * 60;
						minutes = Math.floor(seconds / 60);
						seconds -= minutes * 60;
					}
					this_sel.find('#days').val(days).trigger('change');
					this_sel.find('#hours').val(hours).trigger('change');
					this_sel.find('#mins').val(minutes).trigger('change');
					this_sel.find('#secs').val(seconds).trigger('change');
				} // End of count_exec();
			count_exec();
			var interval = setInterval(count_exec, 1000);
		} // End of the main function
	$(".knob")
		.attr('data-fgColor', color)
		.knob({
			change: function(value) {
				//console.log("change : " + value);
			},
			release: function(value) {
				//console.log(this.$.attr('value'));
				//console.log("release : " + value);
			},
			cancel: function() {
				//console.log("cancel : ", this);
			},
			draw: function() {
				// "tron" case
				if (this.$.data('skin') == 'tron') {
					var a = this.angle(this.cv) // Angle
						,
						sa = this.startAngle // Previous start angle
						,
						sat = this.startAngle // Start angle
						,
						ea // Previous end angle
						, eat = sat + a // End angle
						,
						r = 1;
					this.g.lineWidth = this.lineWidth;
					this.o.cursor && (sat = eat - 0.3) && (eat = eat + 0.3);
					if (this.o.displayPrevious) {
						ea = this.startAngle + this.angle(this.v);
						this.o.cursor && (sa = ea - 0.3) && (ea = ea + 0.3);
						this.g.beginPath();
						this.g.strokeStyle = this.pColor;
						this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sa, ea, false);
						this.g.stroke();
					}
					this.g.beginPath();
					this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
					this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sat, eat, false);
					this.g.stroke();
					this.g.lineWidth = 2;
					this.g.beginPath();
					this.g.strokeStyle = this.o.fgColor;
					this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
					this.g.stroke();
					return false;
				}
			}
		});
});