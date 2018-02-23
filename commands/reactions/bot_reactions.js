const commando = require('discord.js-commando');

class GreetingCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'hi',
            group: 'reactions',
            memberName: 'greeting',
            description: 'Greets a user'
        });
    }
    
    async run(msg, args){
        //var roll = Math.floor(Math.random() * 6) + 1;
        msg.reply("Hellooo! (:");
    }
}
module.exports = GreetingCommand;