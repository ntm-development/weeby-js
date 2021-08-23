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
        /** @access private */
        this.token = token;
        /** @access private */
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
            console.log(body.response);

            return body.response;
        } else {
            throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Response Category you tried to request was not found. Make sure it is spelt correctly.")}`);
        }
    }

    /**
      * Returns a random response.
      * @param {Object} options - The options that contain the required parameters.
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
            console.log(body.output);

            return body.output;
        } else {
            throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Text Formatter Category you tried to request was not found. Make sure it is spelt correctly.")}`);
        }
    }

    /**
      * Fetches lyrics from the Genius API.
      * @param {string} query - The lyrics to search. See https://weebyapi.xyz/api/docs#json for all the JSON endpoints.
      * @returns {Promise<lyricsResponse>} The lyrics and its informtation.
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
      * @returns {Promise<Object>} The statistics returned in a object.
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
* @typedef {Object} lyricsResponse - The response for json.lyrics
* @prop {Number} id - The ID of the song.
* @prop {String} url - The Genius Lyrics URL.
* @prop {Object} track - The track object.
* @prop {String} track.name - The name of the song.
* @prop {String} track.thumbnail - The thumbnail of the song.
* @prop {String} track.media - The URL of the song.
* @prop {Object} artist - The artist object.
* @prop {String} artist.name - The name of the artist.
* @prop {String} artist.thumbnail - The thumbnail of the artist.
* @prop {Number} artist.id - The ID of the artist.
* @prop {Object} artist - The artist object.
* @prop {Object} album - The album object.
* @prop {String} album.name - The name of the album.
* @prop {String} album.thumbnail - The thumbnail of the album.
* @prop {Number} album.id - The ID of the album.
* @prop {Object} colors - The colors object.
* @prop {String} colors.songArtPrimary - The primary color of the song art.
* @prop {String} colors.songArtSecondary - The secondary color of the song art.
* @prop {String} colors.songArtText - The text color of the song art.
* @prop {Object} stats - The stats object.
* @prop {boolean} stats.hot - The number of views.
* @prop {Number} stats.pageViews - The number of page views.
* @prop {Number} stats.contributors - The number of contributors.
* @prop {Number} stats.transcribers - The number of transcribers.
* @prop {Number} stats.accepted_annotations - The number of accepted annotations.
* @prop {recordingLocation} album.recordingLocation - The recording location of the song/album.
* @prop {String} album.releaseDate - The release date of the song.
* @prop {String} album.formattedReleaseDate - The formatted version of the release date.
* @prop {String} lyrics - The lyrics of the song.
*/