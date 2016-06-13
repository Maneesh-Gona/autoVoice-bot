//API Info: http://discordjs.readthedocs.io/en/latest/index.html

var Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("presence", (user1, user2) => {
    console.log(user2.username);
});

bot.loginWithToken('MTkxNzQwNTY5MzQzNjIzMTY4.Cj-r0g.we0RnMxlRwi2e-Pdi4K6ENTEosU');
