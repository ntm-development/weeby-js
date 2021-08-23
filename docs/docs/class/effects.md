---
title: effects
---

# effects

<a name="Effects"></a>

## Effects
**Kind**: global class  

* [Effects](#Effects)
    * [.general(options)](#Effects+general) ⇒ <code>Promise.&lt;buffer&gt;</code>
    * [.intensity(options)](#Effects+intensity) ⇒ <code>Promise.&lt;buffer&gt;</code>
    * [.level(options)](#Effects+level) ⇒ <code>Promise.&lt;buffer&gt;</code>
    * [.resize(options)](#Effects+resize) ⇒ <code>Promise.&lt;buffer&gt;</code>

<a name="Effects+general"></a>

### effects.general(options) ⇒ <code>Promise.&lt;buffer&gt;</code>
Applies an effect to the provided image. Please see https://weebyapi.xyz/api/docs#effects for the available effects.

**Kind**: instance method of [<code>Effects</code>](#Effects)  
**Returns**: <code>Promise.&lt;buffer&gt;</code> - The generated image in a buffer.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options that contain the required parameters. |
| options.type | <code>string</code> | The Type of Effect to use. |
| options.image | <code>string</code> | The link to an image (.png, .jpg, .gif) |

<a name="Effects+intensity"></a>

### effects.intensity(options) ⇒ <code>Promise.&lt;buffer&gt;</code>
Applies an effect to the provided image that can change the level. Please see https://weebyapi.xyz/api/docs#effects for the available effects.

**Kind**: instance method of [<code>Effects</code>](#Effects)  
**Returns**: <code>Promise.&lt;buffer&gt;</code> - The generated image in a buffer.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options that contain the required parameters. |
| options.type | <code>string</code> | The Type of Effect to use. |
| options.intensity | <code>number</code> | The intensity of the effect. |
| options.image | <code>string</code> | The link to an image (.png, .jpg, .gif) |

<a name="Effects+level"></a>

### effects.level(options) ⇒ <code>Promise.&lt;buffer&gt;</code>
Applies an effect to the provided image that can change the level. Please see https://weebyapi.xyz/api/docs#effects for the available effects.

**Kind**: instance method of [<code>Effects</code>](#Effects)  
**Returns**: <code>Promise.&lt;buffer&gt;</code> - The generated image in a buffer.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options that contain the required parameters. |
| options.type | <code>string</code> | The Type of Effect to use. |
| options.level | <code>number</code> | The level of the effect. |
| options.image | <code>string</code> | The link to an image (.png, .jpg, .gif) |

<a name="Effects+resize"></a>

### effects.resize(options) ⇒ <code>Promise.&lt;buffer&gt;</code>
Resizes a provided image.

**Kind**: instance method of [<code>Effects</code>](#Effects)  
**Returns**: <code>Promise.&lt;buffer&gt;</code> - The generated image in a buffer.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options that contain the required parameters. |
| options.width | <code>string</code> | The width of the resized image. (1-2000) |
| options.height | <code>number</code> | The height of the resized image. (1-2000) |
| options.image | <code>string</code> | The link to an image (.png, .jpg, .gif) |

