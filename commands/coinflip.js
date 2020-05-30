module.exports = {
    name: '8ball',
    execute(message, args) {
        let answers = ['Heads!', 'Tails!'];
        let result = Math.floor(Math.random() * answers.length);

        message.channel.send(answers[result]);
    }
}
