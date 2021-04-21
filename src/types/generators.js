/* To Do:
* Tweet
* Tweet Fetch
* Spotify Search
* Spotify Now Playing
*/
const { get } = require("node-superfetch");
const chalk = require("chalk");
const { version } = require("../../package.json");
const oneImage = require("../assets/generators/oneImage.json");
const twoImages = require("../assets/generators/twoImages.json");
const texts = require("../assets/generators/text.json");
const twoTexts = require("../assets/generators/twoText.json");
const textImage = require("../assets/generators/textImage.json");

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

  /**
    * Draws an image and text on a requested generator. Please see https://weebyapi.xyz/api/docs#section1 for the available generators.
    * @param {string} type - The type of Generator
    * @param {string} image - The link to an image (.png, .jpg, .gif)
    * @param {string} text - The text to print.
    * @returns {Promise<buffer>} The generated image in a buffer.
    */
  async textImage({ type: type, image: image, text: text }) {
    try {
      if (typeof image !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Image parameter is not a string.")}`);
      if (typeof text !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Text parameter is not a string.")}`);
      if (!image) throw new TypeError(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Image parameter is missing. You will need to provide a valid image link.")}`);
      if (!text) throw new TypeError(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Text parameter is missing. You will need to provide some text.")}`);

      if (textImage.includes(type)) {
        const { body } = await get(`${this.baseURL}/${type}`)
          .set("Authorization", `Bearer ${this.token}`)
          .set("User-Agent", `Weeby-JS by NTM Development » v${version}`)
          .query({ image: image, text: text });

        return body;
      } else {
        throw new TypeError(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The generator you tried to request was not found. Make sure it is spelt correctly.")}`);
      }
    } catch (e) {
      throw new Error(e);
    }
  }

  /**
    * Prints two images and texts on a friendship banner. Please see https://weebyapi.xyz/api/docs#section1 for the available generators.
    * @param {string} firstImage - The link to the first image (.png, .jpg, .gif)
    * @param {string} secondImage - The link to the second image (.png, .jpg, .gif)
    * @param {string} firstText - The first text to print.
    * @param {string} secondText - The second text to print.
    * @returns {Promise<buffer>} The generated image in a buffer.
    */
  async friendship({ firstImage: firstImage, secondImage: secondImage, firstText: firstText, secondText: secondText }) {
    try {
      if (typeof firstImage !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The First Image parameter is not a string.")}`);
      if (typeof secondImage !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Second Image parameter is not a string.")}`);
      if (typeof firstText !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The First Text parameter is not a string.")}`);
      if (typeof secondText !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Second Text parameter is not a string.")}`);
      if (!firstImage) throw new TypeError(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("First Image parameter is missing. You will need to provide a valid image link.")}`);
      if (!secondImage) throw new TypeError(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Second Image parameter is missing. You will need to provide a valid image link.")}`);
      if (!firstText) throw new TypeError(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("First Text parameter is missing. You will need to provide some text.")}`);
      if (!secondText) throw new TypeError(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Second Text parameter is missing. You will need to provide some text.")}`);

      const { body } = await get(`${this.baseURL}/friendship`)
        .set("Authorization", `Bearer ${this.token}`)
        .set("User-Agent", `Weeby-JS by NTM Development » v${version}`)
        .query({ firstimage: firstImage, secondimage: secondImage, firsttext: firstText, secondtext: secondText });

      return body;
    } catch (e) {
      throw new Error(e);
    }
  }

  /**
    * Draws an image, title and text on a demotivational poster. Please see https://weebyapi.xyz/api/docs#section1 for the available generators.
    * @param {string} image - The link to an image (.png, .jpg, .gif)
    * @param {string} title - The title text to print.
    * @param {string} text - The text to print.
    * @returns {Promise<buffer>} The generated image in a buffer.
    */
  async demotivational({ image: image, title: title, text: text }) {
    try {
      if (typeof image !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Image parameter is not a string.")}`);
      if (typeof title !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Title parameter is not a string.")}`);
      if (typeof text !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Text parameter is not a string.")}`);
      if (!image) throw new TypeError(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Image parameter is missing. You will need to provide a valid image link.")}`);
      if (!title) throw new TypeError(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Title parameter is missing. You will need to provide some text.")}`);
      if (!text) throw new TypeError(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Text parameter is missing. You will need to provide some text.")}`);

      const { body } = await get(`${this.baseURL}/demotivational`)
        .set("Authorization", `Bearer ${this.token}`)
        .set("User-Agent", `Weeby-JS by NTM Development » v${version}`)
        .query({ image: image, title: title, text: text });

      return body;
    } catch (e) {
      throw new Error(e);
    }
  }

  /**
    * Draws a image, username and message on a Gravestone. Please see https://weebyapi.xyz/api/docs#section1 for the available generators.
    * @param {string} avatar - The link to an image (.png, .jpg, .gif)
    * @param {string} username - The username to print.
    * @param {string} message - The text to print.
    * @returns {Promise<buffer>} The generated image in a buffer.
    */
  async rip({ avatar: avatar, username: username, message: message }) {
    try {
      if (typeof avatar !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Avatar parameter is not a string.")}`);
      if (typeof username !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Username parameter is not a string.")}`);
      if (typeof message !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Message parameter is not a string.")}`);
      if (!avatar) throw new TypeError(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Avatar parameter is missing. You will need to provide a valid image link.")}`);
      if (!username) throw new TypeError(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Username parameter is missing. You will need to provide some text.")}`);
      if (!message) throw new TypeError(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Message parameter is missing. You will need to provide some text.")}`);

      const { body } = await get(`${this.baseURL}/rip`)
        .set("Authorization", `Bearer ${this.token}`)
        .set("User-Agent", `Weeby-JS by NTM Development » v${version}`)
        .query({ avatar: avatar, username: username, message: message });

      return body;
    } catch (e) {
      throw new Error(e);
    }
  }

  /**
    * Returns the colour in a Image (Buffer) format. Please see https://weebyapi.xyz/api/docs#section1 for the available generators.
    * @param {string} hex - The hex color (Do not include the hashtag).
    * @returns {Promise<buffer>} The generated image in a buffer.
    */
  async color(hex) {
    try {
      if (typeof hex !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The hex parameter is not a string.")}`);
      if (!hex) throw new TypeError(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Hex parameter is missing. You will need to provide the type of generator.")}`);

      const { body } = await get(`${this.baseURL}/color`)
        .set("Authorization", `Bearer ${this.token}`)
        .set("User-Agent", `Weeby-JS by NTM Development » v${version}`)
        .query({ hex });

      return body;
    } catch (e) {
      throw new Error(e);
    }
  }

}

module.exports = Generators;
