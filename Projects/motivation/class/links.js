var FlickrAPIKey = 'c83e1c59ae61c17f43bfc857f89892ae';
var tracksAPIKey = '2c3aee371d3a31817f4abb05088ce697378bad1a';
var unsplashAPIKey = '5019f66483a733e28137ed8580c7fd86741ddcf52a0d184562d1c12da651dc09';

Array.prototype.pick = function () {
    return this[Math.floor(Math.random() * this.length)];
};

//On page load requests	
$( document ).ready(function() {
	$.getJSON(findPhoto(), function (data) {
		var user = data.results.pick();
		var photo = user.urls.full;
		var photocredit = user.links.html;
	    var backup = "https://images.unsplash.com/photo-1445299370299-fba06c02df22?crop=entropy&fit=crop&fm=jpg&h=675&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1375"; //If JSON request fails, then this photo url will be used.
	    if (typeof user === 'undefined') {
			document.body.style.backgroundImage="url('" + backup + "')";
		    $('footer p').append('<a href = "https://unsplash.com/photos/GSzD6vGIWKM">photo credit</a> <a href = "https://github.com/omiiii/A-Moment-of-Motivation"> | github repo</a>');
			return;
		}
		document.body.style.backgroundImage="url('" + photo + "')";
		$('footer p').append('<a href = "'+ photocredit + '">photo credit</a> <a href = "https://github.com/omiiii/A-Moment-of-Motivation"> | github repo</a>');

	});

	$.get(findNumber(), function (data) {
		var words = data.split("\n").pick();
		var quote_backup = "Once you choose hope, anything’s possible."	//If the quote request fails, then this quote will be used.
		if (typeof quote[words] === 'undefined') {
			$('#quote p').append(quote_backup);
			return;
		}				
		$('#quote p').append(quote[words]);
	});		

	$.getJSON(findMix(), function (data) {
		var id = data.mixes.pick().id;
		getSong(id);					
	});		
});

function findPhoto() {
	return "https://api.unsplash.com/search/photos?client_id=" + unsplashAPIKey + "&page=1&query=" + "nature";
}

function findNumber() {
	return "https://www.random.org/sequences/?min=0&max=47&col=1&format=plain&rnd=new"; //Number generator API link
}

function findMix() {
	return "http://8tracks.com/mixes?tags=motivation%2Binstrumental&format=json&api_key=" + tracksAPIKey; //8tracks JSON request link
}

function getSong(id) {
	$.getJSON("http://8tracks.com/sets/460486803/play?mix_id=" + id + "&format=json&api_key=" + tracksAPIKey, function (data) {
		var songurl = data.set.track.url;
		var songtitle = data.set.track.name;
		var songartist = data.set.track.performer;
		var audio = document.createElement('audio');
		audio.setAttribute('src', songurl);
		audio.play();
		$('footer p').prepend("currently playing: " + songartist + " - " + songtitle + " | ");							
	});	
}
