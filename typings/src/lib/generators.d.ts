export = Generators;
/**
* @class Generators
*/
declare class Generators {
    constructor(token: any, baseURL: any);
    /** @access private */
    token: any;
    /** @access private */
    baseURL: any;
    /**
      * Draws one image on a requested image generator. Please see https://weebyapi.xyz/api/docs#generators for the available generators.
      * @param {Object} options - The options that contain the required parameters.
      * @param {string} options.type - The Type of Generator.
      * @param {string} options.image - The link to an image (.png, .jpg, .gif)
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    oneImage(options?: {
        type: string;
        image: string;
    }): Promise<any>;
    /**
      * Draws two images on a requested image generator. Please see https://weebyapi.xyz/api/docs#generators for the available generators.
      * @param {Object} options - The options that contain the required parameters.
      * @param {string} options.type - The Type of Generator.
      * @param {string} options.firstImage - The link to the first image (.png, .jpg, .gif)
      * @param {string} options.secondImage - The link to the second image (.png, .jpg, .gif)
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    twoImages(options?: {
        type: string;
        firstImage: string;
        secondImage: string;
    }): Promise<any>;
    /**
      * Prints text on a requested image generator. Please see https://weebyapi.xyz/api/docs#generators for the available generators.
      * @param {Object} options - The options that contain the required parameters.
      * @param {string} options.type - The Type of Generator.
      * @param {string} options.text - The text to print.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    text(options?: {
        type: string;
        text: string;
    }): Promise<any>;
    /**
      * Prints two texts on a requested image generator. Please see https://weebyapi.xyz/api/docs#generators for the available generators.
      * @param {Object} options - The options that contain the required parameters.
      * @param {string} options.type - The Type of Generator.
      * @param {string} options.textOne - The first text to print.
      * @param {string} options.textTwo - The second text to print.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    twoText(options?: {
        type: string;
        textOne: string;
        textTwo: string;
    }): Promise<any>;
    /**
      * Draws an image and text on a requested generator. Please see https://weebyapi.xyz/api/docs#generators for the available generators.
      * @param {Object} options - The options that contain the required parameters.
      * @param {string} options.type - The type of Generator
      * @param {string} options.image - The link to an image (.png, .jpg, .gif)
      * @param {string} options.text - The text to print.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    textImage(options?: {
        type: string;
        image: string;
        text: string;
    }): Promise<any>;
    /**
      * Prints two images and texts on a friendship banner. Please see https://weebyapi.xyz/api/docs#generators for the available generators.
      * @param {Object} options - The options that contain the required parameters.
      * @param {string} options.firstImage - The link to the first image (.png, .jpg, .gif)
      * @param {string} options.secondImage - The link to the second image (.png, .jpg, .gif)
      * @param {string} options.firstText - The first text to print.
      * @param {string} options.secondText - The second text to print.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    friendship(options?: {
        firstImage: string;
        secondImage: string;
        firstText: string;
        secondText: string;
    }): Promise<any>;
    /**
      * Draws an image, title and text on a demotivational poster. Please see https://weebyapi.xyz/api/docs#generators for the available generators.
      * @param {Object} options - The options that contain the required parameters.
      * @param {string} options.image - The link to an image (.png, .jpg, .gif)
      * @param {string} options.title - The title text to print.
      * @param {string} options.text - The text to print.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    demotivational(options?: {
        image: string;
        title: string;
        text: string;
    }): Promise<any>;
    /**
      * Draws a image, username and message on a Gravestone. Please see https://weebyapi.xyz/api/docs#generators for the available generators.
      * @param {Object} options - The options that contain the required parameters.
      * @param {string} options.avatar - The link to an image (.png, .jpg, .gif)
      * @param {string} options.username - The username to print.
      * @param {string} options.message - The text to print.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    rip(options?: {
        avatar: string;
        username: string;
        message: string;
    }): Promise<any>;
    /**
      * Generates a raw twitter tweet with username, tweet text and avatar. Please see https://weebyapi.xyz/api/docs#generators for the available generators.
      * @param {Object} options - The options that contain the required parameters.
      * @param {string} options.username - The username to print.
      * @param {string} options.tweet - The text to print.
      * @param {string} options.avatar - The link to an image (.png, .jpg, .gif)
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    tweet(options?: {
        username: string;
        tweet: string;
        avatar: string;
    }): Promise<any>;
    /**
      * Generates a twitter tweet with username (fetched from the Twitter API) and the tweet text. Please see https://weebyapi.xyz/api/docs#generators for the available generators.
      * @param {Object} options - The options that contain the required parameters.
      * @param {string} options.username - The username to print.
      * @param {string} options.tweet - The text to print.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    tweetFetch(options?: {
        username: string;
        tweet: string;
    }): Promise<any>;
    /**
      * Generates a Fake Spotify Now Playing Image. Please see https://weebyapi.xyz/api/docs#generators for the available generators.
      * @param {Object} options - The options that contain the required parameters.
      * @param {string} options.image - The link to an image (.png, .jpg, .gif)
      * @param {string} options.songName - The name of the song to print.
      * @param {string} options.artist - The artist name to print.
      * @param {string} options.userPicks - The user's picks name to print.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    spotifyNp(options?: {
        image: string;
        songName: string;
        artist: string;
        userPicks: string;
    }): Promise<any>;
    /**
      * Generates a image with the specified currency and its amount.
      * @param {Object} options - The options that contain the required parameters.
      * @param {('dollar'|'euro'|'pound'|'yen')} options.type - The type of currency.
      * @param {number} options.amount - The amount of money to display.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    currency(options?: {
        type: ('dollar' | 'euro' | 'pound' | 'yen');
        amount: number;
    }): Promise<any>;
    /**
      * Returns the colour in a Image (Buffer) format. Please see https://weebyapi.xyz/api/docs#generators for the available generators.
      * @param {string} hex - The hex color (Do not include the hashtag).
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    color(hex: string): Promise<any>;
}
