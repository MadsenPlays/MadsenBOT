const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", () => {
  console.log("Jeg er klar!");
});

client.on('message', message = {
    if (message.content === 'Hej') {
    	message.channel.send(message.author + ' --> Hej.');
    }
});

client.on('message', message => {
    if (message.content === 'hej') {
    	message.channel.send(message.author + ' --> Hej.');
    }
});

// THIS  MUST  BE  THIS  WAY 
client.login(process.env.BOT_TOKEN);
