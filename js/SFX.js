var s;

/*
	Parallax
*/

$( document ).ready(function() {
	if ( $( "#homecontent" ).length ) {
		s = skrollr.init({
			edgeStrategy: 'set',
			easing: {
				WTF: Math.random,
				inverted: function(p) {
					return 1-p;
				}
			}
		});
	}
});

/*
	Nav Animations
*/

$( document ).ready(function() {
    $(".nav a").mouseenter(function() {
        $(this).animate({color: '#72a632'},300);
	});
	$(".nav a").mouseleave(function() {
        $(this).animate({color: '#9a9e9f'},300);
	});
});


/*
	Icon Animations
*/

$( document ).ready(function() {
    $("i").mouseenter(function() {
        $(this).animate({color: '#72a632'},300);
	});
	$("#homecontent i").mouseleave(function() {
        $(this).animate({color: '#9a9e9f'},400);
	});
	$("#aboutcontent i").mouseleave(function() {
    	$(this).animate({color: 'black'},400);
	});

});

/*
	Button Animations
*/
$( document ).ready(function() {
    $(".btn").mouseenter(function() {
        $(this).animate({backgroundColor: '#AAD278'},300);
	});
	$(".btn").mouseleave(function() {
        $(this).animate({backgroundColor: '#72a632'},200);
	});

});

//shhhhhhhhhh!
var secret = new kc('egg');
