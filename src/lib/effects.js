const { get } = require("node-superfetch");
const chalk = require("chalk");
const { version } = require("../../package.json");
const general = require("../../assets/effects/general.json");
const intensity = require("../../assets/effects/intensity.json");
const level = require("../../assets/effects/level.json");

/**
 * @class Effects
*/
class Effects {
    constructor(token, baseURL) {
        /** @access private */
        this.token = token;
        /** @access private */
        this.baseURL = baseURL;
    }

    /**
      * Applies an effect to the provided image. Please see https://weebyapi.xyz/api/docs#effects for the available effects.
      * @param {Object} options - The options that contain the required parameters.
      * @param {string} options.type - The Type of Effect to use.
      * @param {string} options.image - The link to an image (.png, .jpg, .gif)
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    async general(options = {}) {
        try {
            if (typeof options.type !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Type parameter is not a string.")}`);
            if (typeof options.image !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Image parameter is not a string.")}`);
            if (!options.type) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Type parameter is missing. You will need to provide the type of effect to apply.")}`);
            if (!options.image) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Image parameter is missing. You will need to provide a valid image link.")}`);

            if (general.includes(options.type)) {
                const { body } = await get(`${this.baseURL}/${options.type}`)
                    .set("Authorization", `Bearer ${this.token}`)
                    .set("User-Agent", `Weeby-JS by NTM Development » v${version}`)
                    .query({ image: options.image });

                return body;
            } else {
                throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The effect you tried to apply was not found. Make sure it is spelt correctly.")}`);
            }
        } catch (e) {
            throw new Error(e);
        }
    }

    /**
      * Applies an effect to the provided image that can change the level. Please see https://weebyapi.xyz/api/docs#effects for the available effects.
      * @param {Object} options - The options that contain the required parameters.
      * @param {string} options.type - The Type of Effect to use.
      * @param {number} options.intensity - The intensity of the effect.
      * @param {string} options.image - The link to an image (.png, .jpg, .gif)
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    async intensity(options = {}) {
        try {
            if (typeof options.type !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Type parameter is not a string.")}`);
            if (typeof options.intensity !== "number") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Intensity parameter is not a number.")}`);
            if (typeof options.image !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Image parameter is not a string.")}`);
            if (!options.type) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Type parameter is missing. You will need to provide the type of effect to apply.")}`);
            if (!options.intensity) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Intensity parameter is missing. You will need to provide a number.")}`);
            if (!options.image) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Image parameter is missing. You will need to provide a valid image link.")}`);

            const params = intensity.find(i => options.type === i.type);
            if (!params) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow(`The Intensity Effect does not exist! Make sure its spelt correctly.`)}`);

            if (options.intensity > params.max) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow(`The '${params.type}' intensity must not be higher than ${params.max}.`)}`);
            if (options.intensity < params.min) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow(`The '${params.type}' intensity must not be lower than ${params.min}.`)}`);

            const { body } = await get(`${this.baseURL}/${options.type}`)
                .set("Authorization", `Bearer ${this.token}`)
                .set("User-Agent", `Weeby-JS by NTM Development » v${version}`)
                .query({ image: options.image, intensity: options.intensity });

            return body;
        } catch (e) {
            throw new Error(e);
        }
    }

    /**
      * Applies an effect to the provided image that can change the level. Please see https://weebyapi.xyz/api/docs#effects for the available effects.
      * @param {Object} options - The options that contain the required parameters.
      * @param {string} options.type - The Type of Effect to use.
      * @param {number} options.level - The level of the effect.
      * @param {string} options.image - The link to an image (.png, .jpg, .gif)
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    async level(options = {}) {
        try {
            if (typeof options.type !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Type parameter is not a string.")}`);
            if (typeof options.level !== "number") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Level parameter is not a number.")}`);
            if (typeof options.image !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Image parameter is not a string.")}`);
            if (!options.type) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Type parameter is missing. You will need to provide the type of effect to apply.")}`);
            if (!options.level) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Level parameter is missing. You will need to provide a number.")}`);
            if (!options.image) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Image parameter is missing. You will need to provide a valid image link.")}`);

            const params = level.find(i => options.type === i.type);
            if (!params) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow(`The Level Effect does not exist! Make sure its spelt correctly.`)}`);

            if (options.level > params.max) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow(`The '${params.type}' level must not be higher than ${params.max}.`)}`);
            if (options.level < params.min) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow(`The '${params.type}' level must not be lower than ${params.min}.`)}`);

            const { body } = await get(`${this.baseURL}/${options.type}`)
                .set("Authorization", `Bearer ${this.token}`)
                .set("User-Agent", `Weeby-JS by NTM Development » v${version}`)
                .query({ image: options.image, level: options.level });

            return body;
        } catch (e) {
            throw new Error(e);
        }
    }

    /**
      * Resizes a provided image.
      * @param {Object} options - The options that contain the required parameters.
      * @param {string} options.width - The width of the resized image. (1-2000)
      * @param {number} options.height - The height of the resized image. (1-2000)
      * @param {string} options.image - The link to an image (.png, .jpg, .gif)
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    async resize(options = {}) {
        try {
            if (typeof options.width !== "number") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Width parameter is not a number.")}`);
            if (typeof options.height !== "number") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Height parameter is not a number.")}`);
            if (typeof options.image !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Image parameter is not a string.")}`);
            if (!options.width) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Width parameter is missing. You will need to provide a number.")}`);
            if (!options.height) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Height parameter is missing. You will need to provide a number.")}`);
            if (!options.image) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Image parameter is missing. You will need to provide a valid image link.")}`);

            if (options.width > 2000) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow(`Width query parameter must not be higher than 2000.`)}`);
            if (options.height > 2000) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow(`Height query parameter must not be higher than 2000.`)}`);
            if (options.width < 0) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow(`Width query parameter must not be lower than 0.`)}`);
            if (options.height < 0) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow(`Height query parameter must not be lower than 0.`)}`);

            const { body } = await get(`${this.baseURL}/resize`)
                .set("Authorization", `Bearer ${this.token}`)
                .set("User-Agent", `Weeby-JS by NTM Development » v${version}`)
                .query({ image: options.image, width: options.width, height: options.height });

            return body;
        } catch (e) {
            throw new Error(e);
        }
    }
}

module.exports = Effects;