# Examples

### GIF:
```js
const WeebyAPI = require('weeby-js');
const weeby = new WeebyAPI('YOUR_TOKEN');

const gif = await weeby.gif.fetch('pat');
console.log(gif); // -> https://cdn.weebyapi.xyz/img/gif/pat/13.gif
```

### Generator:
```js
const WeebyAPI = require('weeby-js');
const weeby = new WeebyAPI('YOUR_TOKEN');

const image = await weeby.generators.oneImage({ type: '3000years', image: 'https://i.imgur.com/qgKvcQv.png' });
return image; // -> Image Buffer
```

### Custom:
```js
const WeebyAPI = require('weeby-js');
const weeby = new WeebyAPI('YOUR_TOKEN');

const image = await weeby.custom.greeting({ icon: 'https://i.imgur.com/qgKvcQv.png', background: 'https://i.imgur.com/ENbvdWD.png', greet: 'Welcome', name: 'Nate', message: 'Hello and Welcome!', greetHex: 'E881D1', messageHex: '76d6ff', circleHex: '6b6d75', nameHex: 'e889e0', font: 'riffic' });

return image; // -> Image Buffer
```