const chalk = require("chalk");
const Generators = require("./src/lib/generators");
const GIF = require("./src/lib/gif");
const Overlays = require("./src/lib/overlays");
const JSON = require("./src/lib/json");
const Custom = require("./src/lib/custom");
const Effects = require("./src/lib/effects");
const { version } = require("./package.json");

/**
* @class Client
* @classdesc weeby-js - The official JavaScript wrapper for Weeby API, developed by NTM Development. Website: https://weebyapi.xyz/
*/
class WeebyAPI {
    /**
       * @constructor
       * @param {string} token - Your Weeby API Token. Get this by applying through the Weeby API bot on the Discord Server. https://discord.com/invite/G2rb53z
       */
    constructor(token) {
        if (typeof token !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Error whilst attempting to authenticate. Make sure your token is a string.")}`);
        this.baseURL = "https://weebyapi.xyz";
        this.version = version;
        this.generators = new Generators(token, `${this.baseURL}/generators/`);
        this.gif = new GIF(token, `${this.baseURL}/gif/`);
        this.overlays = new Overlays(token, `${this.baseURL}/overlays/`);
        this.effects = new Effects(token, `${this.baseURL}/effects/`);
        this.json = new JSON(token, `${this.baseURL}/json/`);
        this.custom = new Custom(token, `${this.baseURL}/custom/`);
    }
}

module.exports = WeebyAPI;