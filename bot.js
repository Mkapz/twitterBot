// don't forget to put your keys in

console.log("the bot is starting");

var Twit= require('twit');

var config= require('./config');
var T= new Twit(config);

var params= {
	q: 'thoughts & prayers',
	count: 2
}

T.get('search/tweets', params, gotData);

function gotData(err, data, response){
	var tweets= data.statuses;
	for (var i = 0; i < tweets.length; i++){
	console.log(tweets[i].text);
	}
}