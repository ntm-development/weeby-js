const { get } = require("node-superfetch");
const chalk = require("chalk");
const { version } = require("../../package.json");
const word = require("../../assets/json/word.json");
const responses = require("../../assets/json/response.json");
const textFormatters = require("../../assets/json/formatters.json");

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
      * Returns a random SFW Meme from a Subreddit.
      * @param {('meme'|'memes'|'wholesomememes'|'dankmemes')} category - The name of the category.
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
      * @param {object} options - The options that contain the required parameters.
      * @param {string} options.type - The type of text formatter.
      * @param {string} options.text - The text to format.
      * @returns {Promise<string>} The response in a string.
      */
    async textFormat(options = {}) {
        if (typeof options.type !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Type parameter is not a string.")}`);
        if (!options.type) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Type parameter is missing. You will need to provide the type of Text Formatter Category.")}`);
        if (typeof options.text !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Text parameter is not a string.")}`);
        if (!options.text) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Text parameter is missing. You will need to provide some text.")}`);

        const { body } = await get(`${this.baseURL}/format`)
            .query({ type: options.type, text: options.text })
            .set("Authorization", `Bearer ${this.token}`)
            .set("User-Agent", `Weeby-JS by NTM Development » v${version}`);

        if (textFormatters.includes(options.type)) {
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
* @typedef {object} LyricsResponse - The response for json.lyrics
* @prop {number} id - The ID of the song.
* @prop {string} url - The Genius Lyrics URL.
* @prop {object} track - The track object.
* @prop {string} track.name - The name of the song.
* @prop {string} track.thumbnail - The thumbnail of the song.
* @prop {string} track.media - The URL of the song.
* @prop {object} artist - The artist object.
* @prop {string} artist.name - The name of the artist.
* @prop {string} artist.thumbnail - The thumbnail of the artist.
* @prop {number} artist.id - The ID of the artist.
* @prop {object} artist - The artist object.
* @prop {object} album - The album object.
* @prop {string} album.name - The name of the album.
* @prop {string} album.thumbnail - The thumbnail of the album.
* @prop {number} album.id - The ID of the album.
* @prop {object} colors - The colors object.
* @prop {string} colors.songArtPrimary - The primary color of the song art.
* @prop {string} colors.songArtSecondary - The secondary color of the song art.
* @prop {string} colors.songArtText - The text color of the song art.
* @prop {object} stats - The stats object.
* @prop {boolean} stats.hot - The number of views.
* @prop {number} stats.pageViews - The number of page views.
* @prop {number} stats.contributors - The number of contributors.
* @prop {number} stats.transcribers - The number of transcribers.
* @prop {number} stats.accepted_annotations - The number of accepted annotations.
* @prop {recordingLocation} album.recordingLocation - The recording location of the song/album.
* @prop {string} album.releaseDate - The release date of the song.
* @prop {string} album.formattedReleaseDate - The formatted version of the release date.
* @prop {string} lyrics - The lyrics of the song.
*/

/**
* @typedef {object} MemeResponse - The response for json.meme
* @prop {string} subreddit - The name of the Subreddit.
* @prop {string} subredditURL - The URL of the Subreddit.
* @prop {string} url - The image URL of the post.
* @prop {string} permaURL - The URL of of the post.
* @prop {string} title - The title of the post.
* @prop {string} author - The author of the post.
* @prop {string} date - The date the post was created.
* @prop {number} score - The number of scores the post earned.
* @prop {number} comments - The number of comments on the post.
* @prop {number} awards - The number of awards given on the post.
*/