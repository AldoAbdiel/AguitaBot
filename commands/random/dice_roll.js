const commando = require('discord.js-commando');

class DiceRollCommand extends commando.Command {
    constructor(client){
        super(client, {
            name: 'roll',
            group: 'random',
            memberName: 'roll',
            description: 'Rolls a die'
        });
    }

    async run(msg, args){
        var roll = Math.floor(Math.random() * 6) + 1;
        msg.reply("Obtuviste un " + roll);
    }
}

module.exports = DiceRollCommand;