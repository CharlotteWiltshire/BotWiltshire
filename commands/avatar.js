const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'avatar',
    execute(message, args) {
        let AvatarEmbed = new MessageEmbed()
        if(!message.mentions.users.first()) {
            AvatarEmbed.setColor('#fffff0')
            AvatarEmbed.setDescription('Your avatar:')
            AvatarEmbed.setThumbnail(message.author.displayAvatarURL())
            
            return message.channel.send(AvatarEmbed)
        } else {
            let User = message.mentions.users.first()
            AvatarEmbed.setColor('#fffff0')
            AvatarEmbed.setDescription(`${User.tag}'s avatar:`)
            AvatarEmbed.setThumbnail(User.displayAvatarURL())
            
            return message.channel.send(AvatarEmbed)
        }

    }
}
