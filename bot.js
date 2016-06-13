//API Info: http://discordjs.readthedocs.io/en/latest/index.html

var Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("message", function(message)
{
    if(message.content === "Hi") {
        bot.reply(message, "Hey there!");
    }
    else if(message.content === "here comes dat boi!!!!!!") {
        bot.reply(message, "o shit waddup!")
    }
});

bot.loginWithToken('MTkxNzQwNTY5MzQzNjIzMTY4.Cj-r0g.we0RnMxlRwi2e-Pdi4K6ENTEosU');
