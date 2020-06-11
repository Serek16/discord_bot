const Discord = require('discord.js');
const client = new Discord.Client();

const PREFIX = '!';
const CHANNEL_ID = '716433061335662746';

client.on('ready', () => {
    console.log('This bot is online!');

    const channel = client.channels.cache.get(CHANNEL_ID);

    if (!channel) {
        return console.error("The channel does not exist!");
    }

    channel.join().then(connection => {
      // Yay, it worked!
      console.log("Successfully connected.");
    }).catch(e => {
      // Oh no, it errored! Let's log it to console :)
      console.error(e);
    });
});

client.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]) {
        case 'laguna':
            message.reply('brum brum')
            break;
    }

    if (message.content === "odpalam lagune") {
        message.reply('brum brum');
    }
});

client.login(process.env.token);