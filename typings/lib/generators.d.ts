export = Generators;
/**
* @class Generators
*/
declare class Generators {
    constructor(token: any, baseURL: any);
    /**
     * Your Weeby API Token.
     * @type {string}
     * @private
    */
    private token;
    /**
     * The base URL.
     * @type {string}
     * @private
    */
    private baseURL;
    /**
      * Draws one image on a requested image generator. Please see https://weebyapi.xyz/api/docs#generators for the available generators.
      * @param {OneImageOptions} options - The options that contain the required parameters.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    oneImage({ type, image }?: OneImageOptions): Promise<any>;
    /**
      * Draws two images on a requested image generator. Please see https://weebyapi.xyz/api/docs#generators for the available generators.
      * @param {TwoImagesOptions} options - The options that contain the required parameters.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    twoImages({ type, firstImage, secondImage }: TwoImagesOptions): Promise<any>;
    /**
      * Prints text on a requested image generator. Please see https://weebyapi.xyz/api/docs#generators for the available generators.
      * @param {TextOptions} options - The options that contain the required parameters.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    text({ type, text }: TextOptions): Promise<any>;
    /**
      * Prints two texts on a requested image generator. Please see https://weebyapi.xyz/api/docs#generators for the available generators.
      * @param {TwoTextsOptions} options - The options that contain the required parameters.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    twoText({ type, textOne, textTwo }: TwoTextsOptions): Promise<any>;
    /**
      * Draws an image and text on a requested generator. Please see https://weebyapi.xyz/api/docs#generators for the available generators.
      * @param {TextImageOptions} options - The options that contain the required parameters.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    textImage({ type, image, text }: TextImageOptions): Promise<any>;
    /**
      * Draws one image and one text on a Among Us Generator.
      * @param {EjectOptions} options - The options that contain the required parameters.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    eject({ image, text, outcome }: EjectOptions): Promise<any>;
    /**
      * Prints two images and texts on a friendship banner. Please see https://weebyapi.xyz/api/docs#generators for the available generators.
      * @param {FriendshipOptions} options - The options that contain the required parameters.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    friendship({ firstImage, secondImage, firstText, secondText }: FriendshipOptions): Promise<any>;
    /**
      * Draws an image, title and text on a demotivational poster. Please see https://weebyapi.xyz/api/docs#generators for the available generators.
      * @param {DemotivationalOptions} options - The options that contain the required parameters.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    demotivational({ image, title, text }: DemotivationalOptions): Promise<any>;
    /**
      * Draws a image, username and message on a Gravestone. Please see https://weebyapi.xyz/api/docs#generators for the available generators.
      * @param {RIPOptions} options - The options that contain the required parameters.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    rip({ avatar, username, message }: RIPOptions): Promise<any>;
    /**
      * Generates a raw twitter tweet with username, tweet text and avatar. Please see https://weebyapi.xyz/api/docs#generators for the available generators.
      * @param {TweetOptions} options - The options that contain the required parameters.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    tweet({ username, tweet, avatar }: TweetOptions): Promise<any>;
    /**
      * Generates a twitter tweet with username (fetched from the Twitter API) and the tweet text. Please see https://weebyapi.xyz/api/docs#generators for the available generators.
      * @param {TweetFetchOptions} options - The options that contain the required parameters.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    tweetFetch({ username, tweet }: TweetFetchOptions): Promise<any>;
    /**
      * Generates a Fake Spotify Now Playing Image. Please see https://weebyapi.xyz/api/docs#generators for the available generators.
      * @param {SpotifyOptions} options - The options that contain the required parameters.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    spotifyNp({ image, title, artist, album }: SpotifyOptions): Promise<any>;
    /**
      * Generates an Image, Text and Color on the This Is Spotify Meme. Please see https://weebyapi.xyz/api/docs#generators for the available generators.
      * @param {ThisIsSpotifyOptions} options - The options that contain the required parameters.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    thisIsSpotify({ image, text, color }?: ThisIsSpotifyOptions): Promise<any>;
    /**
      * Draws one image on an animated triggered GIF.
      * @param {TriggeredOptions} options - The options that contain the required parameters.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    triggered({ image, tint }: TriggeredOptions): Promise<any>;
    /**
      * Generates a image with the specified currency and its amount.
      * @param {CurrencyOptions} options - The options that contain the required parameters.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    currency({ type, amount }: CurrencyOptions): Promise<any>;
    /**
      * Returns the colour in a Image (Buffer) format. Please see https://weebyapi.xyz/api/docs#generators for the available generators.
      * @param {string} hex - The hex color (Do not include the hashtag).
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    color(hex: string): Promise<any>;
}
declare namespace Generators {
    export { EjectOutcomes, CurrencyType, OneImageOptions, TwoImagesOptions, TextOptions, TwoTextsOptions, TextImageOptions, EjectOptions, FriendshipOptions, DemotivationalOptions, RIPOptions, TweetOptions, TweetFetchOptions, SpotifyOptions, TriggeredOptions, ThisIsSpotifyOptions, CurrencyOptions };
}
/**
 * The options for one image generators.
 */
type OneImageOptions = {
    /**
     * - The type of generator.
     */
    type: string;
    /**
     * - The link to an image (.png, .jpg, .gif)
     */
    image: string;
};
/**
 * The options for two images generators.
 */
type TwoImagesOptions = {
    /**
     * - The type of generator.
     */
    type: string;
    /**
     * - The link to the first image (.png, .jpg, .gif)
     */
    firstImage: string;
    /**
     * - The link to the second image (.png, .jpg, .gif)
     */
    secondImage: string;
};
/**
 * The options for text generators.
 */
type TextOptions = {
    /**
     * - The type of generator.
     */
    type: string;
    /**
     * - The text to be displayed.
     */
    text: string;
};
/**
 * The options for two texts generators.
 */
type TwoTextsOptions = {
    /**
     * - The type of generator.
     */
    type: string;
    /**
     * - The first text to be displayed.
     */
    textOne: string;
    /**
     * - The second text to be displayed.
     */
    textTwo: string;
};
/**
 * The options for text image generators.
 */
type TextImageOptions = {
    /**
     * - The type of generator.
     */
    type: string;
    /**
     * - The text to be displayed.
     */
    text: string;
    /**
     * - The link to an image (.png, .jpg, .gif)
     */
    image: string;
};
/**
 * The options for the eject generator.
 */
type EjectOptions = {
    /**
     * - The text to be displayed.
     */
    text: string;
    /**
     * - The link to an image (.png, .jpg, .gif)
     */
    image: string;
    /**
     * - The outcome of the generator.
     */
    outcome: EjectOutcomes;
};
/**
 * The options for the friendship generator.
 */
type FriendshipOptions = {
    /**
     * - The link to the first image (.png, .jpg, .gif)
     */
    firstImage: string;
    /**
     * - The link to the second image (.png, .jpg, .gif)
     */
    secondImage: string;
    /**
     * - The first text to be displayed.
     */
    firstText: string;
    /**
     * - The second text to be displayed.
     */
    secondText: string;
};
/**
 * The options for the demotivational generator.
 */
type DemotivationalOptions = {
    /**
     * - The text to be displayed.
     */
    text: string;
    /**
     * - The title to be displayed.
     */
    title: string;
    /**
     * - The link to an image (.png, .jpg, .gif)
     */
    image: string;
};
/**
 * The options for the RIP generator.
 */
type RIPOptions = {
    /**
     * - The text to be displayed.
     */
    message: string;
    /**
     * - The username to be displayed.
     */
    username: string;
    /**
     * - The link to an image (.png, .jpg, .gif)
     */
    avatar: string;
};
/**
 * The options for the tweet generator.
 */
type TweetOptions = {
    /**
     * - The username to be displayed.
     */
    username: string;
    /**
     * - The tweet to be displayed.
     */
    tweet: string;
    /**
     * - The link to an image (.png, .jpg, .gif)
     */
    avatar: string;
};
/**
 * The options for the tweetfetch generator.
 */
type TweetFetchOptions = {
    /**
     * - The username to be displayed.
     */
    username: string;
    /**
     * - The tweet to be displayed.
     */
    tweet: string;
};
/**
 * The options for the spotify generator.
 */
type SpotifyOptions = {
    /**
     * - The link to an image (.png, .jpg, .gif)
     */
    image: string;
    /**
     * - The name of the song to be displayed.
     */
    title: string;
    /**
     * - The artist name to be displayed.
     */
    artist: string;
    /**
     * - The album name to be displayed.
     */
    album: string;
};
/**
 * The options for the this is spotify generator.
 */
type ThisIsSpotifyOptions = {
    /**
     * - The link to an image (.png, .jpg, .gif)
     */
    image: string;
    /**
     * - The text to print.
     */
    text: string;
    /**
     * - The hex color of the background.
     */
    color: string;
};
/**
 * The options for the triggered generator.
 */
type TriggeredOptions = {
    /**
     * - The link to an image (.png, .jpg, .gif)
     */
    image: string;
    /**
     * - Whether the generated GIF should have a orange tint. Defaults to true.
     */
    tint?: boolean;
};
/**
 * The options for the currency generator.
 */
type CurrencyOptions = {
    /**
     * - The type of currency.
     */
    type: CurrencyType;
    /**
     * - The amount of money to display.
     */
    amount: number;
};
/**
 * All available eject Outcomes:
 */
type EjectOutcomes = ('ejected' | 'imposter' | 'notimposter');
/**
 * All available currency types:
 */
type CurrencyType = ('dollar' | 'euro' | 'pound' | 'yen');
