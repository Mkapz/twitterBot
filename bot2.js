// don't forget to put your keys in

console.log("the bot is starting");

var Twit= require('twit');

var config= require('./config');
var T= new Twit(config);

var stream= T.stream('user');

stream.on('follow', followed);

function followed(eventMSG){
var name= eventMSG.source.name;
var screenName= eventMSG.source.screen_name;
tweetIt('@' + screenName + 'do you like rainbows');
}

//tweetIt();
//setInterval(tweetIt, 1000*20)

function tweetIt(txt){

var tweet= {
	status: txt
}

T.post('statuses/update', tweet, tweeted);

function tweeted(err, data, response){
	if(err) {
		console.log("something went wrong");		
	} else {
		console.log("it worked");
	}
}

