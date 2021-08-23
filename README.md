<a href="https://weebyapi.xyz/"><img src="https://assets.weebyapi.xyz/img/static/WeebyJSWrapper.png" width="auto" height="200"></a>

# Weeby-JS
Official JavaScript API Wrapper for [Weeby API](https://weebyapi.xyz/).

[![NPM](https://nodei.co/npm/weeby-js.png)](https://nodei.co/npm/weeby-js/)

## ⭐️ Features
- Super simple and easy to use
- Built in documentation
- Includes all methods from Weeby API
- Object-Oriented
- Beginner friendly

## 💾 Installation
```bash
npm install weeby-js --save
```

## 🗝 Authentication
`weeby-js` requires an authorization token which can be obtained by joining the [NTM Discord Server](https://weebyapi.xyz/discord), and then messaging the Weeby API Bot with the `w!apply` command. To learn more in deep about the application process, please visit the [Weeby API Website](https://weebyapi.xyz/). 

> Upon being accepted into Weeby API. It is very important to **never** show this token to anybody.

## 🏳 Examples
### GIF:
```js
const WeebyAPI = require("weeby-js");
const weeby = new WeebyAPI("YOUR_TOKEN");

let gif = await weeby.gif.fetch("pat");
console.log(gif); // -> https://weebyapi.xyz/img/gif/pat/13.gif
```

### Generator:
```js
const WeebyAPI = require("weeby-js");
const weeby = new WeebyAPI("YOUR_TOKEN");

let image = await weeby.generators.oneImage({ type: "3000years", image: "https://i.imgur.com/ZgrxPgU.png" });
message.channel.send({files: [{ attachment: image }]}); // -> Image Buffer
```

### Lyrics:
```js
const WeebyAPI = require("weeby-js");
const weeby = new WeebyAPI("YOUR_TOKEN");

let lyrics = await weeby.generators.lyrics("Thriller");
message.channel.send(lyrics.track.name); // -> Object
```


More Examples can be found in `/test/bot-v12.js`.
> NOTE: Bot Example is outdated and is strongly discouraged from production use.

## ⌨️ Functions
> Note: You must use `await` on all functions, or else you will get errors. 

> Also The functions documented here will be temporary unless I find a developer who is capable of documenting these better. :)

### Generators ([View](https://weebyapi.xyz/api/docs#generators))
```js
// One Image
await weeby.generators.oneImage({ type: String, image: String<url> });

// Two Images
await weeby.generators.twoImages({ type: String, firstImage: String<url>, secondImage: String<url> });

// Text
await weeby.generators.text({ type: String, text: String });

// Two Text
await weeby.generators.twoText({ type: String, textOne: String, textTwo: String });

// Image and Text
await weeby.generators.textImage({ type: String, image: String<url>, text: String });

// Friendship
await weeby.generators.friendship({ firstImage: String<url>, secondImage: String<url>, firstText: String, secondText: String });

// Demotivational
await weeby.generators.demotivational({ image: String<url>, title: String, text: String });

// RIP
await weeby.generators.rip({ avatar: String<url>, username: String, message: String });

// Tweet
await weeby.generators.tweet({ avatar: String<url>, username: String, tweet: String });

// Tweet Fetch (using Twitter API)
await weeby.generators.tweetFetch({ username: String, tweet: String });

// Spotify Search
await weeby.generators.spotifySearch({ type: String, query: String });

// Spotify Now Playing
await weeby.generators.spotifyNp({ image: String<url>, songName: String, artist: String, userPicks: String });

// Currency
await weeby.generators.currency({ type: String, amount: Number });

// Color
await weeby.generators.color(String<hex>);
```
### Custom ([View](https://weebyapi.xyz/api/docs#section2))
```js
// Greeting
await weeby.custom.greeting(options: Object);

// Booster
await weeby.custom.booster(options: Object);

// Rank
await weeby.custom.rank(options: Object);

// Level Up
await weeby.custom.levelUp(options: Object);
```
### GIF ([View](https://weebyapi.xyz/api/docs#gif))
```js
await weeby.gif.fetch(String<type>);
```
### JSON ([View](https://weebyapi.xyz/api/docs#json))
```js
// Random Word
await weeby.json.word(String<type>);

// Formatted Text
await weeby.json.textFormat({ type: String, text: String });

// Response
await weeby.json.response(String<type>);

// Lyrics
await weeby.json.lyrics(String<query>);

// Weeby API Statistics
await weeby.json.stats();
```

### Effects ([View](https://weebyapi.xyz/api/docs#effects))
```js
// General
await weeby.json.general({ type: String, image: String<url> });

// Intensity
await weeby.json.intensity({ type: String, intensity: Number, image: String<url> });

// Level
await weeby.json.level({ type: String, level: Number, image: String<url> });

// Resize Image
await weeby.json.resize({ width: Number, height: Number, image: String<url> });
```

### Overlays ([View](https://weebyapi.xyz/api/docs#overlays))
```js
await weeby.overlays.fetch({ type: String, image: String<url> });
```

## 👋🏻 Support
If you have found an issue while using this wrapper or have any suggestions? Feel free to join the [NTM Discord Server](https://weebyapi.xyz/discord), send an [issue](https://github.com/ntm-development/weeby-js/issues/new) or [pull request](https://github.com/ntm-development/weeby-js/pulls). We'll be happy to help and take a look! 

## ❤️ Thanks!
Thanks for checking out `weeby-js`, a NPM module development and maintained by NTM Development.

I am currently maintaining this during my spare time, so if you would like to support me, Feel free to do so by donating [here](https://buymeacoffee.com/ntmnathan) on Buy me a coffee.

Also, don't forget to star the repo! 😋

## ⚖️ License
The `GNU General Public License v3.0` applies to this repository. Please see the `LICENSE` file to learn more.