const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Bot is online!');

    const channel = client.channels.cache.get(process.env.channel_id);

    if (!channel) {
        return console.error("The channel does not exist!");
    }

    channel.join().then(() => {
      // Yay, it worked!
      console.log("Successfully connected!");
    }).catch(e => {
      // Oh no, it errored! Let's log it to console :)
      console.error(e);
    });
});

client.login(process.env.token);