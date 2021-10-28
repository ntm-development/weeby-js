const { get } = require("node-superfetch");
const chalk = require("chalk");
const { version } = require("../../package.json");

/**
* A list of available fonts.
* Gotham, Stoneserif, Roboto, Arial, Impact, Riffic, Minecraft, Pinkycupid, Paladins, Pokemon, Oldenglish, Chalkduster, Akbar, Nexa, Verdana, Typewriter, Spongebob, Cornerofthesky
* @typedef {String} Fonts
*/

/**
* @class Custom
*/
class Custom {
    /**
     * Options for creating a customisable greeting image.
     * @typedef {Object} GreetingOptions
     * @property {String} icon - The link to an image (.png, .jpg, .gif)
     * @property {String} background - The link to an image (.png, .jpg, .gif) (1024x470 recommended)
     * @property {String} name - The name of the greeted user.
     * @property {String} greet - What should the user be greeted with?
     * @property {String} [message] - Provide a message on the bottom of the user's name.
     * @property {String} [greetHex] - The color of the greeting text.
     * @property {String} [nameHex] - The color of the name text.
     * @property {String} [circleHex] - The color of the circle.
     * @property {String} [messageHex] - The color of the message text.
     * @property {Fonts} [font] - The font of the text.
     */

    /**
     * Options for creating a booster image.
     * @typedef {Object} BoosterOptions
     * @property {String} icon - The link to an image (.png, .jpg, .gif)
     * @property {String} background - The link to an image (.png, .jpg, .gif) (1024x470 recommended)
     * @property {String} name - The name of the user who boosted the server.
     * @property {String} title - The title of the booster card.
     * @property {String} [message] - Provide a message on the bottom of the title.
     * @property {String} [greetHex] - The color of the greeting text.
     * @property {String} [nameHex] - The color of the name text.
     * @property {String} [circleHex] - The color of the circle.
     * @property {String} [messageHex] - The color of the message text.
     * @property {Fonts} [font] - The font of the text.
     */

    /**
     * Options for creating a rank card.
     * @typedef {Object} RankOptions
     * @property {string} avatar - The link to an image (.png, .jpg, .gif)
     * @property {string} username - The username to print.
     * @property {string} bgColor - The color of the background.
     * @property {number} level - The Level the user is currently on.
     * @property {number} xp - How much XP the user has.
     * @property {Fonts} [font] - The font of the text.
     */

    /**
     * Options for creating a level up card.
     * @typedef {Object} LevelUpOptions
     * @property {string} avatar - The link to an image (.png, .jpg, .gif)
     * @property {string} bgColor - The color of the background. (Do not include the hashtag).
     * @property {string} borderColor - The color of the avatar border. (Do not include the hashtag).
     * @property {number} oldlevel - The old level of the user.
     * @property {number} newlevel - The new level of the user.
     * @property {Fonts} [font] - The font of the text.
     */

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
    async greeting(options = {}) {
        if (typeof options.icon !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Icon parameter is not a string.")}`);
        if (typeof options.name !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Name parameter is not a string.")}`);
        if (typeof options.background !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Background parameter is not a string.")}`);
        if (typeof options.greet !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Greet parameter is not a string.")}`);
        if (!options.icon) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Icon parameter is missing. You will need to provide a valid image link.")}`);
        if (!options.background) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Background parameter is missing. You will need to provide a valid image link.")}`);
        if (!options.name) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Name parameter is missing. You will need to provide some text.")}`);
        if (!options.greet) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Greet parameter is missing. You will need to provide some text.")}`);

        const message = options.message ? options.message : "";
        const greetColor = options.greetHex ? options.greetHex : "";
        const circleColor = options.circleHex ? options.circleHex : "";
        const nameColor = options.nameHex ? options.nameHex : "";
        const messageColor = options.messageHex ? options.messageHex : "";
        const font = options.font ? options.font : "";

        const { body } = await get(`${this.baseURL}/greeting`)
            .set("Authorization", `Bearer ${this.token}`)
            .set("User-Agent", `Weeby-JS by NTM Development » v${version}`)
            .query({ icon: options.icon, background: options.background, name: options.name, greet: options.greet, message: message, greetHex: greetColor, nameHex: nameColor, circleHex: circleColor, messageHex: messageColor, font: font });

        return body;
    }

    /**
      * Creates a customisable booster add/remove image. Optional queries can let you customise the color of each element.
      * @param {BoosterOptions} options - The options that contain the required parameters.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    async booster(options = {}) {
        if (typeof options.icon !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Icon parameter is not a string.")}`);
        if (typeof options.name !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Name parameter is not a string.")}`);
        if (typeof options.background !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Background parameter is not a string.")}`);
        if (typeof options.title !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Title parameter is not a string.")}`);
        if (!options.icon) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Icon parameter is missing. You will need to provide a valid image link.")}`);
        if (!options.background) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Background parameter is missing. You will need to provide a valid image link.")}`);
        if (!options.name) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Name parameter is missing. You will need to provide some text.")}`);
        if (!options.title) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Title parameter is missing. You will need to provide some text.")}`);

        const message = options.message ? options.message : "";
        const titleColor = options.titleHex ? options.titleHex : "";
        const circleColor = options.circleHex ? options.circleHex : "";
        const nameColor = options.nameHex ? options.nameHex : "";
        const messageColor = options.messageHex ? options.messageHex : "";
        const font = options.font ? options.font : "";

        const { body } = await get(`${this.baseURL}/booster`)
            .set("Authorization", `Bearer ${this.token}`)
            .set("User-Agent", `Weeby-JS by NTM Development » v${version}`)
            .query({ icon: options.icon, background: options.background, name: options.name, title: options.title, message: message, titleHex: titleColor, nameHex: nameColor, circleHex: circleColor, messageHex: messageColor, font: font });

        return body;
    }

    /**
      * Creates a customisable rank card with Icon, Name, and leveling stats.
      * @param {RankOptions} options - The options that contain the required parameters.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    async rank(options = {}) {
        if (typeof options.avatar !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Avatar parameter is not a string.")}`);
        if (typeof options.username !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Username parameter is not a string.")}`);
        if (typeof options.bgColor !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Background Color parameter is not a string.")}`);
        if (typeof options.level !== "number") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Level parameter is not a number.")}`);
        if (typeof options.xp !== "number") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The XP parameter is not a number.")}`);
        if (!options.avatar) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Avatar parameter is missing. You will need to provide a valid image link.")}`);
        if (!options.username) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Username parameter is missing. You will need to provide some text.")}`);
        if (!options.bgColor) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Background Color parameter is missing. You will need to provide a valid Hex Color Code.")}`);
        if (!options.level) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Level parameter is missing. You will need to provide a number.")}`);
        if (!options.xp) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("XP parameter is missing. You will need to provide a number.")}`);

        const { body } = await get(`${this.baseURL}/rank`)
            .set("Authorization", `Bearer ${this.token}`)
            .set("User-Agent", `Weeby-JS by NTM Development » v${version}`)
            .query({ avatar: options.avatar, username: options.username, bgColor: options.bgColor, level: options.level, xp: options.xp });

        return body;
    }

    /**
      * Creates a customisable level up card.
      * @param {LevelUpOptions} options - The options that contain the required parameters.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    async levelUp(options = {}) {
        if (typeof options.avatar !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Avatar parameter is not a string.")}`);
        if (typeof options.bgColor !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Background Color parameter is not a string.")}`);
        if (typeof options.borderColor !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Border Color parameter is not a string.")}`);
        if (typeof options.oldlevel !== "number") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Old Level parameter is not a number.")}`);
        if (typeof options.newlevel !== "number") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The New Level parameter is not a number.")}`);
        if (!options.avatar) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Avatar parameter is missing. You will need to provide a valid image link.")}`);
        if (!options.bgColor) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Background Color parameter is missing. You will need to provide a valid Hex Color Code.")}`);
        if (!options.borderColor) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Border Color parameter is missing. You will need to provide a valid Hex Color Code.")}`);
        if (!options.oldlevel) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Old Level parameter is missing. You will need to provide a number.")}`);
        if (!options.newlevel) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("New Level parameter is missing. You will need to provide a number.")}`);

        const font = options.font ? options.font : "";

        const { body } = await get(`${this.baseURL}/levelup`)
            .set("Authorization", `Bearer ${this.token}`)
            .set("User-Agent", `Weeby-JS by NTM Development » v${version}`)
            .query({ avatar: options.avatar, bgColor: options.bgColor, borderColor: options.borderColor, oldlevel: options.oldlevel, newlevel: options.newlevel, font: font });

        return body;
    }
}

module.exports = Custom;