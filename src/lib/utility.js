const { get } = require("node-superfetch");
const chalk = require("chalk");
const { version } = require("../../package.json");

/**
* @class Utility
*/
class Utility {
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
     * Checks if a user has voted for a bot on Top.gg
     * @param {TopGGVoteCheckerOptions} options - The options you want to use.
     * @returns {Promise<TopGGVoteCheckerResponse>}
     */
    async topGGVoteChecker({ botID, userID }) {
        if (typeof botID !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Bot ID parameter is not a string.")}`);
        if (!botID) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Bot ID parameter is missing. You will need to provide a valid Bot ID.")}`);
        if (typeof userID !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The User ID parameter is not a string.")}`);
        if (!userID) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("User ID parameter is missing. You will need to provide a valid User ID.")}`);

        try {
            const { body } = await get(`${this.baseURL}/webhook/topgg/votecheck`)
                .query({ botid: botID, userid: userID })
                .set("Authorization", `Bearer ${this.token}`)
                .set("User-Agent", `Weeby-JS by NTM Development » v${version}`);

            return body;
        } catch (e) {
            throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow(`Could not find that User's vote information for Bot ID: ${botID}. Make sure the User ID and Bot ID is correct, or the user should vote first.`)}`);
        }
    }

    /**
     * Converts the provided currency to a different currency.
     * @param {CurrencyConverterOptions} options - The options you want to use.
     * @returns {Promise<CurrencyConverterResponse>}
     */
    async currencyConverter({ from, to, amount } = {}) {
        if (typeof from !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The From parameter is not a string.")}`);
        if (!from) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("From parameter is missing. You will need to provide a valid ISO 4217 code of the currency.")}`);
        if (typeof to !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The To parameter is not a string.")}`);
        if (!to) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("To parameter is missing. You will need to provide a valid ISO 4217 code of the currency.")}`);
        if (typeof amount !== "number") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Amount parameter is not a number.")}`);
        if (!amount) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Amount parameter is missing. You will need to provide a number.")}`);

        try {
            const { body } = await get(`${this.baseURL}/currencyconverter`)
                .query({ from: from, to: to, amount: parseInt(amount) })
                .set("Authorization", `Bearer ${this.token}`)
                .set("User-Agent", `Weeby-JS by NTM Development » v${version}`);

            return body;
        } catch (e) {
            throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow(`There seems to be an error while attempting to use this method.`)}`);
        }
    }

    /**
     * Translate the provided text to another language.
     * @param {TranslatorOptions} options - The options you want to use.
     * @returns {Promise<TranslateResponse>}
     */
    async translate({ from, to, text } = {}) {
        if (typeof from !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The From parameter is not a string.")}`);
        if (!from) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("From parameter is missing. A valid ISO language code is needed.")}`);
        if (typeof to !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The To parameter is not a string.")}`);
        if (!to) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("To parameter is missing. A valid ISO language code is needed.")}`);
        if (typeof text !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Text parameter is not a string.")}`);
        if (!text) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Text parameter is missing. You will need to provide some text.")}`);

        try {
            const { body } = await get(`${this.baseURL}/translate`)
                .query({ from: from, to: to, text: text })
                .set("Authorization", `Bearer ${this.token}`)
                .set("User-Agent", `Weeby-JS by NTM Development » v${version}`);

            return body;
        } catch (e) {
            throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow(`There seems to be an error while attempting to use this method.`)}`);
        }
    }

    /**
     * Returns the weather for the provided location.
     * @param {WeatherOptions} options - The options you want to use.
     * @returns {Promise<WeatherResponse>}
     */
    async weather({ location, degreeType } = {}) {
        if (typeof location !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Location parameter is not a string.")}`);
        if (!location) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Location parameter is missing. Provide some text.")}`);
        if (typeof degreeType !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Degree Type parameter is not a string.")}`);
        if (!degreeType) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Degree Type parameter is missing. Provide either Celsius or Fahrenheit")}`);

        try {
            const { body } = await get(`${this.baseURL}/weather`)
                .query({ location: location, degreetype: degreeType })
                .set("Authorization", `Bearer ${this.token}`)
                .set("User-Agent", `Weeby-JS by NTM Development » v${version}`);

            return body;
        } catch (e) {
            throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow(`There seems to be an error while attempting to use this method.`)}`);
        }
    }
}

module.exports = Utility;

/**
 * @typedef {Object} TopGGVoteCheckerOptions - The options for the TopGGVoteChecker.
 * @property {string} botID - The ID of the bot you want to check.
 * @property {string} userID - The ID of the user you want to check.
 */

/**
 * @typedef {Object} TopGGVoteCheckerResponse - The response from the Top.gg Vote Checker method.
 * @property {string} userID - The ID of the user.
 * @property {string} botID - The ID of the bot.
 * @property {number} dateVoted - The date the user voted (Unix Timestamp)
 * @property {number} currentVoteExpiry - The current expiry of the vote (12 Hours - Unix Timestamp)
 * @property {number} timesVoted - The amount of times the user has voted lifetime for the bot.
 * @property {boolean} hasVoted - Whether the user has voted or not.
 * @property {boolean} isWeekend - Whether the user voted on a weekend or not.
 */

/**
 * @typedef {Object} TranslateOptions - The options for the Translate method.
 * @property {string} from - A valid ISO language code. Refer to this: http://www.lingoes.net/en/translator/langcode.htm
 * @property {string} to - A valid ISO language code. Refer to this: http://www.lingoes.net/en/translator/langcode.htm
 * @property {number} text - The text to translate.
 */

/**
 * @typedef {Object} TranslateResponse - The response of the translate method.
 * @property {Object} from - The language the text was translated from.
 * @property {string} from.language - The language code.
 * @property {string} from.text - The text before translation.
 * @property {Object} to - The language the text was translated to.
 * @property {string} to.language - The language code.
 * @property {string} to.text - The text that was translated.
 */

/**
 * @typedef {Object} CurrencyConverterOptions - The options for the Currency Converter.
 * @property {string} from - A valid ISO 4217 code of the currency (i.e. USD). Refer to this: https://www.xe.com/iso4217.php
 * @property {string} to - A valid ISO 4217 code of the currency (i.e. USD). Refer to this: https://www.xe.com/iso4217.php
 * @property {number} amount - The amount you want to have converted.
 */

/**
 * @typedef {Object} CurrencyConverterResponse - The response of the currency converter method.
 * @property {Object} from - The language the text was translated from.
 * @property {string} from.type - The currency type the amount was converted from.
 * @property {string} from.amount - The currency amount before conversion.
 * @property {Object} to - The language the text was translated to.
 * @property {string} to.type - The currency type the amount was converted to.
 * @property {string} to.amount - The currency amount after conversion.
 */

/**
 * @typedef {Object} WeatherOptions - The options for the Weather method.
 * @param {string} location - The location you want to get the weather for.
 * @param {string} degreeType - The degree type you want to get the weather in.
 */

/**
 * @typedef {Object} WeatherResponse - The response for the Weather method.
 * @property {string} observationPoint - The location being observed.
 * @property {string} conditions - The current conditions.
 * @property {string} conditionsImageURL - The URL for the current conditions image.
 * @property {string} degreeType - The degree type being used.
 * @property {string} temperature - The current temperature.
 * @property {string} feelsLike - The current feels like temperature.
 * @property {string} windSpeed - The current wind speed, in km/h.
 * @property {string} windDisplay - The current wind display, in km/h.
 * @property {string} humidity - The current humidity.
 * @property {string} day - Today's day.
 * @property {string} date - Today's date.
 * @property {string} latitude - The latitude of the location.
 * @property {string} longitude - The longitude of the location.
 */