/** *************Init JS*********************
	
    TABLE OF CONTENTS
	---------------------------
	Notify Me
	IE9 Pleaceholder Support
	Preloader
	Counter JS
	
 ** ***************************************/
 "use strict"; 

/***********************************/
/*Ready function*/
/**********************************/
$(document).ready(function() {
	
	/** Subscribe JS **/
	$("#notifyMe").notifyMe(); // Activate notifyMe plugin on a '#notifyMe' element 
	
	/** Placeholder JS call **/
	$('input[type=text], textarea').placeholder();	
	
});

/***********************************/
/*Preloader */
/**********************************/
jQuery(window).load(function() {
        // will first fade out the loading animation
	jQuery(".status").fadeOut();
        // will fade out the whole DIV that covers the website.
	jQuery(".preloader").delay(100).fadeOut("slow");
	jQuery("body").css('overflow-y','visible');

});

/***********************************/
/*Counter JS*/
/**********************************/	
$(function () {
  
  var austDay = new Date();
  //Set counter date
  austDay =  new Date(2015,10,26);
  jQuery('#defaultCountdown').countdown({
	until: austDay, padZeroes: true,format: 'DHMS'});
  jQuery('#year').text(austDay.getFullYear());

});





