const { get } = require("node-superfetch");
const chalk = require("chalk");
const { version } = require("../../package.json");
const gifs = require("../assets/gif.json");

class GIF {

  constructor(token, baseURL) {
    /** @access private */
    this.token = token;
    /** @access private */
    this.baseURL = baseURL;
  }

  /**
    * Returns a random GIF image of the type provided.
    * @param {string} type - The Type of GIF. See https://weebyapi.xyz/api/docs#section3 for all the GIFs.
    * @returns {Promise<string>} The Formatted GIF URL.
    */
  async fetch(type) {
    if (typeof type !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Type parameter is not a string.")}`);
    if (!type) throw new TypeError(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Type parameter is missing. You will need to provide the type of GIF.")}`);

    const { body } = await get(`${this.baseURL}/${type}`)
      .set("Authorization", `Bearer ${this.token}`)
      .set("User-Agent", `Weeby-JS by NTM Development » v${version}`);

    if (gifs.includes(type)) {
      return body.formattedURL;
    } else {
      throw new TypeError(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The GIF you tried to request was not found. Make sure it is spelt correctly.")}`);
    }
  }

}

module.exports = GIF;
