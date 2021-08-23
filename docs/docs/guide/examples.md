# Examples

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