const commando = require('discord.js-commando');

class AnimeRecommendCommand extends commando.Command {
    constructor(client){
        super(client, {
            name: 'anime',
            group: 'random',
            memberName: 'anime',
            description: 'Recommend a random anime'
        });
    }

    async run(msg, args){
        var anime = [
            ["One Piece","Esta sugoi","Aldo"],
            ["Gurren Lagann","Esta sugoi","Aldo"],
            ["Devilman","Esta sugoi","Aldo"],
            ["Hunter x Hunter","Esta sugoi","Aldo"]
        ];
        var roll = Math.floor(Math.random() * anime.length) + 1;
        msg.reply("Titulo: " + anime[roll][0] + " | Descipcion: " + anime[roll][1] + 
            " | Recomendado por: " + anime[roll][2] );
    }
}

module.exports = AnimeRecommendCommand;