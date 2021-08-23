---
title: json
---

# json

## Classes

<dl>
<dt><a href="#JSON">JSON</a></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#lyricsResponse">lyricsResponse</a> : <code>Object</code></dt>
<dd><p>The response for json.lyrics</p>
</dd>
</dl>

<a name="JSON"></a>

## JSON
**Kind**: global class  

* [JSON](#JSON)
    * [.word(type)](#JSON+word) ⇒ <code>Promise.&lt;string&gt;</code>
    * [.response(type)](#JSON+response) ⇒ <code>Promise.&lt;string&gt;</code>
    * [.textFormat(options)](#JSON+textFormat) ⇒ <code>Promise.&lt;string&gt;</code>
    * [.lyrics(query)](#JSON+lyrics) ⇒ [<code>Promise.&lt;lyricsResponse&gt;</code>](#lyricsResponse)
    * [.stats()](#JSON+stats) ⇒ <code>Promise.&lt;Object&gt;</code>

<a name="JSON+word"></a>

### json.word(type) ⇒ <code>Promise.&lt;string&gt;</code>
Returns a random word. (list endpoint not supported)

**Kind**: instance method of [<code>JSON</code>](#JSON)  
**Returns**: <code>Promise.&lt;string&gt;</code> - The response in a string.  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | The Type of JSON response to request. See https://weebyapi.xyz/api/docs#json for all the JSON endpoints. |

<a name="JSON+response"></a>

### json.response(type) ⇒ <code>Promise.&lt;string&gt;</code>
Returns a random response.

**Kind**: instance method of [<code>JSON</code>](#JSON)  
**Returns**: <code>Promise.&lt;string&gt;</code> - The response in a string.  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | The Type of JSON response to request. See https://weebyapi.xyz/api/docs#json for all the JSON endpoints. |

<a name="JSON+textFormat"></a>

### json.textFormat(options) ⇒ <code>Promise.&lt;string&gt;</code>
Returns a random response.

**Kind**: instance method of [<code>JSON</code>](#JSON)  
**Returns**: <code>Promise.&lt;string&gt;</code> - The response in a string.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options that contain the required parameters. |
| options.type | <code>string</code> | The type of text formatter. |
| options.text | <code>string</code> | The text to format. |

<a name="JSON+lyrics"></a>

### json.lyrics(query) ⇒ [<code>Promise.&lt;lyricsResponse&gt;</code>](#lyricsResponse)
Fetches lyrics from the Genius API.

**Kind**: instance method of [<code>JSON</code>](#JSON)  
**Returns**: [<code>Promise.&lt;lyricsResponse&gt;</code>](#lyricsResponse) - The lyrics and its informtation.  

| Param | Type | Description |
| --- | --- | --- |
| query | <code>string</code> | The lyrics to search. See https://weebyapi.xyz/api/docs#json for all the JSON endpoints. |

<a name="JSON+stats"></a>

### json.stats() ⇒ <code>Promise.&lt;Object&gt;</code>
Fetches Weeby API's current statistics.

**Kind**: instance method of [<code>JSON</code>](#JSON)  
**Returns**: <code>Promise.&lt;Object&gt;</code> - The statistics returned in a object.  
<a name="lyricsResponse"></a>

## lyricsResponse : <code>Object</code>
The response for json.lyrics

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>Number</code> | The ID of the song. |
| url | <code>String</code> | The Genius Lyrics URL. |
| track | <code>Object</code> | The track object. |
| track.name | <code>String</code> | The name of the song. |
| track.thumbnail | <code>String</code> | The thumbnail of the song. |
| track.media | <code>String</code> | The URL of the song. |
| artist | <code>Object</code> | The artist object. |
| artist.name | <code>String</code> | The name of the artist. |
| artist.thumbnail | <code>String</code> | The thumbnail of the artist. |
| artist.id | <code>Number</code> | The ID of the artist. |
| artist | <code>Object</code> | The artist object. |
| album | <code>Object</code> | The album object. |
| album.name | <code>String</code> | The name of the album. |
| album.thumbnail | <code>String</code> | The thumbnail of the album. |
| album.id | <code>Number</code> | The ID of the album. |
| colors | <code>Object</code> | The colors object. |
| colors.songArtPrimary | <code>String</code> | The primary color of the song art. |
| colors.songArtSecondary | <code>String</code> | The secondary color of the song art. |
| colors.songArtText | <code>String</code> | The text color of the song art. |
| stats | <code>Object</code> | The stats object. |
| stats.hot | <code>boolean</code> | The number of views. |
| stats.pageViews | <code>Number</code> | The number of page views. |
| stats.contributors | <code>Number</code> | The number of contributors. |
| stats.transcribers | <code>Number</code> | The number of transcribers. |
| stats.accepted_annotations | <code>Number</code> | The number of accepted annotations. |
| album.recordingLocation | <code>recordingLocation</code> | The recording location of the song/album. |
| album.releaseDate | <code>String</code> | The release date of the song. |
| album.formattedReleaseDate | <code>String</code> | The formatted version of the release date. |
| lyrics | <code>String</code> | The lyrics of the song. |

