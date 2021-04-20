/* To Do:
* Demotivational
* RIP
* Tweet
* Spotify Search
* Spotify Now Playing
* Color
*/
const { get } = require("node-superfetch");
const chalk = require("chalk");
const { version } = require("../../package.json");
const oneImage = require("../assets/generators/oneImage.json");
const twoImages = require("../assets/generators/twoImages.json");
const texts = require("../assets/generators/text.json");
const twoTexts = require("../assets/generators/twoText.json");

/**
* @class Generators
*/
class Generators {

  constructor(token, baseURL) {
    /** @access private */
    this.token = token;
    /** @access private */
    this.baseURL = baseURL;
  }

  /**
    * Draws one image on a requested image generator. Please see https://weebyapi.xyz/api/docs#section1 for the available generators.
    * @param {string} type - The Type of Generator.
    * @param {string} image - The link to an image (.png, .jpg, .gif)
    * @returns {Promise<buffer>} The generated image in a buffer.
    */
  async oneImage({ type: type, image: image }) {
    try {
      if (typeof type !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Type parameter is not a string.")}`);
      if (typeof image !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Image parameter is not a string.")}`);
      if (!type) throw new TypeError(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Type parameter is missing. You will need to provide the type of generator.")}`);
      if (!image) throw new TypeError(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Image parameter is missing. You will need to provide a valid image link.")}`);


      if (oneImage.includes(type)) {
        const { body } = await get(`${this.baseURL}/${type}`)
          .set("Authorization", `Bearer ${this.token}`)
          .set("User-Agent", `Weeby-JS by NTM Development » v${version}`)
          .query({ image });

        return body;
      } else {
        throw new TypeError(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The generator you tried to request was not found. Make sure it is spelt correctly.")}`);
      }
    } catch (e) {
      throw new Error(e);
    }
  }

  /**
    * Draws two images on a requested image generator. Please see https://weebyapi.xyz/api/docs#section1 for the available generators.
    * @param {string} type - The Type of Generator.
    * @param {string} firstImage - The link to the first image (.png, .jpg, .gif)
    * @param {string} secondImage - The link to the second image (.png, .jpg, .gif)
    * @returns {Promise<buffer>} The generated image in a buffer.
    */
  async twoImages({ type: type, firstImage: firstImage, secondImage: secondImage }) {
    try {
      if (typeof type !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Type parameter is not a string.")}`);
      if (typeof firstImage !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The First Image parameter is not a string.")}`);
      if (typeof secondImage !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Second Image parameter is not a string.")}`);
      if (!type) throw new TypeError(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Type parameter is missing. You will need to provide the type of generator.")}`);
      if (!firstImage) throw new TypeError(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("First Image parameter is missing. You will need to provide a valid image link.")}`);
      if (!secondImage) throw new TypeError(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Second Image parameter is missing. You will need to provide a valid image link.")}`);

      if (twoImages.includes(type)) {
        const { body } = await get(`${this.baseURL}/${type}`)
          .set("Authorization", `Bearer ${this.token}`)
          .set("User-Agent", `Weeby-JS by NTM Development » v${version}`)
          .query({ firstimage: firstImage, secondimage: secondImage });

        return body;
      } else {
        throw new TypeError(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The generator you tried to request was not found. Make sure it is spelt correctly.")}`);
      }
    } catch (e) {
      throw new Error(e);
    }
  }

  /**
    * Prints text on a requested image generator. Please see https://weebyapi.xyz/api/docs#section1 for the available generators.
    * @param {string} type - The Type of Generator.
    * @param {string} text - The text to print.
    * @returns {Promise<buffer>} The generated image in a buffer.
    */
  async text({ type: type, text: text }) {
    try {
      if (typeof type !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Type parameter is not a string.")}`);
      if (typeof text !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Text parameter is not a string.")}`);
      if (!type) throw new TypeError(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Type parameter is missing. You will need to provide the type of generator.")}`);
      if (!text) throw new TypeError(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Text parameter is missing. You will need to provide some text.")}`);

      if (texts.includes(type)) {
        const { body } = await get(`${this.baseURL}/${type}`)
          .set("Authorization", `Bearer ${this.token}`)
          .set("User-Agent", `Weeby-JS by NTM Development » v${version}`)
          .query({ text });

        return body;
      } else {
        throw new TypeError(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The generator you tried to request was not found. Make sure it is spelt correctly.")}`);
      }
    } catch (e) {
      throw new Error(e);
    }
  }

  /**
    * Prints two texts on a requested image generator. Please see https://weebyapi.xyz/api/docs#section1 for the available generators.
    * @param {string} type - The Type of Generator.
    * @param {string} textOne - The first text to print.
    * @param {string} textTwo - The second text to print.
    * @returns {Promise<buffer>} The generated image in a buffer.
    */
  async twoText({ type: type, textOne: textOne, textTwo: textTwo }) {
    try {
      if (typeof type !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Type parameter is not a string.")}`);
      if (typeof textOne !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The First Text parameter is not a string.")}`);
      if (typeof textTwo !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Second Text parameter is not a string.")}`);
      if (!type) throw new TypeError(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Type parameter is missing. You will need to provide the type of generator.")}`);
      if (!textOne) throw new TypeError(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("First Text parameter is missing. You will need to provide some text.")}`);
      if (!textTwo) throw new TypeError(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Second Text parameter is missing. You will need to provide some text.")}`);

      if (twoTexts.includes(type)) {
        const { body } = await get(`${this.baseURL}/${type}`)
          .set("Authorization", `Bearer ${this.token}`)
          .set("User-Agent", `Weeby-JS by NTM Development » v${version}`)
          .query({ textone: textOne, texttwo: textTwo });

        return body;
      } else {
        throw new TypeError(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The generator you tried to request was not found. Make sure it is spelt correctly.")}`);
      }
    } catch (e) {
      throw new Error(e);
    }
  }

}

module.exports = Generators;
