const Discord = require('discord.js');

module.exports = {
    name: '8ball',
    execute(message, args) {
        if(!args[0]) {
            return message.channel.send(`Uhm... You need to ask me a full question, ${message.author}..!`)
        }

        let answers = ['Yes!', 'Without a doubt.', 'Definitely~', 'Maybe?', 'Better not telling you.', 'Ehh-- Ask again later.', 'No.', 'Very doubtful...', 'Eh... Outlook not so good.'];
        let result = Math.floor(Math.random() * answers.length);
        let question = args.join(' ');

        let ballEmbed = new Discord.MessageEmbed()
        .setColor('#fffff0')
        .addField('Question: ', question)
        .addField('Answer: ', answers[result]);
        message.channel.send(ballEmbed);
    }
}
