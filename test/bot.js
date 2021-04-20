// Install Discord.js Master Version : npm install discordjs/discord.js
const { Client, MessageEmbed } = require("discord.js");
require("dotenv").config();

const client = new Client({
  disableEveryone: true
});

/* eslint-disable no-inline-comments */
const WeebyAPI = require("../index"); // Change this to: require("weeby-js");
const weeby = new WeebyAPI(process.env.WEEBYAPI);

client.on("ready", () => console.log("Test Bot is now online"));

client.on("message", async message => {
  const prefix = "w+";
  const args = message.content.substring(prefix.length).trim().split(" ");
  const cmd = args.shift().toLowerCase();

  // One Image Endpoint
  if (cmd === "3000years") {
    const image = await weeby.generators.oneImage("3000years", message.author.displayAvatarURL({ format: "png", dynamic: true, size: 1024 }));

    const embed = new MessageEmbed()
      .attachFiles({ attachment: image, name: "3000years.png" })
      .setImage("attachment://3000years.png");

    message.channel.send(embed);
  }
});

client.login(process.env.TOKEN);
