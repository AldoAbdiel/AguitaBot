const commando = require('discord.js-commando');
const bot = new commando.Client();
const token = 'token';

bot.registry.registerGroup('random', 'Random');
bot.registry.registerGroup('reactions', 'Reactions');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.on('ready', () => {
    bot.user.setGame('Your Kokoro | !help');
    console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('Pong!');
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
    channel.send(`Welcome to the server, ${member}`);
});

bot.login(token);