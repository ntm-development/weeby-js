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
            const { body } = await get(`https://beta.weebyapi.xyz/utility/webhook/topgg/votecheck`)
                .query({ botid: botID, userid: userID })
                .set("Authorization", `Bearer ${this.token}`)
                .set("User-Agent", `Weeby-JS by NTM Development » v${version}`);

            return body;
        } catch (e) {
            throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow(`Could not find that User's vote information for Bot ID: ${botID}. Make sure the User ID and Bot ID is correct, or the user should vote first.`)}`);
        }
    }
}

module.exports = Utility;

/**
 * @typedef {object} TopGGVoteCheckerResponse - The response from the Top.gg Vote Checker method.
 * @property {string} userID - The ID of the user.
 * @property {string} botID - The ID of the bot.
 * @property {number} dateVoted - The date the user voted (Unix Timestamp)
 * @property {number} currentVoteExpiry - The current expiry of the vote (12 Hours - Unix Timestamp)
 * @property {number} timesVoted - The amount of times the user has voted lifetime for the bot.
 * @property {boolean} hasVoted - Whether the user has voted or not.
 * @property {boolean} isWeekend - Whether the user voted on a weekend or not.
 */

/**
 * @typedef {object} TopGGVoteListResponse - The response from the Top.gg Vote List method.
 * @property {string} botID - The ID of the bot.
 * @property {boolean} isWeekend - Whether it's the weekend or not.
 * @property {VoteListData} votes - An array of objects containing the votes data.
 */

/**
 * @typedef {object} VoteListData - The data for the votes.
 * @property {string} userID - The ID of the user.
 * @property {number} dateVoted - The date the user voted (Unix Timestamp)
 * @property {number} currentVoteExpiry - The current expiry of the vote (12 Hours - Unix Timestamp)
 * @property {number} timesVoted - The amount of times the user has voted lifetime for the bot.
 * @property {boolean} hasVoted - Whether the user has voted or not.
 */

/**
 * @typedef {object} TopGGTopVotesResponse - The response from the Top.gg Top Votes method.
 * @property {string} botID - The ID of the bot.
 * @property {boolean} isWeekend - Whether it's the weekend or not.
 * @property {TopVotesData} votes - An array of objects containing the votes data.
 */

/**
 * @typedef {object} TopVotesData - The data for the votes.
 * @property {number} index - The position the user is in on the array.
 * @property {string} userID - The ID of the user.
 * @property {number} dateVoted - The date the user voted (Unix Timestamp)
 * @property {number} currentVoteExpiry - The current expiry of the vote (12 Hours - Unix Timestamp)
 * @property {number} timesVoted - The amount of times the user has voted lifetime for the bot.
 * @property {boolean} hasVoted - Whether the user has voted or not.
 */

/**
 * @typedef {object} TranslateResponse - The response of the translate method.
 * @prop {object} from - The language the text was translated from.
 * @prop {string} from.language - The language code.
 * @prop {string} from.text - The text before translation.
 * @prop {object} to - The language the text was translated to.
 * @prop {string} to.language - The language code.
 * @prop {string} to.text - The text that was translated.
 */

/**
 * @typedef {object} CurrencyConverterResponse - The response of the currency converter method.
 * @prop {object} from - The language the text was translated from.
 * @prop {string} from.type - The currency type the amount was converted from.
 * @prop {string} from.amount - The currency amount before conversion.
 * @prop {object} to - The language the text was translated to.
 * @prop {string} to.type - The currency type the amount was converted to.
 * @prop {string} to.amount - The currency amount after conversion.
 */

/**
 * @typedef {object} WeatherResponse - The response for the Weather method.
 * @prop {string} observationPoint - The location being observed.
 * @prop {string} conditions - The current conditions.
 * @prop {string} conditionsImageURL - The URL for the current conditions image.
 * @prop {string} degreeType - The degree type being used.
 * @prop {string} temperature - The current temperature.
 * @prop {string} feelsLike - The current feels like temperature.
 * @prop {string} windSpeed - The current wind speed, in km/h.
 * @prop {string} windDisplay - The current wind display, in km/h.
 * @prop {string} humidity - The current humidity.
 * @prop {string} day - Today's day.
 * @prop {string} date - Today's date.
 * @prop {string} latitude - The latitude of the location.
 * @prop {string} longitude - The longitude of the location.
 */