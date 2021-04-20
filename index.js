const chalk = require("chalk");
const Generators = require("./src/types/generators");
const GIF = require("./src/types/gif");
/* const Effects = require("./src/types/effects");
const Overlays = require("./src/types/overlays");
const JSON = require("./src/types/json");
const Custom = require("./src/types/custom"); */
const { version } = require("./package.json");

/**
* @class Client
* @classdesc weeby-js - The official JavaScript wrapper for Weeby API. https://weebyapi.xyz/
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
  }

}

module.exports = WeebyAPI;
