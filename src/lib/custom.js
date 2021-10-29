const { get } = require("node-superfetch");
const chalk = require("chalk");
const { version } = require("../../package.json");

/**
* @class Custom
*/
class Custom {
    constructor(token, baseURL) {
        /**
         * Your Weeby API Token.
         * @type {string}
         * @private
        */
        this.token = token;

        /**
         * The base URL.
         * @type {string}
         * @private
        */
        this.baseURL = baseURL;
    }

    /**
      * Creates a customisable greeting image. Optional parameters can let you customise the color of each element, or let you add a message.
      * @param {GreetingOptions} options - The options that contain the required parameters.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    async greeting({ icon, background, name, greet, message, greetHex = "000000", nameHex = "000000", circleHex = "000000", messageHex = "000000", font = "gotham" } = {}) {
        if (typeof icon !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Icon parameter is not a string.")}`);
        if (typeof name !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Name parameter is not a string.")}`);
        if (typeof background !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Background parameter is not a string.")}`);
        if (typeof greet !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Greet parameter is not a string.")}`);
        if (!icon) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Icon parameter is missing. You will need to provide a valid image link.")}`);
        if (!background) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Background parameter is missing. You will need to provide a valid image link.")}`);
        if (!name) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Name parameter is missing. You will need to provide some text.")}`);
        if (!greet) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Greet parameter is missing. You will need to provide some text.")}`);

        const messageParams = message ? message : "";
        const greetColor = greetHex ? greetHex : "";
        const circleColor = circleHex ? circleHex : "";
        const nameColor = nameHex ? nameHex : "";
        const messageColor = messageHex ? messageHex : "";
        const fontParams = font ? font : "";

        const { body } = await get(`${this.baseURL}/greeting`)
            .set("Authorization", `Bearer ${this.token}`)
            .set("User-Agent", `Weeby-JS by NTM Development » v${version}`)
            .query({ icon: icon, background: background, name: name, greet: greet, message: messageParams, greetHex: greetColor, nameHex: nameColor, circleHex: circleColor, messageHex: messageColor, font: fontParams });

        return body;
    }

    /**
      * Creates a customisable booster add/remove image. Optional queries can let you customise the color of each element.
      * @param {BoosterOptions} options - The options that contain the required parameters.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    async booster({ icon, background, name, title, message, titleHex = "f47fff", nameHex = "FFFFFF", circleHex = "9f50a7", messageHex = "9f50a7", font = "nexa" } = {}) {
        if (typeof icon !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Icon parameter is not a string.")}`);
        if (typeof name !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Name parameter is not a string.")}`);
        if (typeof background !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Background parameter is not a string.")}`);
        if (typeof title !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Title parameter is not a string.")}`);
        if (!icon) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Icon parameter is missing. You will need to provide a valid image link.")}`);
        if (!background) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Background parameter is missing. You will need to provide a valid image link.")}`);
        if (!name) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Name parameter is missing. You will need to provide some text.")}`);
        if (!title) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Title parameter is missing. You will need to provide some text.")}`);

        const messageParams = message ? message : "";
        const titleColor = titleHex ? titleHex : "";
        const circleColor = circleHex ? circleHex : "";
        const nameColor = nameHex ? nameHex : "";
        const messageColor = messageHex ? messageHex : "";
        const fontParams = font ? font : "";

        const { body } = await get(`${this.baseURL}/booster`)
            .set("Authorization", `Bearer ${this.token}`)
            .set("User-Agent", `Weeby-JS by NTM Development » v${version}`)
            .query({ icon: icon, background: background, name: name, title: title, message: messageParams, titleHex: titleColor, nameHex: nameColor, circleHex: circleColor, messageHex: messageColor, font: fontParams });

        return body;
    }

    /**
      * Creates a customisable rank card with icon, name, and leveling stats.
      * @param {RankOptions} options - The options that contain the required parameters.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    async rank({ avatar, username, bgColor, level, xp } = {}) {
        if (typeof avatar !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Avatar parameter is not a string.")}`);
        if (typeof username !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Username parameter is not a string.")}`);
        if (typeof bgColor !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Background Color parameter is not a string.")}`);
        if (typeof level !== "number") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Level parameter is not a number.")}`);
        if (typeof xp !== "number") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The XP parameter is not a number.")}`);
        if (!avatar) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Avatar parameter is missing. You will need to provide a valid image link.")}`);
        if (!username) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Username parameter is missing. You will need to provide some text.")}`);
        if (!bgColor) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Background Color parameter is missing. You will need to provide a valid Hex Color Code.")}`);
        if (!level) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Level parameter is missing. You will need to provide a number.")}`);
        if (!xp) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("XP parameter is missing. You will need to provide a number.")}`);

        const { body } = await get(`${this.baseURL}/rank`)
            .set("Authorization", `Bearer ${this.token}`)
            .set("User-Agent", `Weeby-JS by NTM Development » v${version}`)
            .query({ avatar: avatar, username: username, bgColor: bgColor, level: level, xp: xp });

        return body;
    }

    /**
      * Creates a customisable level up card.
      * @param {LevelUpOptions} options - The options that contain the required parameters.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    async levelUp({ avatar, bgColor, borderColor, oldlevel, newlevel, font } = {}) {
        if (typeof avatar !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Avatar parameter is not a string.")}`);
        if (typeof bgColor !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Background Color parameter is not a string.")}`);
        if (typeof borderColor !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Border Color parameter is not a string.")}`);
        if (typeof oldlevel !== "number") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Old Level parameter is not a number.")}`);
        if (typeof newlevel !== "number") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The New Level parameter is not a number.")}`);
        if (!avatar) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Avatar parameter is missing. You will need to provide a valid image link.")}`);
        if (!bgColor) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Background Color parameter is missing. You will need to provide a valid Hex Color Code.")}`);
        if (!borderColor) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Border Color parameter is missing. You will need to provide a valid Hex Color Code.")}`);
        if (!oldlevel) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Old Level parameter is missing. You will need to provide a number.")}`);
        if (!newlevel) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("New Level parameter is missing. You will need to provide a number.")}`);

        const fontParams = font ? font : "";

        const { body } = await get(`${this.baseURL}/levelup`)
            .set("Authorization", `Bearer ${this.token}`)
            .set("User-Agent", `Weeby-JS by NTM Development » v${version}`)
            .query({ avatar: avatar, bgColor: bgColor, borderColor: borderColor, oldlevel: oldlevel, newlevel: newlevel, font: fontParams });

        return body;
    }
}

module.exports = Custom;

/**
 * A list of all available fonts
 * * Gotham
 * * Stoneserif
 * * Roboto
 * * Arial
 * * Impact
 * * Riffic
 * * Minecraft
 * * Pinkycupid
 * * Paladins
 * * Pokemon
 * * Oldenglish
 * * Chalkduster
 * * Akbar
 * * Nexa
 * * Verdana
 * * Typewriter
 * * Spongebob
 * * Cornerofthesky
 * @typedef {('gotham'|'stoneserif'|'roboto'|'arial'|'impact'|'riffic'|'minecraft'|'pinkycupid'|'paladins'|'pokemon'|'oldenglish'|'chalkduster'|'akbar'|'nexa'|'verdana'|'typewriter'|'spongebob'|'cornerofthesky'|'breesh')} FontType
 */

/**
 * Options for creating a customisable greeting image.
 * @typedef {Object} GreetingOptions
 * @param {string} icon - The link to an image (.png, .jpg, .gif)
 * @param {string} background - The link to an image (.png, .jpg, .gif) (1024x470 recommended)
 * @param {string} name - The name of the greeted user.
 * @param {string} greet - What should the user be greeted with?
 * @param {string} [message] - Provide a message on the bottom of the user's name.
 * @param {string} [greetHex=000000] - The color of the greet text.
 * @param {string} [nameHex=000000] - The color of the name text.
 * @param {string} [circleHex=000000] - The color of the avatar border.
 * @param {string} [messageHex=000000] - The color of the message text.
 * @param {FontType} [font=gotham] - The font to use, 'gotham' by default.
 */

/**
 * Options for creating a booster image.
 * @typedef {Object} BoosterOptions
 * @property {string} icon - The link to an image (.png, .jpg, .gif)
 * @property {string} background - The link to an image (.png, .jpg, .gif) (1024x470 recommended)
 * @property {string} name - The name of the user who boosted the server.
 * @property {string} title - The title of the booster card.
 * @property {string} [message] - Provide a message on the bottom of title.
 * @property {string} [titleHex =f47fff] - The color of the title text. (Do not include the hashtag).
 * @property {string} [nameHex=FFFFFF] - The color of the name text. (Do not include the hashtag).
 * @property {string} [circleHex=9f50a7] - The color of the avatar border. (Do not include the hashtag).
 * @property {string} [messageHex=9f50a7] - The color of the message text. (Do not include the hashtag).
 * @property {FontType} [font=nexa] - The font to use, 'nexa' by default.
 */

/**
 * Options for creating a rank card.
 * @typedef {Object} RankOptions
 * @property {string} avatar - The link to an image (.png, .jpg, .gif)
 * @property {string} username - The username to print.
 * @property {string} bgColor - The color of the background.
 * @property {number} level - The level the user is currently on.
 * @property {number} xp - How much XP the user has.
 */

/**
 * Options for creating a level up card.
 * @typedef {Object} LevelUpOptions
 * @property {string} avatar - The link to an image (.png, .jpg, .gif)
 * @property {string} bgColor - The color of the background. (Do not include the hashtag).
 * @property {string} borderColor - The color of the avatar border. (Do not include the hashtag).
 * @property {number} oldlevel - The old level of the user.
 * @property {number} newlevel - The new level of the user.
 * @property {FontType} [font=nexa] - The font to use, 'nexa' by default.
 */