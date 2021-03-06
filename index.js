const Discord = require('discord.js');
const { Player } = require("discord-music-player");
const client = new Discord.Client();
const keepAlive = require('./server');

require('dotenv').config();

const player = new Player(client, {
    leaveOnEmpty: false, // This options are optional.
});

// You can define the Player as *client.player* to easly access it.
client.player = player;

client.on('ready', () => {
    console.log('Bot is online!');

    const channel = client.channels.cache.get(process.env.CHANNEL_ID);

    if (!channel) {
        return console.error("The channel does not exist!");
    }

    channel.join().then(() => {
      // Yay, it worked!
      console.log("Successfully connected!");
      
      // Play music if URL var exist
      if (process.env.URL) {
        client.player.play(channel, process.env.URL);
      }
      
    }).catch(e => {
      // Oh no, it errored! Let's log it to console :)
      console.error(e);
    });
});

keepAlive();
client.login(process.env.TOKEN);