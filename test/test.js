// Change this to: require("weeby-js")

require('dotenv').config();
const WeebyAPI = require('../src/index');
const weeby = new WeebyAPI(process.env.WEEBYAPI);

(async () => {
	const hugResponse = await weeby.gif.fetch('hug', true);

	console.log(hugResponse);
})();
