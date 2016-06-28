//API Info: http://discordjs.readthedocs.io/en/latest/index.html

var Discord = require("discord.js");
var bot = new Discord.Client();


bot.on("presence", (user1, user2) => {
    if(user2.game === null) {
        bot.moveMember(user2, '187325424743743490');
    }
    else if(user2.game.name === 'Overwatch') {
        bot.moveMember(user2, '190277585039654913');
    }
    else if(user2.game.name === 'League of Legends') {
        bot.moveMember(user2, '190277560695783424');
    }
});

bot.on("message", (m) => {


    if (m.content === "oh shit") {
		bot.sendMessage(m.channel, "waddup");
		bot.joinVoiceChannel(m.author.voiceChannel).catch(error);
	}
    if(m.content === "waddup")
    {
        var connection = bot.internal.voiceConnection;
        connection.playFile("http://michaelgschoen.com/realclassic.wav", 0.5);
        bot.on("end", (m) => {
            bot.internal.leaveVoiceChannel();
        });

    }

    if (m.content.startsWith("$$$ leave")) {
		// Leave the voice channel
		bot.internal.leaveVoiceChannel();
		// Return to prevent further commands
		return;
	}

    if (m.content.startsWith("$$$ stop")) {
		// If the voice connection exists (i.e. the bot is connected to a voice
		// channel) ...
		if (bot.internal.voiceConnection) {
			// ... stop the current playback
			bot.internal.voiceConnection.stopPlaying();
		}
		// Return to prevent execution of further commands
		return;
	}
});

bot.loginWithToken('MTkxNzQwNTY5MzQzNjIzMTY4.Cj-r0g.we0RnMxlRwi2e-Pdi4K6ENTEosU');

function error(e) {
	console.log(e.stack);
	process.exit(0);
}
