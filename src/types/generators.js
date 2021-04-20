const { get } = require("node-superfetch");
const { version } = require("../../package.json");
const oneImage = require("../assets/generators/oneImage.json");

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
    * Draws one image over the correctly specified generator. Please see https://weebyapi.xyz/api/docs for the available generators.
    * @param {string} type - The Type of Generator.
    * @param {string} image - The link to an image (.png, .jpg, .gif)
    * @returns {Promise<buffer>}
    */
  async oneImage(type, image) {
    try {
      if (typeof image !== "string") throw new Error("Weeby-JS » Image parameter is missing. You will need to provide a valid image link, or the image link is not a string.");
      if (typeof type !== "string") throw new Error("Weeby-JS » Type parameter is missing. You will need to provide a valid one image generator type.");

      if (oneImage.includes(type)) {
        const { body } = await get(`${this.baseURL}/${type}`)
          .set("Authorization", `Bearer ${this.token}`)
          .set("User-Agent", `Weeby-JS by NTM Development » v${version}`)
          .query({ image });

        return body;
      } else {
        throw new Error("Weeby-JS » The generator you tried to request was not found.");
      }
    } catch (e) {
      throw new Error(`Weeby-JS » ${e}`);
    }
  }

}

module.exports = Generators;
