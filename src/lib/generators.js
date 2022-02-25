const { get } = require('node-superfetch');
const chalk = require('chalk');

const { version } = require('../../package.json');
const oneImage = require('../../assets/generators/oneImage.json');
const twoImages = require('../../assets/generators/twoImages.json');
const texts = require('../../assets/generators/text.json');
const twoTexts = require('../../assets/generators/twoText.json');
const textImage = require('../../assets/generators/textImage.json');

/**
* @class Generators
*/
class Generators {
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
	async oneImage({ type, image } = {}) {
		try {
			if (typeof type !== 'string') throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('The Type parameter is not a string.')}`);
			if (typeof image !== 'string') throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('The Image parameter is not a string.')}`);
			if (!type) throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('Type parameter is missing. You will need to provide the type of generator.')}`);
			if (!image) throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('Image parameter is missing. You will need to provide a valid image link.')}`);

			if (oneImage.includes(type)) {
				const { body } = await get(`${this.baseURL}/${type}`)
					.set('Authorization', `Bearer ${this.token}`)
					.set('User-Agent', `Weeby-JS by NTM Development » v${version}`)
					.query({ image: image });

				return body;
			}
			else {
				throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('The generator you tried to request was not found. Make sure it is spelt correctly.')}`);
			}
		}
		catch (e) {
			throw new Error(e);
		}
	}

	/**
      * Draws two images on a requested image generator. Please see https://weebyapi.xyz/api/docs#generators for the available generators.
      * @param {TwoImagesOptions} options - The options that contain the required parameters.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
	async twoImages({ type, firstImage, secondImage }) {
		try {
			if (typeof type !== 'string') throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('The Type parameter is not a string.')}`);
			if (typeof firstImage !== 'string') throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('The First Image parameter is not a string.')}`);
			if (typeof secondImage !== 'string') throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('The Second Image parameter is not a string.')}`);
			if (!type) throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('Type parameter is missing. You will need to provide the type of generator.')}`);
			if (!firstImage) throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('First Image parameter is missing. You will need to provide a valid image link.')}`);
			if (!secondImage) throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('Second Image parameter is missing. You will need to provide a valid image link.')}`);

			if (twoImages.includes(type)) {
				const { body } = await get(`${this.baseURL}/${type}`)
					.set('Authorization', `Bearer ${this.token}`)
					.set('User-Agent', `Weeby-JS by NTM Development » v${version}`)
					.query({ firstimage: firstImage, secondimage: secondImage });

				return body;
			}
			else {
				throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('The generator you tried to request was not found. Make sure it is spelt correctly.')}`);
			}
		}
		catch (e) {
			throw new Error(e);
		}
	}

	/**
      * Prints text on a requested image generator. Please see https://weebyapi.xyz/api/docs#generators for the available generators.
      * @param {TextOptions} options - The options that contain the required parameters.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
	async text({ type, text }) {
		try {
			if (typeof type !== 'string') throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('The Type parameter is not a string.')}`);
			if (typeof text !== 'string') throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('The Text parameter is not a string.')}`);
			if (!type) throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('Type parameter is missing. You will need to provide the type of generator.')}`);
			if (!text) throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('Text parameter is missing. You will need to provide some text.')}`);

			if (texts.includes(type)) {
				const { body } = await get(`${this.baseURL}/${type}`)
					.set('Authorization', `Bearer ${this.token}`)
					.set('User-Agent', `Weeby-JS by NTM Development » v${version}`)
					.query({ text: text });

				return body;
			}
			else {
				throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('The generator you tried to request was not found. Make sure it is spelt correctly.')}`);
			}
		}
		catch (e) {
			throw new Error(e);
		}
	}

	/**
      * Prints two texts on a requested image generator. Please see https://weebyapi.xyz/api/docs#generators for the available generators.
      * @param {TwoTextsOptions} options - The options that contain the required parameters.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
	async twoText({ type, textOne, textTwo }) {
		try {
			if (typeof type !== 'string') throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('The Type parameter is not a string.')}`);
			if (typeof textOne !== 'string') throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('The First Text parameter is not a string.')}`);
			if (typeof textTwo !== 'string') throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('The Second Text parameter is not a string.')}`);
			if (!type) throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('Type parameter is missing. You will need to provide the type of generator.')}`);
			if (!textOne) throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('First Text parameter is missing. You will need to provide some text.')}`);
			if (!textTwo) throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('Second Text parameter is missing. You will need to provide some text.')}`);

			if (twoTexts.includes(type)) {
				const { body } = await get(`${this.baseURL}/${type}`)
					.set('Authorization', `Bearer ${this.token}`)
					.set('User-Agent', `Weeby-JS by NTM Development » v${version}`)
					.query({ textone: textOne, texttwo: textTwo });

				return body;
			}
			else {
				throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('The generator you tried to request was not found. Make sure it is spelt correctly.')}`);
			}
		}
		catch (e) {
			throw new Error(e);
		}
	}

	/**
      * Draws an image and text on a requested generator. Please see https://weebyapi.xyz/api/docs#generators for the available generators.
      * @param {TextImageOptions} options - The options that contain the required parameters.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
	async textImage({ type, image, text }) {
		try {
			if (typeof image !== 'string') throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('The Image parameter is not a string.')}`);
			if (typeof text !== 'string') throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('The Text parameter is not a string.')}`);
			if (!image) throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('Image parameter is missing. You will need to provide a valid image link.')}`);
			if (!text) throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('Text parameter is missing. You will need to provide some text.')}`);

			if (textImage.includes(type)) {
				const { body } = await get(`${this.baseURL}/${type}`)
					.set('Authorization', `Bearer ${this.token}`)
					.set('User-Agent', `Weeby-JS by NTM Development » v${version}`)
					.query({ image: image, text: text });

				return body;
			}
			else {
				throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('The generator you tried to request was not found. Make sure it is spelt correctly.')}`);
			}
		}
		catch (e) {
			throw new Error(e);
		}
	}

	/**
      * Draws one image and one text on a Among Us Generator.
      * @param {EjectOptions} options - The options that contain the required parameters.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
	async eject({ image, text, outcome }) {
		try {
			if (typeof image !== 'string') throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('The Image parameter is not a string.')}`);
			if (!image) throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('Image parameter is missing. You will need to provide a valid image link.')}`);
			if (typeof text !== 'string') throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('The Text parameter is not a string.')}`);
			if (!text) throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('Text parameter is missing. You will need to provide some text.')}`);
			if (typeof outcome !== 'string') throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('The Outcome parameter is not a string.')}`);
			if (!outcome) throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('Outcome parameter is missing. You will need to provide some text.')}`);

			const { body } = await get(`${this.baseURL}/eject`)
				.set('Authorization', `Bearer ${this.token}`)
				.set('User-Agent', `Weeby-JS by NTM Development » v${version}`)
				.query({ image: image, text: text, outcome: outcome });

			return body;
		}
		catch (e) {
			throw new Error(e);
		}
	}

	/**
      * Prints two images and texts on a friendship banner. Please see https://weebyapi.xyz/api/docs#generators for the available generators.
      * @param {FriendshipOptions} options - The options that contain the required parameters.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
	async friendship({ firstImage, secondImage, firstText, secondText }) {
		try {
			if (typeof firstImage !== 'string') throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('The First Image parameter is not a string.')}`);
			if (typeof secondImage !== 'string') throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('The Second Image parameter is not a string.')}`);
			if (typeof firstText !== 'string') throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('The First Text parameter is not a string.')}`);
			if (typeof secondText !== 'string') throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('The Second Text parameter is not a string.')}`);
			if (!firstImage) throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('First Image parameter is missing. You will need to provide a valid image link.')}`);
			if (!secondImage) throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('Second Image parameter is missing. You will need to provide a valid image link.')}`);
			if (!firstText) throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('First Text parameter is missing. You will need to provide some text.')}`);
			if (!secondText) throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('Second Text parameter is missing. You will need to provide some text.')}`);

			const { body } = await get(`${this.baseURL}/friendship`)
				.set('Authorization', `Bearer ${this.token}`)
				.set('User-Agent', `Weeby-JS by NTM Development » v${version}`)
				.query({ firstimage: firstImage, secondimage: secondImage, firsttext: firstText, secondtext: secondText });

			return body;
		}
		catch (e) {
			throw new Error(e);
		}
	}

	/**
      * Draws an image, title and text on a demotivational poster. Please see https://weebyapi.xyz/api/docs#generators for the available generators.
      * @param {DemotivationalOptions} options - The options that contain the required parameters.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
	async demotivational({ image, title, text }) {
		try {
			if (typeof image !== 'string') throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('The Image parameter is not a string.')}`);
			if (typeof title !== 'string') throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('The Title parameter is not a string.')}`);
			if (typeof text !== 'string') throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('The Text parameter is not a string.')}`);
			if (!image) throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('Image parameter is missing. You will need to provide a valid image link.')}`);
			if (!title) throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('Title parameter is missing. You will need to provide some text.')}`);
			if (!text) throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('Text parameter is missing. You will need to provide some text.')}`);

			const { body } = await get(`${this.baseURL}/demotivational`)
				.set('Authorization', `Bearer ${this.token}`)
				.set('User-Agent', `Weeby-JS by NTM Development » v${version}`)
				.query({ image: image, title: title, text: text });

			return body;
		}
		catch (e) {
			throw new Error(e);
		}
	}

	/**
      * Draws a image, username and message on a Gravestone. Please see https://weebyapi.xyz/api/docs#generators for the available generators.
      * @param {RIPOptions} options - The options that contain the required parameters.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
	async rip({ avatar, username, message }) {
		try {
			if (typeof avatar !== 'string') throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('The Avatar parameter is not a string.')}`);
			if (typeof username !== 'string') throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('The Username parameter is not a string.')}`);
			if (typeof message !== 'string') throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('The Message parameter is not a string.')}`);
			if (!avatar) throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('Avatar parameter is missing. You will need to provide a valid image link.')}`);
			if (!username) throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('Username parameter is missing. You will need to provide some text.')}`);
			if (!message) throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('Message parameter is missing. You will need to provide some text.')}`);

			const { body } = await get(`${this.baseURL}/rip`)
				.set('Authorization', `Bearer ${this.token}`)
				.set('User-Agent', `Weeby-JS by NTM Development » v${version}`)
				.query({ avatar: avatar, username: username, message: message });

			return body;
		}
		catch (e) {
			throw new Error(e);
		}
	}

	/**
      * Generates a raw twitter tweet with username, tweet text and avatar. Please see https://weebyapi.xyz/api/docs#generators for the available generators.
      * @param {TweetOptions} options - The options that contain the required parameters.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
	async tweet({ username, tweet, avatar }) {
		try {
			if (typeof username !== 'string') throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('The Username parameter is not a string.')}`);
			if (typeof tweet !== 'string') throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('The Tweet parameter is not a string.')}`);
			if (typeof avatar !== 'string') throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('The Avatar parameter is not a string.')}`);
			if (!username) throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('Username parameter is missing. You will need to provide some text.')}`);
			if (!tweet) throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('Tweet parameter is missing. You will need to provide some text.')}`);
			if (!avatar) throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('Avatar parameter is missing. You will need to provide a valid image link.')}`);

			const { body } = await get(`${this.baseURL}/tweet`)
				.set('Authorization', `Bearer ${this.token}`)
				.set('User-Agent', `Weeby-JS by NTM Development » v${version}`)
				.query({ username: username, tweet: tweet, avatar: avatar });

			return body;
		}
		catch (e) {
			throw new Error(e);
		}
	}

	/**
      * Generates a twitter tweet with username (fetched from the Twitter API) and the tweet text. Please see https://weebyapi.xyz/api/docs#generators for the available generators.
      * @param {TweetFetchOptions} options - The options that contain the required parameters.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
	async tweetFetch({ username, tweet }) {
		try {
			if (typeof username !== 'string') throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('The Username parameter is not a string.')}`);
			if (typeof tweet !== 'string') throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('The Tweet parameter is not a string.')}`);
			if (!username) throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('Username parameter is missing. You will need to provide some text.')}`);
			if (!tweet) throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('Tweet parameter is missing. You will need to provide some text.')}`);

			const { body } = await get(`${this.baseURL}/tweetfetch`)
				.set('Authorization', `Bearer ${this.token}`)
				.set('User-Agent', `Weeby-JS by NTM Development » v${version}`)
				.query({ username: username, tweet: tweet });

			return body;
		}
		catch (e) {
			throw new Error(e);
		}
	}

	/**
      * Generates a Fake Spotify Now Playing Image. Please see https://weebyapi.xyz/api/docs#generators for the available generators.
      * @param {SpotifyOptions} options - The options that contain the required parameters.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
	async spotifyNp({ image, title, artist, album }) {
		try {
			if (typeof image !== 'string') throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('The Image parameter is not a string.')}`);
			if (typeof title !== 'string') throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('The Title parameter is not a string.')}`);
			if (typeof artist !== 'string') throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('The Artist parameter is not a string.')}`);
			if (typeof album !== 'string') throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('The Album parameter is not a string.')}`);
			if (!image) throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('Image parameter is missing. You will need to provide the link to an image.')}`);
			if (!title) throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('Title parameter is missing. You will need to provide some text.')}`);
			if (!artist) throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('Artist parameter is missing. You will need to provide some text.')}`);
			if (!album) throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('Album parameter is missing. You will need to provide some text.')}`);

			const { body } = await get(`${this.baseURL}/spotifynp`)
				.set('Authorization', `Bearer ${this.token}`)
				.set('User-Agent', `Weeby-JS by NTM Development » v${version}`)
				.query({ image: image, title: title, artist: artist, album: album });

			return body;
		}
		catch (e) {
			throw new Error(e);
		}
	}

	/**
      * Prints up to four text on the Plankton Plan Meme.
      * @param {PlanktonPlanOptions} options - The options that contain the required parameters.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
	async planktonPlan({ stepOne, stepTwo, stepThree, stepFour }) {
		try {
			if (typeof type !== 'string') throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('The Type parameter is not a string.')}`);
			if (typeof stepOne !== 'string') throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('The First Text parameter is not a string.')}`);
			if (typeof stepTwo !== 'string') throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('The Second Text parameter is not a string.')}`);
			if (typeof stepThree !== 'string') throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('The Third Text parameter is not a string.')}`);
			if (typeof stepFour !== 'string') throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('The Fourth Text parameter is not a string.')}`);
			if (!stepOne) throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('Step One Text parameter is missing. You will need to provide some text.')}`);
			if (!stepTwo) throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('Step Two Text parameter is missing. You will need to provide some text.')}`);
			if (!stepThree) throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('Step Three Text parameter is missing. You will need to provide some text.')}`);
			if (!stepFour) throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('Step Four Text parameter is missing. You will need to provide some text.')}`);

			const { body } = await get(`${this.baseURL}/planktonplan`)
				.set('Authorization', `Bearer ${this.token}`)
				.set('User-Agent', `Weeby-JS by NTM Development » v${version}`)
				.query({ stepone: stepOne, steptwo: stepTwo, stepthree: stepThree, stepfour: stepFour });

			return body;
		}
		catch (e) {
			throw new Error(e);
		}
	}

	/**
      * Prints up to four text on the Brain Meme.
      * @param {BrainOptions} options - The options that contain the required parameters.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
	async brain({ textOne, textTwo, textThree, textFour }) {
		try {
			if (typeof type !== 'string') throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('The Type parameter is not a string.')}`);
			if (typeof stepOne !== 'string') throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('The First Text parameter is not a string.')}`);
			if (typeof stepTwo !== 'string') throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('The Second Text parameter is not a string.')}`);
			if (typeof stepThree !== 'string') throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('The Third Text parameter is not a string.')}`);
			if (typeof stepFour !== 'string') throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('The Fourth Text parameter is not a string.')}`);
			if (!textOne) throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('Text One parameter is missing. You will need to provide some text.')}`);
			if (!textTwo) throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('Text Two parameter is missing. You will need to provide some text.')}`);
			if (!textThree) throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('Text Three parameter is missing. You will need to provide some text.')}`);
			if (!textFour) throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('Text Four parameter is missing. You will need to provide some text.')}`);

			const { body } = await get(`${this.baseURL}/brain`)
				.set('Authorization', `Bearer ${this.token}`)
				.set('User-Agent', `Weeby-JS by NTM Development » v${version}`)
				.query({ textone: textOne, texttwo: textTwo, textthree: textThree, textfour: textFour });

			return body;
		}
		catch (e) {
			throw new Error(e);
		}
	}

	/**
      * Generates an Image, Text and Color on the This Is Spotify Meme. Please see https://weebyapi.xyz/api/docs#generators for the available generators.
      * @param {ThisIsSpotifyOptions} options - The options that contain the required parameters.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
	async thisIsSpotify({ image, text, color } = {}) {
		try {
			if (typeof image !== 'string') throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('The Image parameter is not a string.')}`);
			if (typeof text !== 'string') throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('The Text parameter is not a string.')}`);
			if (typeof color !== 'string') throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('The Color parameter is not a string.')}`);
			if (!image) throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('Image parameter is missing. You will need to provide the link to an image.')}`);
			if (!text) throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('Text parameter is missing. You will need to provide some text.')}`);
			if (!color) throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('Color parameter is missing. You will need to provide a valid color hex.')}`);

			const { body } = await get(`${this.baseURL}/thisisspotify`)
				.set('Authorization', `Bearer ${this.token}`)
				.set('User-Agent', `Weeby-JS by NTM Development » v${version}`)
				.query({ image: image, text: text, color: color });

			return body;
		}
		catch (e) {
			throw new Error(e);
		}
	}

	/**
      * Draws one image on an animated triggered GIF.
      * @param {TriggeredOptions} options - The options that contain the required parameters.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
	async triggered({ image, tint = true }) {
		try {
			if (typeof image !== 'string') throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('The Image parameter is not a string.')}`);
			if (!image) throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('Image parameter is missing. You will need to provide a valid image link.')}`);

			const tintBool = tint ? tint : '';

			const { body } = await get(`${this.baseURL}/triggered`)
				.set('Authorization', `Bearer ${this.token}`)
				.set('User-Agent', `Weeby-JS by NTM Development » v${version}`)
				.query({ image: image, tint: tintBool });

			return body;
		}
		catch (e) {
			throw new Error(e);
		}
	}

	/**
      * Generates a image with the specified currency and its amount.
      * @param {CurrencyOptions} options - The options that contain the required parameters.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
	async currency({ type, amount }) {
		try {
			if (typeof type !== 'string') throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('The Type parameter is not a string.')}`);
			if (typeof amount !== 'number') throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('The Amount query is not a string.')}`);
			if (!type) throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('Type parameter is missing. You will need to provide the type of generator.')}`);
			if (!amount) throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('Amount parameter is missing. You will need to provide a number.')}`);

			const { body } = await get(`${this.baseURL}/currency`)
				.set('Authorization', `Bearer ${this.token}`)
				.set('User-Agent', `Weeby-JS by NTM Development » v${version}`)
				.query({ type: type, amount: amount });

			return body;
		}
		catch (e) {
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
			if (typeof hex !== 'string') throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('The hex parameter is not a string.')}`);
			if (!hex) throw new Error(`${chalk.magenta('Weeby-JS')} ${chalk.gray('»')} ${chalk.yellow('Hex parameter is missing. You will need to provide the type of generator.')}`);

			const { body } = await get(`${this.baseURL}/color`)
				.set('Authorization', `Bearer ${this.token}`)
				.set('User-Agent', `Weeby-JS by NTM Development » v${version}`)
				.query({ hex });

			return body;
		}
		catch (e) {
			throw new Error(e);
		}
	}
}

module.exports = Generators;

/**
 * All available eject Outcomes:
 * @typedef {('ejected'|'imposter'|'notimposter')} EjectOutcomes
 */

/**
 * All available currency types:
 * @typedef {('dollar'|'euro'|'pound'|'yen')} CurrencyType
 */

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
 * @property {EjectOutcomes} outcome - The outcome of the generator.
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
 * @property {string} message - The text to be displayed.
 * @property {string} username - The username to be displayed.
 * @property {string} avatar - The link to an image (.png, .jpg, .gif)
 */

/**
 * The options for the tweet generator.
 * @typedef {Object} TweetOptions
 * @property {string} username - The username to be displayed.
 * @property {string} tweet - The tweet to be displayed.
 * @property {string} avatar - The link to an image (.png, .jpg, .gif)
 */

/**
 * The options for the tweetFetch generator.
 * @typedef {Object} TweetFetchOptions
 * @property {string} username - The username to be displayed.
 * @property {string} tweet - The tweet to be displayed.
 */

/**
 * The options for the spotify generator.
 * @typedef {Object} SpotifyOptions
 * @property {string} image - The link to an image (.png, .jpg, .gif)
 * @property {string} title - The name of the song to be displayed.
 * @property {string} artist - The artist name to be displayed.
 * @property {string} album - The album name to be displayed.
 */

/**
 * The options for the triggered generator.
 * @typedef {Object} TriggeredOptions
 * @property {string} image - The link to an image (.png, .jpg, .gif)
 * @property {boolean} [tint=true] - Whether the generated GIF should have a orange tint. Defaults to true.
 */

/**
 * The options for the this is spotify generator.
 * @typedef {Object} ThisIsSpotifyOptions
 * @property {string} image - The link to an image (.png, .jpg, .gif)
 * @property {string} text - The text to print.
 * @property {string} color - The hex color of the background.
 */

/**
 * The options for the currency generator.
 * @typedef {Object} CurrencyOptions
 * @property {CurrencyType} type - The type of currency.
 * @property {number} amount - The amount of money to display.
 */

/**
 * The options for plankton plan generator.
 * @typedef {Object} PlanktonPlanOptions
 * @property {string} stepOne - The first text to be displayed.
 * @property {string} stepTwo - The second text to be displayed.
 * @property {string} stepThree - The third text to be displayed.
 * @property {string} stepFour - The fourth text to be displayed.
 */

/**
 * The options for plankton plan generator.
 * @typedef {Object} BrainOptions
 * @property {string} textOne - The first text to be displayed.
 * @property {string} textTwo - The second text to be displayed.
 * @property {string} textThree - The third text to be displayed.
 * @property {string} textFour - The fourth text to be displayed.
 */