const { get } = require('node-superfetch');
const chalk = require('chalk');

const { version } = require('../../package.json');
const gifs = require('../../assets/gif.json');

/**
* @class GIF
*/
class GIF {
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
      * Returns a random GIF image of the type provided.
      * @param {string} type - The Type of GIF. See https://weebyapi.xyz/api/docs#gif for all the GIFs.
      * @param {string} noanime - EXPERIMENT - IT MAY GET REMOVED: If the GIF should not be anime.
      * @returns {Promise<string>} The Formatted GIF URL.
      */
	async fetch(type, noanime = '') {
		if (typeof type !== 'string') throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('The Type parameter is not a string.')}`);
		if (!type) throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('Type parameter is missing. You will need to provide the type of GIF.')}`);
		if (noanime && typeof noanime !== 'boolean') throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('The No Anime parameter is not a boolean.')}`);

		const { body } = await get(`${this.baseURL}/${type}?noanime=${noanime}`)
			.set('Authorization', `Bearer ${this.token}`)
			.set('User-Agent', `Weeby-JS by NTM Development » v${version}`);

		if (gifs.includes(type)) {
			return body.url;
		}
		else {
			throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('The GIF you tried to request was not found. Make sure it is spelt correctly.')}`);
		}
	}
}

module.exports = GIF;