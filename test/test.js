require("dotenv").config();
const WeebyAPI = require("../src/index"); // Change this to: require("weeby-js")
const weeby = new WeebyAPI(process.env.WEEBYAPI);

(async () => {
    const translatedResponse = await weeby.utility.translate({ from: "en", to: "fr", text: "Hello World" });

    console.log(translatedResponse);
})();
