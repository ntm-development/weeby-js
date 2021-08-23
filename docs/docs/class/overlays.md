---
title: overlays
---

# overlays

<a name="Overlays"></a>

## Overlays
**Kind**: global class  
<a name="Overlays+fetch"></a>

### overlays.fetch(options) ⇒ <code>Promise.&lt;buffer&gt;</code>
Draws one image on a requested image overlay. Please see https://weebyapi.xyz/api/docs#overlays for the available overlays.

**Kind**: instance method of [<code>Overlays</code>](#Overlays)  
**Returns**: <code>Promise.&lt;buffer&gt;</code> - The generated image in a buffer.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options that contain the required parameters. |
| options.type | <code>string</code> | The Type of Overlay. |
| options.image | <code>string</code> | The link to an image (.png, .jpg, .gif) |

