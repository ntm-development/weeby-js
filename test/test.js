// Change this to: require("weeby-js")

require('dotenv').config();
const WeebyAPI = require('../src/index');
const weeby = new WeebyAPI(process.env.WEEBYAPI);

(async () => {
	const translatedResponse = await weeby.utility.translate({ from: 'en', to: 'fr', text: 'Hello World' });

	console.log(translatedResponse);
})();
