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
  if (cmd === "oneimage") {
    const image = await weeby.generators.oneImage({ type: "3000years", image: message.author.displayAvatarURL({ format: "png", size: 1024 }) });

    const embed = new MessageEmbed()
      .attachFiles({ attachment: image, name: "oneImage.png" })
      .setImage("attachment://oneImage.png");

    message.channel.send(embed);
  }

  if (cmd === "twoimages") {
    const image = await weeby.generators.twoImages({ type: "whowouldwin", firstImage: message.author.displayAvatarURL({ format: "png", size: 1024 }), secondImage: "https://i.imgur.com/ZgrxPgU.png" });

    const embed = new MessageEmbed()
      .attachFiles({ attachment: image, name: "twoImages.png" })
      .setImage("attachment://twoImages.png");

    message.channel.send(embed);
  }

  if (cmd === "text") {
    const text = args.join(" ");
    if (!text) return message.channel.send("You will need to provide some text!");

    const image = await weeby.generators.text({ type: "hollywoodstar", text: text });

    const embed = new MessageEmbed()
      .attachFiles({ attachment: image, name: "text.png" })
      .setImage("attachment://text.png");

    message.channel.send(embed);
  }

  if (cmd === "twotext") {
    const image = await weeby.generators.twoText({ type: "tuxedopooh", textOne: "Hello there, my friend", textTwo: "Goodbye, my friend" });

    const embed = new MessageEmbed()
      .attachFiles({ attachment: image, name: "twoText.png" })
      .setImage("attachment://twoText.png");

    message.channel.send(embed);
  }

  if (cmd === "gif") {
    const image = await weeby.gif.fetch("hug");

    const embed = new MessageEmbed()
      .setImage(image);

    message.channel.send(embed);
  }
});

client.login(process.env.TOKEN);
