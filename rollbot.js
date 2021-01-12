const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();


client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

    const args = message.content.slice(config.prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();

    if (command == 'roll'){
        const taggedUser = message.mentions.users.first();

        message.channel.send(`${taggedUser.username} rolls ${Math.floor(Math.random() * 100) + 1} (1-100)`);
    } 

});

client.login(process.env(DSC_TOKEN));
