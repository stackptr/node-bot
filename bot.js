var irc = require('irc'),
	colors = require('colors');

colors.setTheme({
	error: 'red',
	warn: 'yellow',
	info: 'blue',
})

var bot = {
	owners: ['byte'],
	quitMsg: "Bye~!"
}

var client_options = {
	userName: 'octet',
	realName: 'Friendly Bot!',
	channels: ["#/g/tv"],
	port: 6667,
	autoRejoin: true,
	autoConnect: true
}

var client = new irc.Client("irc.rizon.net", client_options.userName, client_options);

// Handle errors
client.addListener('error', function(e) {
	console.log('Error:'.underline.red + " " + e);
});

// Listen to channel messages
client.addListener('message#', function(nick, to, text, msg) {
	if(bot.owners.indexOf(nick) != -1){
		if (text.indexOf("hello") != -1)
			client.say (msg.args[0], "Hello!")
		if (text.indexOf("quit") != -1){
			client.disconnect(bot.quitMsg);
		}
	}
});