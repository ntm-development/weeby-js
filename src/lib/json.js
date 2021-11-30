const { get } = require("node-superfetch");
const chalk = require("chalk");
const { version } = require("../../package.json");
const word = require("../../assets/json/word.json");
const responses = require("../../assets/json/response.json");
const textFormatters = require("../../assets/json/formatters.json");
const animalTypes = require("../../assets/json/animals.json");
/**
* @class JSON
*/
class JSON {
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
      * Returns a random word. (list endpoint not supported)
      * @param {string} type - The Type of JSON response to request. See https://weebyapi.xyz/api/docs#json for all the JSON endpoints.
      * @returns {Promise<string>} The response in a string.
      */
    async word(type) {
        if (typeof type !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Type parameter is not a string.")}`);
        if (!type) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Type parameter is missing. You will need to provide the type of Word Category.")}`);

        const { body } = await get(`${this.baseURL}/word/${type}`)
            .set("Authorization", `Bearer ${this.token}`)
            .set("User-Agent", `Weeby-JS by NTM Development » v${version}`);

        if (word.includes(type)) {
            return body.word;
        } else {
            throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Word Category you tried to request was not found. Make sure it is spelt correctly.")}`);
        }
    }

    /**
      * Returns a random response.
      * @param {string} type - The Type of JSON response to request. See https://weebyapi.xyz/api/docs#json for all the JSON endpoints.
      * @returns {Promise<string>} The response in a string.
      */
    async response(type) {
        if (typeof type !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Type parameter is not a string.")}`);
        if (!type) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Type parameter is missing. You will need to provide the type of Response Category.")}`);

        const { body } = await get(`${this.baseURL}/${type}`)
            .set("Authorization", `Bearer ${this.token}`)
            .set("User-Agent", `Weeby-JS by NTM Development » v${version}`);

        if (responses.includes(type)) {
            return body.response;
        } else {
            throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Response Category you tried to request was not found. Make sure it is spelt correctly.")}`);
        }
    }

    /**
      * Returns a random Animal image of the type provided.
      * @param {string} type - The Type of Animal. See https://weebyapi.xyz/api/docs#json for all the JSON endpoints.
      * @returns {Promise<string>} The Formatted Animal Image URL.
      */
    async animalImage(type) {
        if (typeof type !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Type parameter is not a string.")}`);
        if (!type) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Type parameter is missing. You will need to provide the type of animal.")}`);

        const { body } = await get(`${this.baseURL}/images/animal/${type}`)
            .set("Authorization", `Bearer ${this.token}`)
            .set("User-Agent", `Weeby-JS by NTM Development » v${version}`);

        if (animalTypes.includes(type)) {
            return body.url;
        } else {
            throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Animal you tried to request was not found. Make sure it is spelt correctly.")}`);
        }
    }

    /**
      * Returns a random SFW Meme from a Subreddit.
      * @param {MemeCategory} category - The name of the category.
      * @returns {Promise<MemeResponse>} The returned JSON object.
      */
    async meme(category) {
        if (typeof category !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Category parameter is not a string.")}`);
        if (!category) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Category parameter is missing. You will need to provide an option.")}`);

        const { body } = await get(`${this.baseURL}/meme`)
            .set("Authorization", `Bearer ${this.token}`)
            .set("User-Agent", `Weeby-JS by NTM Development » v${version}`)
            .query({ category });

        return body;
    }

    /**
      * Formats the provided text into a different style.
      * @param {TextFormatterOptions} options - The options to use.
      * @returns {Promise<string>} The response in a string.
      */
    async textFormat({ type, text } = {}) {
        if (typeof type !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Type parameter is not a string.")}`);
        if (!type) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Type parameter is missing. You will need to provide the type of Text Formatter Category.")}`);
        if (typeof text !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Text parameter is not a string.")}`);
        if (!text) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Text parameter is missing. You will need to provide some text.")}`);

        const { body } = await get(`${this.baseURL}/format`)
            .query({ type: type, text: text })
            .set("Authorization", `Bearer ${this.token}`)
            .set("User-Agent", `Weeby-JS by NTM Development » v${version}`);

        if (textFormatters.includes(type)) {
            return body.output;
        } else {
            throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Text Formatter Category you tried to request was not found. Make sure it is spelt correctly.")}`);
        }
    }

    /**
      * Fetches lyrics from the Genius API.
      * @param {string} query - The lyrics to search. See https://weebyapi.xyz/api/docs#json for all the JSON endpoints.
      * @returns {Promise<LyricsResponse>} The lyrics and its information.
      */
    async lyrics(query) {
        if (typeof query !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Query parameter is not a string.")}`);
        if (!query) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Query parameter is missing. You will need to provide some text.")}`);

        const { body } = await get(`${this.baseURL}/lyrics`)
            .set("Authorization", `Bearer ${this.token}`)
            .set("User-Agent", `Weeby-JS by NTM Development » v${version}`)
            .query({ query });

        return body;
    }

    /**
      * Fetches Weeby API's current statistics.
      * @returns {Promise<object>} The statistics returned in a object.
      */
    async stats() {
        const { body } = await get(`${this.baseURL}/stats`)
            .set("Authorization", `Bearer ${this.token}`)
            .set("User-Agent", `Weeby-JS by NTM Development » v${version}`);

        return body;
    }
}

module.exports = JSON;

/**
* @typedef {Object} LyricsResponse - The response object for lyrics.
* @property {number} id - The ID of the song.
* @property {string} url - The Genius Lyrics URL.
* @property {Object} track - The track object.
* @property {string} track.name - The name of the song.
* @property {string} track.thumbnail - The thumbnail of the song.
* @property {string} track.media - The URL of the song.
* @property {Object} artist - The artist object.
* @property {string} artist.name - The name of the artist.
* @property {string} artist.thumbnail - The thumbnail of the artist.
* @property {number} artist.id - The ID of the artist.
* @property {Object} artist - The artist object.
* @property {Object} album - The album object.
* @property {string} album.name - The name of the album.
* @property {string} album.thumbnail - The thumbnail of the album.
* @property {number} album.id - The ID of the album.
* @property {Object} colors - The colors object.
* @property {string} colors.songArtPrimary - The primary color of the song art.
* @property {string} colors.songArtSecondary - The secondary color of the song art.
* @property {string} colors.songArtText - The text color of the song art.
* @property {Object} stats - The stats object.
* @property {boolean} stats.hot - The number of views.
* @property {number} stats.pageViews - The number of page views.
* @property {number} stats.contributors - The number of contributors.
* @property {number} stats.transcribers - The number of transcribers.
* @property {number} stats.accepted_annotations - The number of accepted annotations.
* @property {recordingLocation} album.recordingLocation - The recording location of the song/album.
* @property {string} album.releaseDate - The release date of the song.
* @property {string} album.formattedReleaseDate - The formatted version of the release date.
* @property {string} lyrics - The lyrics of the song.
*/

/**
* @typedef {Object} MemeResponse - The Meme Response object.
* @property {string} subreddit - The name of the Subreddit.
* @property {string} subredditURL - The URL of the Subreddit.
* @property {string} url - The image URL of the post.
* @property {string} permaURL - The URL of of the post.
* @property {string} title - The title of the post.
* @property {string} author - The author of the post.
* @property {string} date - The date the post was created.
* @property {number} score - The number of scores the post earned.
* @property {number} comments - The number of comments on the post.
* @property {number} awards - The number of awards given on the post.
*/

/**
 * @typedef {Object} TextFormatterOptions - The options object for the text formatter.
 * @property {string} type - The type of text formatter.
 * @property {string} text - The text to format.
 */

/**
* All available Meme Categories:
* @typedef {('meme'|'memes'|'wholesomememes'|'dankmemes')} MemeCategory
*/