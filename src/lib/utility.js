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
     * @param {string} botID - The ID of the Bot.
     * @param {string} userID - The ID of the User.
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
            throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The effect you tried to apply was not found. Make sure it is spelt correctly.")}`);
        }
    }
}

module.exports = Utility;

/**
 * @typedef {Object} TopGGVoteCheckerResponse - The response from the Top.gg Vote Checker method.
 * @property {String} userID - The ID of the user.
 * @property {String} botID - The ID of the bot.
 * @property {Number} dateVoted - The date the user voted (Unix Timestamp)
 * @property {Number} currentVoteExpiry - The current expiry of the vote (12 Hours - Unix Timestamp)
 * @property {Number} timesVoted - The amount of times the user has voted lifetime for the bot.
 * @property {Boolean} hasVoted - Whether the user has voted or not.
 * @property {Boolean} isWeekend - Whether the user voted on a weekend or not.
 */

/**
 * @typedef {Object} TopGGVoteListResponse - The response from the Top.gg Vote List method.
 * @property {String} botID - The ID of the bot.
 * @property {Boolean} isWeekend - Whether it's the weekend or not.
 * @property {VoteListData} votes - An array of objects containing the votes data.
 */

/**
 * @typedef {Object} VoteListData - The data for the votes.
 * @property {String} userID - The ID of the user.
 * @property {Number} dateVoted - The date the user voted (Unix Timestamp)
 * @property {Number} currentVoteExpiry - The current expiry of the vote (12 Hours - Unix Timestamp)
 * @property {Number} timesVoted - The amount of times the user has voted lifetime for the bot.
 * @property {Boolean} hasVoted - Whether the user has voted or not.
 */

/**
 * @typedef {Object} TopGGTopVotesResponse - The response from the Top.gg Top Votes method.
 * @property {String} botID - The ID of the bot.
 * @property {Boolean} isWeekend - Whether it's the weekend or not.
 * @property {TopVotesData} votes - An array of objects containing the votes data.
 */

/**
 * @typedef {Object} TopVotesData - The data for the votes.
 * @property {Number} index - The position the user is in on the array.
 * @property {String} userID - The ID of the user.
 * @property {Number} dateVoted - The date the user voted (Unix Timestamp)
 * @property {Number} currentVoteExpiry - The current expiry of the vote (12 Hours - Unix Timestamp)
 * @property {Number} timesVoted - The amount of times the user has voted lifetime for the bot.
 * @property {Boolean} hasVoted - Whether the user has voted or not.
 */

/**
 * @typedef {Object} TranslateResponse - The response of the translate method.
 * @prop {Object} from - The language the text was translated from.
 * @prop {String} from.language - The language code.
 * @prop {String} from.text - The text before translation.
 * @prop {Object} to - The language the text was translated to.
 * @prop {String} to.language - The language code.
 * @prop {String} to.text - The text that was translated.
 */

/**
 * @typedef {Object} CurrencyConverterResponse - The response of the currency converter method.
 * @prop {Object} from - The language the text was translated from.
 * @prop {string} from.type - The currency type the amount was converted from.
 * @prop {string} from.amount - The currency amount before conversion.
 * @prop {Object} to - The language the text was translated to.
 * @prop {string} to.type - The currency type the amount was converted to.
 * @prop {string} to.amount - The currency amount after conversion.
 */

/**
 * @typedef {Object} WeatherResponse - The response for the Weather method.
 * @prop {String} observationPoint - The location being observed.
 * @prop {String} conditions - The current conditions.
 * @prop {String} conditionsImageURL - The URL for the current conditions image.
 * @prop {String} degreeType - The degree type being used.
 * @prop {String} temperature - The current temperature.
 * @prop {String} feelsLike - The current feels like temperature.
 * @prop {String} windSpeed - The current wind speed, in km/h.
 * @prop {String} windDisplay - The current wind display, in km/h.
 * @prop {String} humidity - The current humidity.
 * @prop {String} day - Today's day.
 * @prop {String} date - Today's date.
 * @prop {String} latitude - The latitude of the location.
 * @prop {String} longitude - The longitude of the location.
 */