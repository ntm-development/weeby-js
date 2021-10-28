const chalk = require("chalk");
const Generators = require("./lib/generators");
const GIF = require("./lib/gif");
const Overlays = require("./lib/overlays");
const JSON = require("./lib/json");
const Custom = require("./lib/custom");
const Effects = require("./lib/effects");
const Utility = require("./lib/utility");
const { version } = require("../package.json");

/**
* Weeby-JS - The official JavaScript wrapper for Weeby API, developed by NTM Development. Click [here](https://weebyapi.xyz/) for the website.
* @class Client
*/
class WeebyAPI {
    /**
     * @constructor
     * @param {string} token - Your Weeby API Token.
     */
    constructor(token) {
        if (typeof token !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Error whilst attempting to authenticate. Make sure your token is a string.")}`);

        /**
         * The base URL.
         * @type {string}
         */
        this.baseURL = "https://weebyapi.xyz";

        /**
         * The wrapper version.
         * @type {string}
         */
        this.version = version;

        /**
         * The generators module.
         * @type {Generators}
         */
        this.generators = new Generators(token, `${this.baseURL}/generators/`);

        /**
         * The GIF module.
         * @type {GIF}
         */
        this.gif = new GIF(token, `${this.baseURL}/gif/`);

        /**
         * The overlays module.
         * @type {Overlays}
         */
        this.overlays = new Overlays(token, `${this.baseURL}/overlays/`);

        /**
         * The effects module.
         * @type {Effects}
         */
        this.effects = new Effects(token, `${this.baseURL}/effects/`);

        /**
         * The JSON module.
         * @type {JSON}
         */
        this.json = new JSON(token, `${this.baseURL}/json/`);

        /**
         * The custom module.
         * @type {Custom}
         */
        this.custom = new Custom(token, `${this.baseURL}/custom/`);

        /**
         * The utility module.
         * @type {Utility}
         */
        this.utility = new Utility(token, `${this.baseURL}/utility/`);
    }
}

module.exports = WeebyAPI;