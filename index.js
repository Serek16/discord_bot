const Discord = require('discord.js');
const client = new Discord.Client();

const PREFIX = '!';
const CHANNEL_ID = '713051305123250260';

client.on('ready', () => {
    console.log('This bot is online!');

    const channel = client.channels.get(CHANNEL_ID);

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
            message.chanel.sendMessage('brum brum')
            break;
    }

    if (message.content === "odpalam lagune") {
        message.chanel.sendMessage('brum brum');
    }
});

client.login(process.env.token);