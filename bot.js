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

bot.loginWithToken('MTkxNzQwNTY5MzQzNjIzMTY4.Cj-r0g.we0RnMxlRwi2e-Pdi4K6ENTEosU');
