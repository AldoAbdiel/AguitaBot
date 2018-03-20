const commando = require('discord.js-commando');
const bot = new commando.Client();
const token = 'NDE2NDc1NjgyNDU4MTczNDQx.DXOBUw.jXl2tKloUMThIAQOfRviyFRwyK0';
// To play a file, we need to give an absolute path to it
//const dispatcher = connection.playFile('C:/Users/aldo-/Documents/my projects/Discordjs/AguitaBot/audioddlc_your_reality.mp3');
// Play files natively
//const broadcast = bot.createVoiceBroadcast();
// Play streams using ytdl-core
const ytdl = require('ytdl-core');
const streamOptions = { seek: 0, volume: 1 };
const broadcast = bot.createVoiceBroadcast();

var count = 0;
var video_url = "";
var check_user = false;

bot.registry.registerGroup('random', 'Random');
bot.registry.registerGroup('reactions', 'Reactions');
bot.registry.registerGroup('music', 'Music');

bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.on('ready', () => {
    //bot.user.setWatch('One Piece | !help');
    bot.user.setPresence({ game: { name: 'Super Smash Bros 4 | !help', type: 1 } });
    console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
    // Voice only works in guilds, if the message does not come from a guild,
    // we ignore it
    if (!msg.guild) return;

    if (msg.content === 'join') {
        // Only try to join the sender's voice channel if they are in one themselves
        if (msg.member.voiceChannel) {
            msg.member.voiceChannel.join()
                .then(connection => { // Connection is an instance of VoiceConnection
                    msg.reply('I have successfully connected to the channel!');
                    const stream = ytdl('https://www.youtube.com/watch?v=CAL4WMpBNs0', { filter: 'audioonly' });
                    //const stream = ytdl('C:/Users/aldo-/Documents/my projects/Discordjs/AguitaBot/audioddlc_your_reality.mp3', { filter: 'audioonly' });
                    broadcast.playStream(stream);
                    const dispatcher = connection.playBroadcast(broadcast);
                    //broadcast.playFile('C:/Users/aldo-/Documents/my projects/Discordjs/AguitaBot/audioddlc_your_reality.mp3');
                    //const dispatcher = bot.playBroadcast(broadcast);
                })
                .catch(console.log);
            //dispatcher = msg.member.voiceChannel.playFile('C:/Users/aldo-/Documents/my projects/Discordjs/AguitaBot/audioddlc_your_reality.mp3');
        } else {
            msg.reply('You need to join a voice channel first!');
        }
    }

    if (msg.content === 'chris' || msg.content === 'christian') {
        video_url = 'https://www.youtube.com/watch?v=vy2gCrOvy0A';
        check_user = true;
    } else if (msg.content === 'bruno' || msg.content === 'manzana') {
        video_url = 'https://www.youtube.com/watch?v=JuAizAVYk7A';
        check_user = true;
    } else if (msg.content === 'memo' || msg.content === 'guillermo'){
        video_url = 'https://www.youtube.com/watch?v=wlidqCc217c';
        check_user = true;
    }

    // Only try to join the sender's voice channel if they are in one themselves
    if (check_user == true){
        if (msg.member.voiceChannel) {
            check_user = false;
            msg.member.voiceChannel.join()
                .then(connection => { // Connection is an instance of VoiceConnection
                    msg.reply('I have successfully connected to the channel!');
                    const stream = ytdl(video_url, { filter: 'audioonly' });
                    //const stream = ytdl('C:/Users/aldo-/Documents/my projects/Discordjs/AguitaBot/audioddlc_your_reality.mp3', { filter: 'audioonly' });
                    broadcast.playStream(stream);
                    const dispatcher = connection.playBroadcast(broadcast);
                    //broadcast.playFile('C:/Users/aldo-/Documents/my projects/Discordjs/AguitaBot/audioddlc_your_reality.mp3');
                    //const dispatcher = bot.playBroadcast(broadcast);
                })
                .catch(console.log);
            //dispatcher = msg.member.voiceChannel.playFile('C:/Users/aldo-/Documents/my projects/Discordjs/AguitaBot/audioddlc_your_reality.mp3');
        } else {
            msg.reply('You need to join a voice channel first!');
        }
    }

    if (msg.content === 'que opinas agüita?') {
        msg.reply('AHH C MAMOOO!');
    }


    if (msg.content === 'ping') {
        msg.reply('Pong!' + ' :peach:' );
    }

    if (msg.content === 'pong') {
        switch (count) {
            case 0:
                msg.reply(':c');
                break;
            case 1:
                msg.reply(':\'c');
                break;
            case 2:
                msg.reply(':\'C');
                break;
            case 3:
                msg.reply('>:c');
                break;
            case 4:
                msg.reply('>:C');
                break;
            case 5:
                msg.reply('>8C');
                break;
            case 6:
                msg.reply('O///O');
                break;
            default:
                msg.reply('...');
        }
        count += 1;
    }

    if (msg.content === 'reset') {
        count = 0;
    }

    if (msg.content === 'agüita') {
        msg.reply('Que quieres puñetas?');
    }

    if (msg.content === 'aguita') {
        msg.reply('Aprende a user la dieresis ñeñetas');
    }

    if (msg.content === 'agüita bonita') {
        msg.reply(' \'u\' holii :heartbeat: :heartbeat: :heartbeat: ');
    }

    // If the message is "what is my avatar"
    if (msg.content === 'what is my avatar') {
        // Send the user's avatar URL
        msg.reply(msg.author.avatarURL);
    }
});

// Create an event listener for new guild members
bot.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.find('name', 'member-log');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`Bienvenido al servidor, ${member}`);
});



//dispatcher.pause(); // Pause the stream
//dispatcher.resume(); // Carry on playing

bot.login(token);