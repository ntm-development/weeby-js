const { get } = require("node-superfetch");
const chalk = require("chalk");
const { version } = require("../../package.json");

/**
* @class Custom
*/
class Custom {
    constructor(token, baseURL) {
        /** @access private */
        this.token = token;
        /** @access private */
        this.baseURL = baseURL;
    }

    /**
      * Creates a customisable greeting image with Icon, Name, Greet and Background. Optional parameters can let you customise the color of each element, or let you add a message.
      * @param {Object} options - The options that contain the required parameters.
      * @param {string} options.icon - The link to an image (.png, .jpg, .gif)
      * @param {string} options.background - The link to an image (.png, .jpg, .gif) (1024x470 recommended)
      * @param {string} options.name - The name of the greeted user.
      * @param {string} options.greet - What should the user be greeted with?
      * @param {string} [options.message] - Provide a message on the bottom of the user's name.
      * @param {string} [options.greetHex=000000] - The color of the greet text. (Do not include the hashtag).
      * @param {string} [options.nameHex=000000] - The color of the name text. (Do not include the hashtag).
      * @param {string} [options.circleHex=000000] - The color of the avatar border. (Do not include the hashtag).
      * @param {string} [options.messageHex=000000] - The color of the message text. (Do not include the hashtag).
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

        const { body } = await get(`${this.baseURL}/greeting`)
            .set("Authorization", `Bearer ${this.token}`)
            .set("User-Agent", `Weeby-JS by NTM Development » v${version}`)
            .query({ icon: options.icon, background: options.background, name: options.name, greet: options.greet, message: message, greetHex: greetColor, nameHex: nameColor, circleHex: circleColor, messageHex: messageColor });

        return body;
    }

    /**
      * Creates a customisable booster add/remove image with Icon, Name and Background. Optional queries can let you customise the color of each element.
      * @param {Object} options - The options that contain the required parameters.
      * @param {string} options.icon - The link to an image (.png, .jpg, .gif)
      * @param {string} options.background - The link to an image (.png, .jpg, .gif) (1024x470 recommended)
      * @param {string} options.name - The name of the user who boosted the server.
      * @param {string} options.title - The title of the booster card.
      * @param {string} [options.message] - Provide a message on the bottom of title.
      * @param {string} [options.titleHex =f47fff] - The color of the title text. (Do not include the hashtag).
      * @param {string} [options.nameHex=FFFFFF] - The color of the name text. (Do not include the hashtag).
      * @param {string} [options.circleHex=9f50a7] - The color of the avatar border. (Do not include the hashtag).
      * @param {string} [options.messageHex=9f50a7] - The color of the message text. (Do not include the hashtag).
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

        const { body } = await get(`${this.baseURL}/booster`)
            .set("Authorization", `Bearer ${this.token}`)
            .set("User-Agent", `Weeby-JS by NTM Development » v${version}`)
            .query({ icon: options.icon, background: options.background, name: options.name, title: options.title, message: message, titleHex: titleColor, nameHex: nameColor, circleHex: circleColor, messageHex: messageColor });

        return body;
    }

    /**
      * Creates a customisable rank card with Icon, Name, and leveling stats.
      * @param {Object} options - The options that contain the required parameters.
      * @param {string} options.avatar - The link to an image (.png, .jpg, .gif)
      * @param {string} options.username - The username to print.
      * @param {string} options.bgColor - The color of the background.
      * @param {number} options.level - The Level the user is currently on.
      * @param {number} options.xp - How much XP the user has.
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
      * @param {Object} options - The options that contain the required parameters.
      * @param {string} options.avatar - The link to an image (.png, .jpg, .gif)
      * @param {string} options.bgColor - The color of the background. (Do not include the hashtag).
      * @param {string} options.borderColor - The color of the avatar border. (Do not include the hashtag).
      * @param {number} options.oldlevel - The old level of the user.
      * @param {number} options.newlevel - The new level of the user.
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

        const { body } = await get(`${this.baseURL}/levelup`)
            .set("Authorization", `Bearer ${this.token}`)
            .set("User-Agent", `Weeby-JS by NTM Development » v${version}`)
            .query({ avatar: options.avatar, bgColor: options.bgColor, borderColor: options.borderColor, oldlevel: options.oldlevel, newlevel: options.newlevel });

        return body;
    }
}

module.exports = Custom;