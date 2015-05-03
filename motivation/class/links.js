var FlickrAPIKey = 'c83e1c59ae61c17f43bfc857f89892ae';
var tracksAPIKey = '2c3aee371d3a31817f4abb05088ce697378bad1a';

Array.prototype.pick = function () {
    return this[Math.floor(Math.random() * this.length)];
};

//On page load requests	
$( document ).ready(function() {
	$.getJSON(requestLink(), function (data) {
		var photo = data.photos.photo.pick();
		var url = photo.url_o;
		var backup = "https://farm4.staticflickr.com/3885/15024078599_7574ec9f62_o.jpg"; //If JSON request fails, then this photo url will be used.
		if (typeof url === 'undefined') {
			document.body.style.backgroundImage="url('" + backup + "')";
			return;
		}
		document.body.style.backgroundImage="url('" + url + "')";
	});

	$.get(findNumber(), function (data) {
		var words = data.split("\n").pick();
		var quote_backup = "Once you choose hope, anything’s possible."	//If the quote request fails, then this quote will be used.
		if (typeof quote[words] === 'undefined') {
			$('p').append(quote_backup);
			return;
		}				
		$('p').append(quote[words]);
	});		

	$.getJSON(findMix(), function (data) {
		var id = data.mixes.pick().id;
		getSong(id);					
	});		
});

function requestLink() {
	return "https://api.flickr.com/services/rest/?method=flickr.photos.search&content_type=1&text=" + "sky" + "&format=json&tagmode=all&nojsoncallback=1&per_page=500&extras=url_o&api_key=" + FlickrAPIKey; //Flickr JSON request link
}

function findNumber() {
	return "https://www.random.org/sequences/?min=0&max=47&col=1&format=plain&rnd=new"; //Number generator API link
}

function findMix() {
	return "http://8tracks.com/mixes?tags=inspirational%2Bmotivation%2Binstrumental&format=json&api_key=" + tracksAPIKey; //8tracks JSON request link
}

function getSong(id) {
	$.getJSON("http://8tracks.com/sets/460486803/play?mix_id=" + id + "&format=json&api_key=" + tracksAPIKey, function (data) {
		var songurl = data.set.track.url;
		console.log(songurl); //in case users want the song!
		var audio = document.createElement('audio');
		audio.setAttribute('src', songurl);
		audio.play();							
	});	
}
