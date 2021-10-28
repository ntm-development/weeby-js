const { get } = require("node-superfetch");
const chalk = require("chalk");
const { version } = require("../../package.json");
const oneImage = require("../../assets/generators/oneImage.json");
const twoImages = require("../../assets/generators/twoImages.json");
const texts = require("../../assets/generators/text.json");
const twoTexts = require("../../assets/generators/twoText.json");
const textImage = require("../../assets/generators/textImage.json");

/**
* @class Generators
*/
class Generators {
    /**
    * The options for one image generators.
    * @typedef {Object} OneImageOptions
    * @property {string} type - The type of generator.
    * @property {string} image - The link to an image (.png, .jpg, .gif)
    */

    /**
     * The options for two images generators.
     * @typedef {Object} TwoImagesOptions
     * @property {string} type - The type of generator.
     * @property {string} firstImage - The link to the first image (.png, .jpg, .gif)
     * @property {string} secondImage - The link to the second image (.png, .jpg, .gif)
     */

    /**
     * The options for text generators.
     * @typedef {Object} TextOptions
     * @property {string} type - The type of generator.
     * @property {string} text - The text to be displayed.
     */

    /**
     * The options for two texts generators.
     * @typedef {Object} TwoTextsOptions
     * @property {string} type - The type of generator.
     * @property {string} textOne - The first text to be displayed.
     * @property {string} textTwo - The second text to be displayed.
     */

    /**
     * The options for text image generators.
     * @typedef {Object} TextImageOptions
     * @property {string} type - The type of generator.
     * @property {string} text - The text to be displayed.
     * @property {string} image - The link to an image (.png, .jpg, .gif)
     */

    /**
     * The options for the eject generator.
     * @typedef {Object} EjectOptions
     * @property {string} text - The text to be displayed.
     * @property {string} image - The link to an image (.png, .jpg, .gif)
     * @property {('ejected'|'imposter'|'notimposter')} outcome - The outcome of the generator.
     */

    /**
     * The options for the friendship generator.
     * @typedef {Object} FriendshipOptions
     * @property {string} firstImage - The link to the first image (.png, .jpg, .gif)
     * @property {string} secondImage - The link to the second image (.png, .jpg, .gif)
     * @property {string} firstText - The first text to be displayed.
     * @property {string} secondText - The second text to be displayed.
     */

    /**
     * The options for the demotivational generator.
     * @typedef {Object} DemotivationalOptions
     * @property {string} text - The text to be displayed.
     * @property {string} title - The title to be displayed.
     * @property {string} image - The link to an image (.png, .jpg, .gif)
     */

    /**
     * The options for the RIP generator.
     * @typedef {Object} RIPOptions
     * @property {string} text - The text to be displayed.
     * @property {string} username - The username to be displayed.
     * @property {string} image - The link to an image (.png, .jpg, .gif)
     */

    /**
     * The options for the tweet generator.
     * @typedef {Object} TweetOptions
     * @property {string} username - The username to be displayed.
     * @property {string} tweet - The tweet to be displayed.
     * @property {string} avatar - The link to an image (.png, .jpg, .gif)
     */

    /**
     * The options for the tweetfetch generator.
     * @typedef {Object} TweetFetchOptions
     * @property {string} username - The username to be displayed.
     * @property {string} tweet - The tweet to be displayed.
     */

    /**
     * The options for the spotify generator.
     * @typedef {Object} SpotifyOptions
     * @property {string} image - The link to an image (.png, .jpg, .gif)
     * @property {string} songName - The name of the song to print.
     * @property {string} artist - The artist name to print.
     * @property {string} userPicks - The user's picks name to print.
     */

    /**
     * The options for the triggered generator.
     * @typedef {Object} TriggeredOptions
     * @property {string} image - The link to an image (.png, .jpg, .gif)
     * @property {boolean} [tint=true] - Whether the generated GIF should have a orange tint. Defaults to true.
     */

    /**
     * The options for the currency generator.
     * @typedef {Object} CurrencyOptions
     * @property {('dollar'|'euro'|'pound'|'yen')} type - The type of currency.
     * @property {number} amount - The amount of money to display.
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
      * Draws one image on a requested image generator. Please see https://weebyapi.xyz/api/docs#generators for the available generators.
      * @param {OneImageOptions} options - The options that contain the required parameters.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    async oneImage(options = {}) {
        try {
            if (typeof options.type !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Type parameter is not a string.")}`);
            if (typeof options.image !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Image parameter is not a string.")}`);
            if (!options.type) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Type parameter is missing. You will need to provide the type of generator.")}`);
            if (!options.image) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Image parameter is missing. You will need to provide a valid image link.")}`);

            if (oneImage.includes(options.type)) {
                const { body } = await get(`${this.baseURL}/${options.type}`)
                    .set("Authorization", `Bearer ${this.token}`)
                    .set("User-Agent", `Weeby-JS by NTM Development » v${version}`)
                    .query({ image: options.image });

                return body;
            } else {
                throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The generator you tried to request was not found. Make sure it is spelt correctly.")}`);
            }
        } catch (e) {
            throw new Error(e);
        }
    }

    /**
      * Draws two images on a requested image generator. Please see https://weebyapi.xyz/api/docs#generators for the available generators.
      * @param {TwoImagesOptions} options - The options that contain the required parameters.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    async twoImages(options = {}) {
        try {
            if (typeof options.type !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Type parameter is not a string.")}`);
            if (typeof options.firstImage !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The First Image parameter is not a string.")}`);
            if (typeof options.secondImage !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Second Image parameter is not a string.")}`);
            if (!options.type) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Type parameter is missing. You will need to provide the type of generator.")}`);
            if (!options.firstImage) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("First Image parameter is missing. You will need to provide a valid image link.")}`);
            if (!options.secondImage) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Second Image parameter is missing. You will need to provide a valid image link.")}`);

            if (twoImages.includes(options.type)) {
                const { body } = await get(`${this.baseURL}/${options.type}`)
                    .set("Authorization", `Bearer ${this.token}`)
                    .set("User-Agent", `Weeby-JS by NTM Development » v${version}`)
                    .query({ firstimage: options.firstImage, secondimage: options.secondImage });

                return body;
            } else {
                throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The generator you tried to request was not found. Make sure it is spelt correctly.")}`);
            }
        } catch (e) {
            throw new Error(e);
        }
    }

    /**
      * Prints text on a requested image generator. Please see https://weebyapi.xyz/api/docs#generators for the available generators.
      * @param {TextOptions} options - The options that contain the required parameters.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    async text(options = {}) {
        try {
            if (typeof options.type !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Type parameter is not a string.")}`);
            if (typeof options.text !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Text parameter is not a string.")}`);
            if (!options.type) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Type parameter is missing. You will need to provide the type of generator.")}`);
            if (!options.text) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Text parameter is missing. You will need to provide some text.")}`);

            if (texts.includes(options.type)) {
                const { body } = await get(`${this.baseURL}/${options.type}`)
                    .set("Authorization", `Bearer ${this.token}`)
                    .set("User-Agent", `Weeby-JS by NTM Development » v${version}`)
                    .query({ text: options.text });

                return body;
            } else {
                throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The generator you tried to request was not found. Make sure it is spelt correctly.")}`);
            }
        } catch (e) {
            throw new Error(e);
        }
    }

    /**
      * Prints two texts on a requested image generator. Please see https://weebyapi.xyz/api/docs#generators for the available generators.
      * @param {TwoTextsOptions} options - The options that contain the required parameters.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    async twoText(options = {}) {
        try {
            if (typeof options.type !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Type parameter is not a string.")}`);
            if (typeof options.textOne !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The First Text parameter is not a string.")}`);
            if (typeof options.textTwo !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Second Text parameter is not a string.")}`);
            if (!options.type) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Type parameter is missing. You will need to provide the type of generator.")}`);
            if (!options.textOne) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("First Text parameter is missing. You will need to provide some text.")}`);
            if (!options.textTwo) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Second Text parameter is missing. You will need to provide some text.")}`);

            if (twoTexts.includes(options.type)) {
                const { body } = await get(`${this.baseURL}/${options.type}`)
                    .set("Authorization", `Bearer ${this.token}`)
                    .set("User-Agent", `Weeby-JS by NTM Development » v${version}`)
                    .query({ textone: options.textOne, texttwo: options.textTwo });

                return body;
            } else {
                throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The generator you tried to request was not found. Make sure it is spelt correctly.")}`);
            }
        } catch (e) {
            throw new Error(e);
        }
    }

    /**
      * Draws an image and text on a requested generator. Please see https://weebyapi.xyz/api/docs#generators for the available generators.
      * @param {TextImageOptions} options - The options that contain the required parameters.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    async textImage(options = {}) {
        try {
            if (typeof options.image !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Image parameter is not a string.")}`);
            if (typeof options.text !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Text parameter is not a string.")}`);
            if (!options.image) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Image parameter is missing. You will need to provide a valid image link.")}`);
            if (!options.text) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Text parameter is missing. You will need to provide some text.")}`);

            if (textImage.includes(options.type)) {
                const { body } = await get(`${this.baseURL}/${options.type}`)
                    .set("Authorization", `Bearer ${this.token}`)
                    .set("User-Agent", `Weeby-JS by NTM Development » v${version}`)
                    .query({ image: options.image, text: options.text });

                return body;
            } else {
                throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The generator you tried to request was not found. Make sure it is spelt correctly.")}`);
            }
        } catch (e) {
            throw new Error(e);
        }
    }

    /**
      * Draws one image and one text on a Among Us Generator.
      * @param {EjectOptions} options - The options that contain the required parameters.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    async eject(options = {}) {
        try {
            if (typeof options.image !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Image parameter is not a string.")}`);
            if (!options.image) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Image parameter is missing. You will need to provide a valid image link.")}`);
            if (typeof options.text !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Text parameter is not a string.")}`);
            if (!options.text) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Text parameter is missing. You will need to provide some text.")}`);
            if (typeof options.outcome !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Outcome parameter is not a string.")}`);
            if (!options.outcome) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Outcome parameter is missing. You will need to provide some text.")}`);

            const { body } = await get(`${this.baseURL}/eject`)
                .set("Authorization", `Bearer ${this.token}`)
                .set("User-Agent", `Weeby-JS by NTM Development » v${version}`)
                .query({ image: options.image, text: options.text, outcome: options.outcome });

            return body;
        } catch (e) {
            throw new Error(e);
        }
    }

    /**
      * Prints two images and texts on a friendship banner. Please see https://weebyapi.xyz/api/docs#generators for the available generators.
      * @param {FriendshipOptions} options - The options that contain the required parameters.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    async friendship(options = {}) {
        try {
            if (typeof options.firstImage !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The First Image parameter is not a string.")}`);
            if (typeof options.secondImage !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Second Image parameter is not a string.")}`);
            if (typeof options.firstText !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The First Text parameter is not a string.")}`);
            if (typeof options.secondText !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Second Text parameter is not a string.")}`);
            if (!options.firstImage) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("First Image parameter is missing. You will need to provide a valid image link.")}`);
            if (!options.secondImage) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Second Image parameter is missing. You will need to provide a valid image link.")}`);
            if (!options.firstText) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("First Text parameter is missing. You will need to provide some text.")}`);
            if (!options.secondText) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Second Text parameter is missing. You will need to provide some text.")}`);

            const { body } = await get(`${this.baseURL}/friendship`)
                .set("Authorization", `Bearer ${this.token}`)
                .set("User-Agent", `Weeby-JS by NTM Development » v${version}`)
                .query({ firstimage: options.firstImage, secondimage: options.secondImage, firsttext: options.firstText, secondtext: options.secondText });

            return body;
        } catch (e) {
            throw new Error(e);
        }
    }

    /**
      * Draws an image, title and text on a demotivational poster. Please see https://weebyapi.xyz/api/docs#generators for the available generators.
      * @param {DemotivationalOptions} options - The options that contain the required parameters.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    async demotivational(options = {}) {
        try {
            if (typeof options.image !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Image parameter is not a string.")}`);
            if (typeof options.title !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Title parameter is not a string.")}`);
            if (typeof options.text !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Text parameter is not a string.")}`);
            if (!options.image) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Image parameter is missing. You will need to provide a valid image link.")}`);
            if (!options.title) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Title parameter is missing. You will need to provide some text.")}`);
            if (!options.text) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Text parameter is missing. You will need to provide some text.")}`);

            const { body } = await get(`${this.baseURL}/demotivational`)
                .set("Authorization", `Bearer ${this.token}`)
                .set("User-Agent", `Weeby-JS by NTM Development » v${version}`)
                .query({ image: options.image, title: options.title, text: options.text });

            return body;
        } catch (e) {
            throw new Error(e);
        }
    }

    /**
      * Draws a image, username and message on a Gravestone. Please see https://weebyapi.xyz/api/docs#generators for the available generators.
      * @param {RIPOptions} options - The options that contain the required parameters.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    async rip(options = {}) {
        try {
            if (typeof options.avatar !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Avatar parameter is not a string.")}`);
            if (typeof options.username !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Username parameter is not a string.")}`);
            if (typeof options.message !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Message parameter is not a string.")}`);
            if (!options.avatar) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Avatar parameter is missing. You will need to provide a valid image link.")}`);
            if (!options.username) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Username parameter is missing. You will need to provide some text.")}`);
            if (!options.message) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Message parameter is missing. You will need to provide some text.")}`);

            const { body } = await get(`${this.baseURL}/rip`)
                .set("Authorization", `Bearer ${this.token}`)
                .set("User-Agent", `Weeby-JS by NTM Development » v${version}`)
                .query({ avatar: options.avatar, username: options.username, message: options.message });

            return body;
        } catch (e) {
            throw new Error(e);
        }
    }

    /**
      * Generates a raw twitter tweet with username, tweet text and avatar. Please see https://weebyapi.xyz/api/docs#generators for the available generators.
      * @param {TweetOptions} options - The options that contain the required parameters.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    async tweet(options = {}) {
        try {
            if (typeof options.username !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Username parameter is not a string.")}`);
            if (typeof options.tweet !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Tweet parameter is not a string.")}`);
            if (typeof options.avatar !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Avatar parameter is not a string.")}`);
            if (!options.username) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Username parameter is missing. You will need to provide some text.")}`);
            if (!options.tweet) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Tweet parameter is missing. You will need to provide some text.")}`);
            if (!options.avatar) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Avatar parameter is missing. You will need to provide a valid image link.")}`);

            const { body } = await get(`${this.baseURL}/tweet`)
                .set("Authorization", `Bearer ${this.token}`)
                .set("User-Agent", `Weeby-JS by NTM Development » v${version}`)
                .query({ username: options.username, tweet: options.tweet, avatar: options.avatar });

            return body;
        } catch (e) {
            throw new Error(e);
        }
    }

    /**
      * Generates a twitter tweet with username (fetched from the Twitter API) and the tweet text. Please see https://weebyapi.xyz/api/docs#generators for the available generators.
      * @param {TweetFetchOptions} options - The options that contain the required parameters.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    async tweetFetch(options = {}) {
        try {
            if (typeof options.username !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Username parameter is not a string.")}`);
            if (typeof options.tweet !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Tweet parameter is not a string.")}`);
            if (!options.username) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Username parameter is missing. You will need to provide some text.")}`);
            if (!options.tweet) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Tweet parameter is missing. You will need to provide some text.")}`);

            const { body } = await get(`${this.baseURL}/tweetfetch`)
                .set("Authorization", `Bearer ${this.token}`)
                .set("User-Agent", `Weeby-JS by NTM Development » v${version}`)
                .query({ username: options.username, tweet: options.tweet });

            return body;
        } catch (e) {
            throw new Error(e);
        }
    }

    /**
      * Generates a Fake Spotify Now Playing Image. Please see https://weebyapi.xyz/api/docs#generators for the available generators.
      * @param {SpotifyOptions} options - The options that contain the required parameters.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    async spotifyNp(options = {}) {
        try {
            if (typeof options.image !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Image parameter is not a string.")}`);
            if (typeof options.songName !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Song Name parameter is not a string.")}`);
            if (typeof options.artist !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Artist parameter is not a string.")}`);
            if (typeof options.userPicks !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The User Picks parameter is not a string.")}`);
            if (!options.image) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Image parameter is missing. You will need to provide some text.")}`);
            if (!options.songName) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Song Name parameter is missing. You will need to provide some text.")}`);
            if (!options.artist) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Artist parameter is missing. You will need to provide some text.")}`);
            if (!options.userPicks) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("User Picks parameter is missing. You will need to provide some text.")}`);

            const { body } = await get(`${this.baseURL}/spotifynp`)
                .set("Authorization", `Bearer ${this.token}`)
                .set("User-Agent", `Weeby-JS by NTM Development » v${version}`)
                .query({ image: options.image, songname: options.songName, artist: options.artist, userpicks: options.userPicks });

            return body;
        } catch (e) {
            throw new Error(e);
        }
    }

    /**
      * Draws one image on an animated triggered GIF.
      * @param {TriggeredOptions} options - The options that contain the required parameters.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    async triggered(options = {}) {
        try {
            if (typeof options.image !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Image parameter is not a string.")}`);
            if (!options.image) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Image parameter is missing. You will need to provide a valid image link.")}`);

            const tint = options.tint ? options.tint : "";

            const { body } = await get(`${this.baseURL}/triggered`)
                .set("Authorization", `Bearer ${this.token}`)
                .set("User-Agent", `Weeby-JS by NTM Development » v${version}`)
                .query({ image: options.image, tint: tint });

            return body;
        } catch (e) {
            throw new Error(e);
        }
    }

    /**
      * Generates a image with the specified currency and its amount.
      * @param {Object} options - The options that contain the required parameters.
      * @param {('dollar'|'euro'|'pound'|'yen')} options.type - The type of currency.
      * @param {number} options.amount - The amount of money to display.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    async currency(options = {}) {
        try {
            if (typeof options.type !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Type parameter is not a string.")}`);
            if (typeof options.amount !== "number") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The Amount query is not a string.")}`);
            if (!options.type) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Type parameter is missing. You will need to provide the type of generator.")}`);
            if (!options.amount) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Amount parameter is missing. You will need to provide a number.")}`);

            const { body } = await get(`${this.baseURL}/currency`)
                .set("Authorization", `Bearer ${this.token}`)
                .set("User-Agent", `Weeby-JS by NTM Development » v${version}`)
                .query({ type: options.type, amount: options.amount });

            return body;
        } catch (e) {
            throw new Error(e);
        }
    }

    /**
      * Returns the colour in a Image (Buffer) format. Please see https://weebyapi.xyz/api/docs#generators for the available generators.
      * @param {string} hex - The hex color (Do not include the hashtag).
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    async color(hex) {
        try {
            if (typeof hex !== "string") throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("The hex parameter is not a string.")}`);
            if (!hex) throw new Error(`${chalk.magenta("Weeby-JS")} ${chalk.gray("»")} ${chalk.yellow("Hex parameter is missing. You will need to provide the type of generator.")}`);

            const { body } = await get(`${this.baseURL}/color`)
                .set("Authorization", `Bearer ${this.token}`)
                .set("User-Agent", `Weeby-JS by NTM Development » v${version}`)
                .query({ hex });

            return body;
        } catch (e) {
            throw new Error(e);
        }
    }
}

module.exports = Generators;