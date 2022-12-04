// Require the necessary discord.js classes
const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config()

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
    partials: ["MESSAGE", "CHANNEL", "REACTION"]
});

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})


client.on('messageCreate', function (msg) {
    if (!msg.author.bot){
        if (msg.content === 'zd') {
            msg.reply(`zd ${msg.author}`);
        }
    }
    
});

client.login(process.env.TOKEN)