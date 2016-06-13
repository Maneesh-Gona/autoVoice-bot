var Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("message", fucntion(message)) {
    if(message.content === "Hi") {
        bot.reply(message, "Hey there!");
    }
});

bot.loginWithToken(MTkxNzI0NDk5MjQ1MzM0NTI4.Cj-ijA.eLuDNuLxXUp_9UHTxmy48_EahBo);
