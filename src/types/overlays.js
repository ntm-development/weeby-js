const { get } = require("node-superfetch");
const chalk = require("chalk");
const { version } = require("../../package.json");
const overlay = require("../assets/overlays.json");

class Overlays {

  constructor(token, baseURL) {
    /** @access private */
    this.token = token;
    /** @access private */
    this.baseURL = baseURL;
  }

  /**
    * Draws one image on a requested image overlay. Please see https://weebyapi.xyz/api/docs#section6 for the available overlays.
    * @param {Object} options - The options that contain the required parameters.
    * @param {string} options.type - The Type of Overlay.
    * @param {string} options.image - The link to an image (.png, .jpg, .gif)
    * @returns {Promise<buffer>} The generated image in a buffer.
    */
  async fetch(options = {}) {
    try {
      if (typeof options.type !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Type parameter is not a string.")}`);
      if (typeof options.image !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Image parameter is not a string.")}`);
      if (!options.type) throw new TypeError(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Type parameter is missing. You will need to provide the type of overlay.")}`);
      if (!options.image) throw new TypeError(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Image parameter is missing. You will need to provide a valid image link.")}`);


      if (overlay.includes(options.type)) {
        const { body } = await get(`${this.baseURL}/${options.type}`)
          .set("Authorization", `Bearer ${this.token}`)
          .set("User-Agent", `Weeby-JS by NTM Development » v${version}`)
          .query({ image: options.image });

        return body;
      } else {
        throw new TypeError(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The overlay you tried to request was not found. Make sure it is spelt correctly.")}`);
      }
    } catch (e) {
      throw new Error(e);
    }
  }


}

module.exports = Overlays;
