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

  if (cmd === "oneimage") {
    const image = await weeby.generators.oneImage({ type: "3000years", image: message.author.displayAvatarURL({ format: "png", size: 1024 }) });

    const embed = new MessageEmbed()
      .setTitle(`**One Image**`)
      .setColor(`#E881D1`)
      .attachFiles({ attachment: image, name: "oneImage.png" })
      .setImage("attachment://oneImage.png");

    message.channel.send(embed);
  }

  if (cmd === "twoimages") {
    const image = await weeby.generators.twoImages({ type: "whowouldwin", firstImage: message.author.displayAvatarURL({ format: "png", size: 1024 }), secondImage: "https://i.imgur.com/ZgrxPgU.png" });

    const embed = new MessageEmbed()
      .setTitle(`**Two Images**`)
      .setColor(`#E881D1`)
      .attachFiles({ attachment: image, name: "twoImages.png" })
      .setImage("attachment://twoImages.png");

    message.channel.send(embed);
  }

  if (cmd === "text") {
    const text = args.join(" ");
    if (!text) return message.channel.send("You will need to provide some text!");

    const image = await weeby.generators.text({ type: "hollywoodstar", text: text });

    const embed = new MessageEmbed()
      .setTitle(`**Text**`)
      .setColor(`#E881D1`)
      .attachFiles({ attachment: image, name: "text.png" })
      .setImage("attachment://text.png");

    message.channel.send(embed);
  }

  if (cmd === "twotext") {
    const image = await weeby.generators.twoText({ type: "tuxedopooh", textOne: "Hello there, my friend", textTwo: "Goodbye, my friend" });

    const embed = new MessageEmbed()
      .setTitle(`**Two Text**`)
      .setColor(`#E881D1`)
      .attachFiles({ attachment: image, name: "twoText.png" })
      .setImage("attachment://twoText.png");

    message.channel.send(embed);
  }

  if (cmd === "textimage") {
    const image = await weeby.generators.textImage({ type: "lisapresentation", image: message.author.displayAvatarURL({ dynamic: true, size: 1024, format: "png" }), text: "Goodbye, my friend" });

    const embed = new MessageEmbed()
      .setTitle(`**Text Image**`)
      .setColor(`#E881D1`)
      .attachFiles({ attachment: image, name: "textImage.png" })
      .setImage("attachment://textImage.png");

    message.channel.send(embed);
  }

  if (cmd === "friendship") {
    const image = await weeby.generators.friendship({ firstImage: message.author.displayAvatarURL({ dynamic: true, size: 1024, format: "png" }), secondImage: "https://i.imgur.com/ZgrxPgU.png", firstText: message.author.username, secondText: "Nate???" });

    const embed = new MessageEmbed()
      .setTitle(`**Friendship**`)
      .setColor(`#E881D1`)
      .attachFiles({ attachment: image, name: "friendship.png" })
      .setImage("attachment://friendship.png");

    message.channel.send(embed);
  }

  if (cmd === "demotivational") {
    const image = await weeby.generators.demotivational({ image: message.author.displayAvatarURL({ dynamic: true, size: 1024, format: "png" }), title: "Hello", text: "Testing 123 hah!" });

    const embed = new MessageEmbed()
      .setTitle(`**Demotivational**`)
      .setColor(`#347cdb`)
      .attachFiles({ attachment: image, name: "demotivational.png" })
      .setImage("attachment://demotivational.png");

    message.channel.send(embed);
  }

  if (cmd === "rip") {
    const image = await weeby.generators.rip({ avatar: message.author.displayAvatarURL({ dynamic: true, size: 1024, format: "png" }), username: "Hello", message: "Testing 123 hah!" });

    const embed = new MessageEmbed()
      .setTitle(`**RIP**`)
      .setColor(`#6b6d75`)
      .attachFiles({ attachment: image, name: "rip.png" })
      .setImage("attachment://rip.png");

    message.channel.send(embed);
  }

  if (cmd === "gif") {
    const image = await weeby.gif.fetch("hug");

    const embed = new MessageEmbed()
      .setTitle(`**GIF**`)
      .setColor(`#E881D1`)
      .setImage(image);

    message.channel.send(embed);
  }

  if (cmd === "overlay") {
    const image = await weeby.overlays.fetch({ type: "thuglife", image: message.author.displayAvatarURL({ format: "png", size: 1024 }) });

    const embed = new MessageEmbed()
      .setTitle(`**Overlay**`)
      .setColor(`#E881D1`)
      .attachFiles({ attachment: image, name: "overlay.png" })
      .setImage("attachment://overlay.png");

    message.channel.send(embed);
  }

  if (cmd === "color") {
    const image = await weeby.generators.color("76d6ff");

    const embed = new MessageEmbed()
      .setTitle(`**Color**`)
      .setColor(`#76d6ff`)
      .attachFiles({ attachment: image, name: "color.png" })
      .setImage("attachment://color.png");

    message.channel.send(embed);
  }
});

client.login(process.env.TOKEN);
