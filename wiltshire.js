const Discord = require('discord.js');

const client = new Discord.Client();

client.once('ready', () => {
    client.user.setActivity('/help');
    console.log('Miss Wiltshire is ready!');
});

client.login(process.env.BOT_TOKEN);