module.exports = {
    name: 'coinflip',
    execute(message, args) {
        let answers = ['Heads!', 'Tails!'];
        let result = Math.floor(Math.random() * answers.length);

        message.channel.send(answers[result]);
    }
}
