//API Info: http://discordjs.readthedocs.io/en/latest/index.html

var Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("presence", (user1, user2) => {
    bot.moveMember(user2, "190277585039654913")
});

bot.loginWithToken('MTkxNzQwNTY5MzQzNjIzMTY4.Cj-r0g.we0RnMxlRwi2e-Pdi4K6ENTEosU');
