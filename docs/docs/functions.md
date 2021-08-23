# Functions
> Note: You must use `await` on all functions, or else you will get errors. 

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