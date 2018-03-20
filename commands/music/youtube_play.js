const commando = require('discord.js-commando');
const bot = new commando.Client();
const ytdl = require('ytdl-core');
const streamOptions = { seek: 0, volume: 1 };
const broadcast = bot.createVoiceBroadcast();

class YoutubeCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'play',
            group: 'music',
            memberName: 'youtube',
            description: 'Plays a song from YouTube'
        });
    }

    async run(msg, args) {
        var data = msg.content.split(" ").pop();
        // Only try to join the sender's voice channel if they are in one themselves
        if (msg.member.voiceChannel) {
            msg.member.voiceChannel.join()
                .then(connection => { // Connection is an instance of VoiceConnection
                    try {
                        const stream = ytdl(data, { filter: 'audioonly' });
                        //const stream = ytdl('C:/Users/aldo-/Documents/my projects/Discordjs/AguitaBot/audioddlc_your_reality.mp3', { filter: 'audioonly' });
                        broadcast.playStream(stream);
                        const dispatcher = connection.playBroadcast(broadcast);

                        msg.reply("Reproduciendo el video: " + data);
                    }
                    catch (err) {
                        msg.reply("Oiga solo soporto enlaces de YouTube, perdon ):");
                        //document.getElementById("demo").innerHTML = err.message;
                    }
                    //broadcast.playFile('C:/Users/aldo-/Documents/my projects/Discordjs/AguitaBot/audioddlc_your_reality.mp3');
                    //const dispatcher = bot.playBroadcast(broadcast);
                })
                .catch(console.log);
            //dispatcher = msg.member.voiceChannel.playFile('C:/Users/aldo-/Documents/my projects/Discordjs/AguitaBot/audioddlc_your_reality.mp3');
        } else {
            msg.reply('You need to join a voice channel first!');
        }

        //msg.reply("Data: " + data.split(" ").pop());
    }
}

module.exports = YoutubeCommand;