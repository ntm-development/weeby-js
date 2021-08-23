---
title: custom
---

# custom

<a name="Custom"></a>

## Custom
**Kind**: global class  

* [Custom](#Custom)
    * [.greeting(options)](#Custom+greeting) ⇒ <code>Promise.&lt;buffer&gt;</code>
    * [.booster(options)](#Custom+booster) ⇒ <code>Promise.&lt;buffer&gt;</code>
    * [.rank(options)](#Custom+rank) ⇒ <code>Promise.&lt;buffer&gt;</code>
    * [.levelUp(options)](#Custom+levelUp) ⇒ <code>Promise.&lt;buffer&gt;</code>

<a name="Custom+greeting"></a>

### custom.greeting(options) ⇒ <code>Promise.&lt;buffer&gt;</code>
Creates a customisable greeting image with Icon, Name, Greet and Background. Optional parameters can let you customise the color of each element, or let you add a message.

**Kind**: instance method of [<code>Custom</code>](#Custom)  
**Returns**: <code>Promise.&lt;buffer&gt;</code> - The generated image in a buffer.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | <code>Object</code> |  | The options that contain the required parameters. |
| options.icon | <code>string</code> |  | The link to an image (.png, .jpg, .gif) |
| options.background | <code>string</code> |  | The link to an image (.png, .jpg, .gif) (1024x470 recommended) |
| options.name | <code>string</code> |  | The name of the greeted user. |
| options.greet | <code>string</code> |  | What should the user be greeted with? |
| [options.message] | <code>string</code> |  | Provide a message on the bottom of the user's name. |
| [options.greetHex] | <code>string</code> | <code>&quot;000000&quot;</code> | The color of the greet text. (Do not include the hashtag). |
| [options.nameHex] | <code>string</code> | <code>&quot;000000&quot;</code> | The color of the name text. (Do not include the hashtag). |
| [options.circleHex] | <code>string</code> | <code>&quot;000000&quot;</code> | The color of the avatar border. (Do not include the hashtag). |
| [options.messageHex] | <code>string</code> | <code>&quot;000000&quot;</code> | The color of the message text. (Do not include the hashtag). |

<a name="Custom+booster"></a>

### custom.booster(options) ⇒ <code>Promise.&lt;buffer&gt;</code>
Creates a customisable booster add/remove image with Icon, Name and Background. Optional queries can let you customise the color of each element.

**Kind**: instance method of [<code>Custom</code>](#Custom)  
**Returns**: <code>Promise.&lt;buffer&gt;</code> - The generated image in a buffer.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| options | <code>Object</code> |  | The options that contain the required parameters. |
| options.icon | <code>string</code> |  | The link to an image (.png, .jpg, .gif) |
| options.background | <code>string</code> |  | The link to an image (.png, .jpg, .gif) (1024x470 recommended) |
| options.name | <code>string</code> |  | The name of the user who boosted the server. |
| options.title | <code>string</code> |  | The title of the booster card. |
| [options.message] | <code>string</code> |  | Provide a message on the bottom of title. |
| [options.titleHex] | <code>string</code> | <code>&quot;f47fff&quot;</code> | The color of the title text. (Do not include the hashtag). |
| [options.nameHex] | <code>string</code> | <code>&quot;FFFFFF&quot;</code> | The color of the name text. (Do not include the hashtag). |
| [options.circleHex] | <code>string</code> | <code>&quot;9f50a7&quot;</code> | The color of the avatar border. (Do not include the hashtag). |
| [options.messageHex] | <code>string</code> | <code>&quot;9f50a7&quot;</code> | The color of the message text. (Do not include the hashtag). |

<a name="Custom+rank"></a>

### custom.rank(options) ⇒ <code>Promise.&lt;buffer&gt;</code>
Creates a customisable rank card with Icon, Name, and leveling stats.

**Kind**: instance method of [<code>Custom</code>](#Custom)  
**Returns**: <code>Promise.&lt;buffer&gt;</code> - The generated image in a buffer.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options that contain the required parameters. |
| options.avatar | <code>string</code> | The link to an image (.png, .jpg, .gif) |
| options.username | <code>string</code> | The username to print. |
| options.bgColor | <code>string</code> | The color of the background. |
| options.level | <code>number</code> | The Level the user is currently on. |
| options.xp | <code>number</code> | How much XP the user has. |

<a name="Custom+levelUp"></a>

### custom.levelUp(options) ⇒ <code>Promise.&lt;buffer&gt;</code>
Creates a customisable level up card.

**Kind**: instance method of [<code>Custom</code>](#Custom)  
**Returns**: <code>Promise.&lt;buffer&gt;</code> - The generated image in a buffer.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options that contain the required parameters. |
| options.avatar | <code>string</code> | The link to an image (.png, .jpg, .gif) |
| options.bgColor | <code>string</code> | The color of the background. (Do not include the hashtag). |
| options.borderColor | <code>string</code> | The color of the avatar border. (Do not include the hashtag). |
| options.oldlevel | <code>number</code> | The old level of the user. |
| options.newlevel | <code>number</code> | The new level of the user. |

