const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = process.env.prefix
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
  console.log(`Connected in ${client.guilds.cache.size} Server`);
  console.log(`Bot `);
});
client.on("ready", async => {
  client.user.setStatus("idle");
  client.user.setActivity(`حط حالة البوت `, {
    type: "PLAYING"
  });
});


require('./server')();
client.login(process.env.token);
