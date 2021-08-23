---
title: generators
---

# generators

<a name="Generators"></a>

## Generators
**Kind**: global class  

* [Generators](#Generators)
    * [.oneImage(options)](#Generators+oneImage) ⇒ <code>Promise.&lt;buffer&gt;</code>
    * [.twoImages(options)](#Generators+twoImages) ⇒ <code>Promise.&lt;buffer&gt;</code>
    * [.text(options)](#Generators+text) ⇒ <code>Promise.&lt;buffer&gt;</code>
    * [.twoText(options)](#Generators+twoText) ⇒ <code>Promise.&lt;buffer&gt;</code>
    * [.textImage(options)](#Generators+textImage) ⇒ <code>Promise.&lt;buffer&gt;</code>
    * [.friendship(options)](#Generators+friendship) ⇒ <code>Promise.&lt;buffer&gt;</code>
    * [.demotivational(options)](#Generators+demotivational) ⇒ <code>Promise.&lt;buffer&gt;</code>
    * [.rip(options)](#Generators+rip) ⇒ <code>Promise.&lt;buffer&gt;</code>
    * [.tweet(options)](#Generators+tweet) ⇒ <code>Promise.&lt;buffer&gt;</code>
    * [.tweetFetch(options)](#Generators+tweetFetch) ⇒ <code>Promise.&lt;buffer&gt;</code>
    * [.spotifySearch(options)](#Generators+spotifySearch) ⇒ <code>Promise.&lt;buffer&gt;</code>
    * [.spotifyNp(options)](#Generators+spotifyNp) ⇒ <code>Promise.&lt;buffer&gt;</code>
    * [.currency(options)](#Generators+currency) ⇒ <code>Promise.&lt;buffer&gt;</code>
    * [.color(hex)](#Generators+color) ⇒ <code>Promise.&lt;buffer&gt;</code>

<a name="Generators+oneImage"></a>

### generators.oneImage(options) ⇒ <code>Promise.&lt;buffer&gt;</code>
Draws one image on a requested image generator. Please see https://weebyapi.xyz/api/docs#generators for the available generators.

**Kind**: instance method of [<code>Generators</code>](#Generators)  
**Returns**: <code>Promise.&lt;buffer&gt;</code> - The generated image in a buffer.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options that contain the required parameters. |
| options.type | <code>string</code> | The Type of Generator. |
| options.image | <code>string</code> | The link to an image (.png, .jpg, .gif) |

<a name="Generators+twoImages"></a>

### generators.twoImages(options) ⇒ <code>Promise.&lt;buffer&gt;</code>
Draws two images on a requested image generator. Please see https://weebyapi.xyz/api/docs#generators for the available generators.

**Kind**: instance method of [<code>Generators</code>](#Generators)  
**Returns**: <code>Promise.&lt;buffer&gt;</code> - The generated image in a buffer.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options that contain the required parameters. |
| options.type | <code>string</code> | The Type of Generator. |
| options.firstImage | <code>string</code> | The link to the first image (.png, .jpg, .gif) |
| options.secondImage | <code>string</code> | The link to the second image (.png, .jpg, .gif) |

<a name="Generators+text"></a>

### generators.text(options) ⇒ <code>Promise.&lt;buffer&gt;</code>
Prints text on a requested image generator. Please see https://weebyapi.xyz/api/docs#generators for the available generators.

**Kind**: instance method of [<code>Generators</code>](#Generators)  
**Returns**: <code>Promise.&lt;buffer&gt;</code> - The generated image in a buffer.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options that contain the required parameters. |
| options.type | <code>string</code> | The Type of Generator. |
| options.text | <code>string</code> | The text to print. |

<a name="Generators+twoText"></a>

### generators.twoText(options) ⇒ <code>Promise.&lt;buffer&gt;</code>
Prints two texts on a requested image generator. Please see https://weebyapi.xyz/api/docs#generators for the available generators.

**Kind**: instance method of [<code>Generators</code>](#Generators)  
**Returns**: <code>Promise.&lt;buffer&gt;</code> - The generated image in a buffer.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options that contain the required parameters. |
| options.type | <code>string</code> | The Type of Generator. |
| options.textOne | <code>string</code> | The first text to print. |
| options.textTwo | <code>string</code> | The second text to print. |

<a name="Generators+textImage"></a>

### generators.textImage(options) ⇒ <code>Promise.&lt;buffer&gt;</code>
Draws an image and text on a requested generator. Please see https://weebyapi.xyz/api/docs#generators for the available generators.

**Kind**: instance method of [<code>Generators</code>](#Generators)  
**Returns**: <code>Promise.&lt;buffer&gt;</code> - The generated image in a buffer.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options that contain the required parameters. |
| options.type | <code>string</code> | The type of Generator |
| options.image | <code>string</code> | The link to an image (.png, .jpg, .gif) |
| options.text | <code>string</code> | The text to print. |

<a name="Generators+friendship"></a>

### generators.friendship(options) ⇒ <code>Promise.&lt;buffer&gt;</code>
Prints two images and texts on a friendship banner. Please see https://weebyapi.xyz/api/docs#generators for the available generators.

**Kind**: instance method of [<code>Generators</code>](#Generators)  
**Returns**: <code>Promise.&lt;buffer&gt;</code> - The generated image in a buffer.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options that contain the required parameters. |
| options.firstImage | <code>string</code> | The link to the first image (.png, .jpg, .gif) |
| options.secondImage | <code>string</code> | The link to the second image (.png, .jpg, .gif) |
| options.firstText | <code>string</code> | The first text to print. |
| options.secondText | <code>string</code> | The second text to print. |

<a name="Generators+demotivational"></a>

### generators.demotivational(options) ⇒ <code>Promise.&lt;buffer&gt;</code>
Draws an image, title and text on a demotivational poster. Please see https://weebyapi.xyz/api/docs#generators for the available generators.

**Kind**: instance method of [<code>Generators</code>](#Generators)  
**Returns**: <code>Promise.&lt;buffer&gt;</code> - The generated image in a buffer.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options that contain the required parameters. |
| options.image | <code>string</code> | The link to an image (.png, .jpg, .gif) |
| options.title | <code>string</code> | The title text to print. |
| options.text | <code>string</code> | The text to print. |

<a name="Generators+rip"></a>

### generators.rip(options) ⇒ <code>Promise.&lt;buffer&gt;</code>
Draws a image, username and message on a Gravestone. Please see https://weebyapi.xyz/api/docs#generators for the available generators.

**Kind**: instance method of [<code>Generators</code>](#Generators)  
**Returns**: <code>Promise.&lt;buffer&gt;</code> - The generated image in a buffer.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options that contain the required parameters. |
| options.avatar | <code>string</code> | The link to an image (.png, .jpg, .gif) |
| options.username | <code>string</code> | The username to print. |
| options.message | <code>string</code> | The text to print. |

<a name="Generators+tweet"></a>

### generators.tweet(options) ⇒ <code>Promise.&lt;buffer&gt;</code>
Generates a raw twitter tweet with username, tweet text and avatar. Please see https://weebyapi.xyz/api/docs#generators for the available generators.

**Kind**: instance method of [<code>Generators</code>](#Generators)  
**Returns**: <code>Promise.&lt;buffer&gt;</code> - The generated image in a buffer.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options that contain the required parameters. |
| options.username | <code>string</code> | The username to print. |
| options.tweet | <code>string</code> | The text to print. |
| options.avatar | <code>string</code> | The link to an image (.png, .jpg, .gif) |

<a name="Generators+tweetFetch"></a>

### generators.tweetFetch(options) ⇒ <code>Promise.&lt;buffer&gt;</code>
Generates a twitter tweet with username (fetched from the Twitter API) and the tweet text. Please see https://weebyapi.xyz/api/docs#generators for the available generators.

**Kind**: instance method of [<code>Generators</code>](#Generators)  
**Returns**: <code>Promise.&lt;buffer&gt;</code> - The generated image in a buffer.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options that contain the required parameters. |
| options.username | <code>string</code> | The username to print. |
| options.tweet | <code>string</code> | The text to print. |

<a name="Generators+spotifySearch"></a>

### generators.spotifySearch(options) ⇒ <code>Promise.&lt;buffer&gt;</code>
Generates a Spotify Banner of statistics and information from either music, playlists or users. Please see https://weebyapi.xyz/api/docs#generators for the available generators.

**Kind**: instance method of [<code>Generators</code>](#Generators)  
**Returns**: <code>Promise.&lt;buffer&gt;</code> - The generated image in a buffer.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options that contain the required parameters. |
| options.type | <code>&#x27;album&#x27;</code> \| <code>&#x27;artist&#x27;</code> \| <code>&#x27;playlist&#x27;</code> \| <code>&#x27;track&#x27;</code> \| <code>&#x27;user&#x27;</code> | The type of Spotify Search. (album, artist, playlist, track or user) |
| options.query | <code>string</code> | The value to search up. (Use %20 for spaces) |

<a name="Generators+spotifyNp"></a>

### generators.spotifyNp(options) ⇒ <code>Promise.&lt;buffer&gt;</code>
Generates a Fake Spotify Now Playing Image. Please see https://weebyapi.xyz/api/docs#generators for the available generators.

**Kind**: instance method of [<code>Generators</code>](#Generators)  
**Returns**: <code>Promise.&lt;buffer&gt;</code> - The generated image in a buffer.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options that contain the required parameters. |
| options.image | <code>string</code> | The link to an image (.png, .jpg, .gif) |
| options.songName | <code>string</code> | The name of the song to print. |
| options.artist | <code>string</code> | The artist name to print. |
| options.userPicks | <code>string</code> | The user's picks name to print. |

<a name="Generators+currency"></a>

### generators.currency(options) ⇒ <code>Promise.&lt;buffer&gt;</code>
Generates a image with the specified currency and its amount.

**Kind**: instance method of [<code>Generators</code>](#Generators)  
**Returns**: <code>Promise.&lt;buffer&gt;</code> - The generated image in a buffer.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options that contain the required parameters. |
| options.type | <code>&#x27;dollar&#x27;</code> \| <code>&#x27;euro&#x27;</code> \| <code>&#x27;pound&#x27;</code> \| <code>&#x27;yen&#x27;</code> | The type of currency. |
| options.amount | <code>number</code> | The amount of money to display. |

<a name="Generators+color"></a>

### generators.color(hex) ⇒ <code>Promise.&lt;buffer&gt;</code>
Returns the colour in a Image (Buffer) format. Please see https://weebyapi.xyz/api/docs#generators for the available generators.

**Kind**: instance method of [<code>Generators</code>](#Generators)  
**Returns**: <code>Promise.&lt;buffer&gt;</code> - The generated image in a buffer.  

| Param | Type | Description |
| --- | --- | --- |
| hex | <code>string</code> | The hex color (Do not include the hashtag). |

