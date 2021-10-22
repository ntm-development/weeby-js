/*
WARNING: Outdated Discord.js code

I strongly discourage using this code as it is not v13 compatible and uses normal commands instead of slash commands. Although I will only use this for testing the API, I will not be providing support for Discord.js v12. Use as own risk! -Nate
*/

/* eslint-disable no-inline-comments */
const { stripIndents } = require("common-tags");
const { Client, MessageEmbed } = require("discord.js");
require("dotenv").config();
const WeebyAPI = require("../src/index"); // Change this to: require("weeby-js");
const weeby = new WeebyAPI(process.env.WEEBYAPI);

const client = new Client({
    disableEveryone: true
});

client.on("ready", () => console.log("Weeby-JS test bot is now online!"));

client.on("message", async message => {
    const prefix = "w+";
    const args = message.content.substring(prefix.length).trim().split(" ");
    const cmd = args.shift().toLowerCase();

    if (cmd === "oneimage") {
        const image = await weeby.generators.oneImage({ type: "wynaut", image: message.author.displayAvatarURL({ format: "png", size: 1024 }) });

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

    if (cmd === "eject") {
        const eject = await weeby.generators.eject({ image: "https://cdn.weebyapi.xyz/img/static/IconBG.png", outcome: "imposter", text: "Hello World" });

        const embed = new MessageEmbed()
            .setTitle(`**Eject**`)
            .setColor(`#E881D1`)
            .attachFiles({ attachment: eject, name: "eject.png" })
            .setImage("attachment://eject.png");

        message.channel.send(embed);
    }

    if (cmd === "triggered") {
        const triggered = await weeby.generators.triggered({ image: "https://cdn.weebyapi.xyz/img/static/IconBG.png", tint: false });

        const embed = new MessageEmbed()
            .setTitle(`**Triggered**`)
            .setColor(`#E881D1`)
            .attachFiles({ attachment: triggered, name: "triggered.png" })
            .setImage("attachment://triggered.png");

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

    if (cmd === "tweet") {
        const image = await weeby.generators.tweet({ avatar: message.author.displayAvatarURL({ dynamic: true, size: 1024, format: "png" }), username: message.author.username, tweet: "Hello my slimes!" });

        const embed = new MessageEmbed()
            .setTitle(`**Tweet**`)
            .setColor(`#76d6ff`)
            .attachFiles({ attachment: image, name: "tweet.png" })
            .setImage("attachment://tweet.png");

        message.channel.send(embed);
    }

    if (cmd === "tweetfetch") {
        const image = await weeby.generators.tweetFetch({ username: message.author.username, tweet: "Hello my slimes!" });

        const embed = new MessageEmbed()
            .setTitle(`**Tweet Fetch**`)
            .setColor(`#76d6ff`)
            .attachFiles({ attachment: image, name: "tweetFetch.png" })
            .setImage("attachment://tweetFetch.png");

        message.channel.send(embed);
    }

    if (cmd === "spotifynp") {
        const image = await weeby.generators.spotifyNp({ image: message.author.displayAvatarURL({ dynamic: true, size: 1024, format: "png" }), songName: "Love Hurts, jkjk", artist: "Nwateee", userPicks: `${message.author.username}'s Picks` });

        const embed = new MessageEmbed()
            .setTitle(`**Spotify Now Playing**`)
            .setColor(`#1db954`)
            .attachFiles({ attachment: image, name: "spotifyNp.png" })
            .setImage("attachment://spotifyNp.png");

        message.channel.send(embed);
    }

    if (cmd === "currency") {
        const image = await weeby.generators.currency({ type: , amount: 50000 });

        const embed = new MessageEmbed()
            .setTitle(`**Color**`)
            .setColor(`#57f287`)
            .attachFiles({ attachment: image, name: "currency.png" })
            .setImage("attachment://currency.png");

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

    if (cmd === "gif") {
        const image = await weeby.gif.fetch("wink");

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

    if (cmd === "word") {
        const res = await weeby.json.word("random");

        const embed = new MessageEmbed()
            .setTitle(`**Word**`)
            .setColor(`#E881D1`)
            .setDescription(res);

        message.channel.send(embed);
    }

    if (cmd === "response") {
        const res = await weeby.json.response("dadjoke");

        const embed = new MessageEmbed()
            .setTitle(`**Response**`)
            .setColor(`#E881D1`)
            .setDescription(res);

        message.channel.send(embed);
    }

    if (cmd === "format") {
        const res = await weeby.json.textFormat({ text: "hello world", type: "aesthetic" });

        message.channel.send(res);
    }

    if (cmd === "welcome") {
        const image = await weeby.custom.greeting({ icon: "https://i.imgur.com/ZgrxPgU.png", background: "https://i.imgur.com/K5QxYa2.png", greet: "Welcome", name: "Nate", message: "Hello and Welcome!", greetHex: "E881D1", messageHex: "76d6ff", circleHex: "6b6d75", nameHex: "e889e0", font: "riffic" });

        const embed = new MessageEmbed()
            .setTitle(`**Welcome**`)
            .setColor(`#E881D1`)
            .attachFiles({ attachment: image, name: "welcome.png" })
            .setImage("attachment://welcome.png");

        message.channel.send(embed);
    }

    if (cmd === "booster") {
        const image = await weeby.custom.booster({ icon: "https://i.imgur.com/ZgrxPgU.png", background: "https://i.imgur.com/CBYBpOH.png", title: "Boost ADDED!", name: "Nate", message: "Thanks for boosting, my bro :)", titleHex: "E881D1", messageHex: "76d6ff", circleHex: "fee75c", nameHex: "57f287", font: "cornerofthesky" });

        const embed = new MessageEmbed()
            .setTitle(`**Booster**`)
            .setColor(`#E881D1`)
            .attachFiles({ attachment: image, name: "booster.png" })
            .setImage("attachment://booster.png");

        message.channel.send(embed);
    }

    if (cmd === "rank") {
        const image = await weeby.custom.rank({ avatar: "https://i.imgur.com/ZgrxPgU.png", username: "Nate", bgColor: "ffffff", level: 5, xp: 7 });

        const embed = new MessageEmbed()
            .setTitle(`**${message.author.username}'s Rank**`)
            .setColor(`#E881D1`)
            .attachFiles({ attachment: image, name: "rank.png" })
            .setImage("attachment://rank.png");

        message.channel.send(embed);
    }

    if (cmd === "levelup") {
        const image = await weeby.custom.levelUp({ avatar: "https://i.imgur.com/ZgrxPgU.png", bgColor: "9c81f2", borderColor: "6b6d75", oldlevel: 5, newlevel: 7, font: "pinkycupid" });

        const embed = new MessageEmbed()
            .setTitle(`**${message.author.username}'s Level Up**`)
            .setColor(`#E881D1`)
            .attachFiles({ attachment: image, name: "levelup.png" })
            .setImage("attachment://levelup.png");

        message.channel.send(embed);
    }

    if (cmd === "effect") {
        const image = await weeby.effects.general({ type: "invert", image: message.author.displayAvatarURL({ format: "png", size: 1024 }) });

        const embed = new MessageEmbed()
            .setTitle(`**General Effect**`)
            .setColor(`#E881D1`)
            .attachFiles({ attachment: image, name: "generalEffect.png" })
            .setImage("attachment://generalEffect.png");

        message.channel.send(embed);
    }

    if (cmd === "intensity") {
        const image = await weeby.effects.intensity({ type: "darkness", intensity: 30, image: message.author.displayAvatarURL({ format: "png", size: 1024 }) });

        const embed = new MessageEmbed()
            .setTitle(`**Intensity Effect**`)
            .setColor(`#E881D1`)
            .attachFiles({ attachment: image, name: "intensity.png" })
            .setImage("attachment://intensity.png");

        message.channel.send(embed);
    }

    if (cmd === "level") {
        const image = await weeby.effects.level({ type: "fisheye", level: 50, image: message.author.displayAvatarURL({ format: "png", size: 1024 }) });

        const embed = new MessageEmbed()
            .setTitle(`**Level Effect**`)
            .setColor(`#E881D1`)
            .attachFiles({ attachment: image, name: "level.png" })
            .setImage("attachment://level.png");

        message.channel.send(embed);
    }

    if (cmd === "resize") {
        const image = await weeby.effects.resize({ width: 400, height: 870, image: message.author.displayAvatarURL({ format: "png", size: 1024 }) });

        const embed = new MessageEmbed()
            .setTitle(`**Resize**`)
            .setColor(`#E881D1`)
            .attachFiles({ attachment: image, name: "resize.png" })
            .setImage("attachment://resize.png");

        message.channel.send(embed);
    }

    if (cmd === "lyrics") {
        const lyrics = await weeby.json.lyrics("Thriller");

        console.log(lyrics.lyrics); // Due to the character limit on Discord Embeds. The lyrics will be logged to the console to show that it was fetched successfully.

        const embed = new MessageEmbed()
            .setTitle(`**Lyrics**`)
            .setColor(`#E881D1`)
            .setThumbnail(lyrics.track.thumbnail)
            .setDescription(stripIndents`
      `)
            .addFields([
                {
                    name: "**🎵 Track**",
                    value: lyrics.track.name,
                    inline: true
                },
                {
                    name: "**👨‍🎤 Artist**",
                    value: lyrics.artist.name,
                    inline: true
                },
                {
                    name: "\u200B",
                    value: "\u200B",
                    inline: true
                }
            ]);

        message.channel.send(embed);
    }

    if (cmd === "stats") {
        const res = await weeby.json.stats();

        const embed = new MessageEmbed()
            .setTitle(`**Weeby API Statistics**`)
            .setColor(`#e6aded`)
            .addFields(
                {
                    name: "**Requests**",
                    value: stripIndents`
                    Generators **» \`${res.category.generators}\`**
                    GIF **» \`${res.category.gif}\`**
                    Custom **» \`${res.category.custom}\`**
                    JSON **» \`${res.category.json}\`**
                    Effects **» \`${res.category.effects}\`**
                    Overlays **» \`${res.category.overlays}\`**    
                    `,
                    inline: true
                },
                {
                    name: "**Usage**",
                    value: stripIndents`
                    Memory **» \`${res.usage.memory}mb\`**
                    CPU **» \`${res.usage.cpu}%\`**
                    Node CPU **» \`${res.usage.nodeCPU}%\`**        
                    `,
                    inline: true
                },
                {
                    name: "**Misc.**",
                    value: stripIndents`
                    Registered Users **» \`${res.registeredUsers}\`**
                    Lifetime Requests **» \`${res.lifetimeRequests}\`**
                    `,
                    inline: true
                }
            );

        message.channel.send(embed);
    }
});

client.login(process.env.TOKEN);
