$(document).ready(function(){
	$(document).foundation();
});

//Random Wallpaper and Fade In Intro
$(document).ready(function(){
    var randomnumber = Math.floor(Math.random()*10000);
		 if (randomnumber%11 == 0) {
				$('body').css('background-image', 'url(img/bg1.png)');
		 } else if (randomnumber%7 == 0) {
				$('body').css('background-image', 'url(img/bg2.png)');
		 } else if (randomnumber%5 == 0) {
				$('body').css('background-image', 'url(img/bg3.png)');
		 } else if (randomnumber%3 == 0) {
				$('body').css('background-image', 'url(img/bg4.png)');
		 } else if (randomnumber%2 == 0) {
				$('body').css('background-image', 'url(img/bg5.png)');
		 } else {
				$('body').css('background-image', 'url(img/bg6.png)');
		 }
   $('#main').fadeIn(1000);
   $('#more').fadeIn(10);
   $('#home-nav').tipsy({gravity: 'w',fade:'true'});
   $('#about-nav').tipsy({gravity: 'w',fade:'true'});
   $('#port-nav').tipsy({gravity: 'w',fade:'true'});
   $('#resume-nav').tipsy({gravity: 'w',fade:'true'});
   $('#email').tipsy({gravity: 'n',fade:'true'});
}); 

//Expand Intro
$(document).ready(function() {
	$('#more').click(function(){
		$('#more').fadeOut(200);
		$('#main').animate({height:'11.5%'}, 500);
		$('#prof').fadeIn(300);
		$('#largetext').fadeIn(300);
		$('#social-icons').fadeIn(300);
		$('#less').fadeIn(300);
		$('#smalltext').slideUp(200, function(){
		});
	});
});

//Shrink Intro
$(document).ready(function() {
	$('#less').click(function(){
		$('#less').fadeOut(30);
		$('#main').animate({height:'228px'}, 400);
		$('#prof').fadeOut(1200);
		$('#intro').fadeOut(1000);
		$('#intro').css("visibility", "hidden");
		$('#largetext').fadeOut(500);
		$('#social-icons').fadeOut(500);
		$('#intro').css("visibility", "visible");
		$('#smalltext').slideDown(1700, function(){
		
		});
		$('#smalltext').css("visibility", "visible");
		$('#intro').fadeIn(1000);
		$('#more').fadeIn(1000);
	});
});

//Expand About Content
$(document).ready(function(){
	$("#about-nav").click(function() {
		$('#aboutcontent').fadeIn(2000);
	});
});

//When the portfolio icon is clicked on the left, then the portfolio section fades in.
$(document).ready(function(){
	$("#port-nav").click(function() {
		$('#portcontent').fadeIn(2000);
	});
});

//When the resume icon is clicked, the resume section will expand and fade in.
$(document).ready(function(){
	$("#resume-nav").click(function() {
		$('#resumecontent').fadeIn(2000);
	});
});

//Then the portfolio's content...
$(document).ready(function(){
	$("#port-nav").click(function() {
		$('#layoutsicon').tipsy({gravity: 's',fade:'true'});
		$('#porticon').tipsy({gravity: 's',fade:'true'});
		$('#poolicon').tipsy({gravity: 's',fade:'true'});
		$('#engageicon').tipsy({gravity: 's',fade:'true'});
		$('#ECHicon').tipsy({gravity: 's',fade:'true'});
		$('#gloveicon').tipsy({gravity: 's',fade:'true'});
		$('#ACicon').tipsy({gravity: 's',fade:'true'});
		$('#porticon2').tipsy({gravity: 's',fade:'true'});
		$('#animalicon').tipsy({gravity: 's',fade:'true'});
		$('#logoicon').tipsy({gravity: 's',fade:'true'});
		$('#motivateicon').tipsy({gravity: 's',fade:'true'});
		$('#Typoicon').tipsy({gravity: 's',fade:'true'});
		$('#portcont').fadeIn(400);
		$('#portcontent').fadeIn(1000);
	});
});

//This resets the catergorization of the projects.
$(document).ready(function(){
	$("#All").click(function() {
		$('.arduino').fadeTo("slow",1.00);
		$('.websites').fadeTo("slow",1.00);
		$('.visual').fadeTo("slow",1.00);
	});
});

//This fades in the Graphic Design Projects.
$(document).ready(function(){
	$("#Graphic").click(function() {
		$('.arduino').fadeTo("slow",1.00);
		$('.websites').fadeTo("slow",1.00);
		$('.visual').fadeTo("slow",1.00);
		$('.arduino').fadeTo("slow",0.30);
		$('.websites').fadeTo("slow",0.30);
	});
});

//This fades in the Arduino Projects.
$(document).ready(function(){
	$("#Ard").click(function() {
		$('.arduino').fadeTo("slow",1.00);
		$('.websites').fadeTo("slow",1.00);
		$('.visual').fadeTo("slow",1.00);
		$('.visual').fadeTo("slow",0.30);
		$('.websites').fadeTo("slow",0.30);
	});
});

//This fades in the Web Projects.
$(document).ready(function(){
	$("#Web").click(function() {
		$('.arduino').fadeTo("slow",1.00);
		$('.websites').fadeTo("slow",1.00);
		$('.visual').fadeTo("slow",1.00);
		$('.arduino').fadeTo("slow",0.30);
		$('.visual').fadeTo("slow",0.30);
	});
});

//When the logo project is clicked, then it expands and fades in.
$(document).ready(function(){
	$("#logoicon").click(function() {
		$('#logo #showcontent').animate({height:'310px'}, 400);
		$('#logo #showcontent').animate({width:'450px'}, 400);
		$('#logo #showcase').fadeIn(2000);
		$('#logo #description').fadeIn(2000);
	});
});

//When the Typography project is clicked, then it expands and fades in.
$(document).ready(function(){
	$("#Typoicon").click(function() {
		$('#Typo #showcontent').animate({height:'310px'}, 400);
		$('#Typo #showcontent').animate({width:'450px'}, 400);
		$('#Typo #showcase').fadeIn(2000);
		$('#Typo #description').fadeIn(2000);
	});
});

//When the Pool Ball project is clicked, then it expands and fades in.
$(document).ready(function(){
	$("#poolicon").click(function() {
    $('#pool #showcontent').animate({height:'362px'}, 400);
    $('#pool #showcontent').animate({width:'450px'}, 400);
    $('#pool #showcase').fadeIn(2000);
    $('#pool #description').fadeIn(2000);
});
});

//When the first Portfolio project is clicked, then it expands and fades in.
$(document).ready(function(){
	$("#porticon").click(function() {
		$('#port1 #showcontent').animate({height:'340px'}, 400);
		$('#port1 #showcontent').animate({width:'450px'}, 400);
		$('#port1 #showcase').fadeIn(2000);
		$('#port1 #description').fadeIn(2000);
	});
});

//When the current Portfolio project is clicked, then it expands and fades in.
$(document).ready(function(){
	$("#porticon2").click(function() {
		$('#port2 #showcontent').animate({height:'310px'}, 400);
		$('#port2 #showcontent').animate({width:'450px'}, 400);
		$('#port2 #showcase').fadeIn(2000);
		$('#port2 #description').fadeIn(2000);
	});
});

//When the Ecommhub project is clicked, then it expands and fades in.
$(document).ready(function(){
	$("#ECHicon").click(function() {
		$('#ECH #showcontent').animate({height:'396px'}, 400);
		$('#ECH #showcontent').animate({width:'450px'}, 400);
		$('#ECH #showcase').fadeIn(2000);
		$('#ECH #description').fadeIn(2000);
	});
});

//When the Animal Crossing project is clicked, then it expands and fades in.
$(document).ready(function(){
	$("#ACicon").click(function() {
		$('#AC #showcontent').animate({height:'288px'}, 400);
		$('#AC #showcontent').animate({width:'450px'}, 400);
		$('#AC #showcase').fadeIn(2000);
		$('#AC #description').fadeIn(2000);
	});
});

//When the Powerglove project is clicked, then it expands and fades in.
$(document).ready(function(){
	$("#gloveicon").click(function() {
		$('#gloves #showcontent').animate({height:'350px'}, 400);
		$('#gloves #showcontent').animate({width:'450px'}, 400);
		$('#gloves #showcase').fadeIn(2000);
		$('#gloves #description').fadeIn(2000);
	});
});

//When the Ten Layouts project is clicked, then it expands and fades in.
$(document).ready(function(){
	$("#layoutsicon").click(function() {
		$('#tenlayouts #showcontent').animate({height:'328px'}, 400);
		$('#tenlayouts #showcontent').animate({width:'450px'}, 400);
		$('#tenlayouts #showcase').fadeIn(2000);
		$('#tenlayouts #description').fadeIn(2000);
	});
});

//When the Animal Game project is clicked, then it expands and fades in.
$(document).ready(function(){
	$("#animalicon").click(function() {
		$('#animals #showcontent').animate({height:'360px'}, 400);
		$('#animals #showcontent').animate({width:'450px'}, 400);
		$('#animals #showcase').fadeIn(2000);
		$('#animals #description').fadeIn(2000);
	});
});

//When the Engagement project is clicked, then it expands and fades in.
$(document).ready(function(){
	$("#engageicon").click(function() {
		$('#engagement #showcontent').animate({height:'349px'}, 400);
		$('#engagement #showcontent').animate({width:'450px'}, 400);
		$('#engagement #showcase').fadeIn(2000);
		$('#engagement #description').fadeIn(2000);
	});
});

//When the Motivation project is clicked, then it expands and fades in.
$(document).ready(function(){
	$("#motivateicon").click(function() {
		$('#motivation #showcontent').animate({height:'361px'}, 400);
		$('#motivation #showcontent').animate({width:'450px'}, 400);
		$('#motivation #showcase').fadeIn(2000);
		$('#motivation #description').fadeIn(2000);
	});
});

//shhhhhhhhhh!
var secret = new kc('egg.html');
$(document).ready(function(){
	$('#egg #section').fadeIn(4000);
});
