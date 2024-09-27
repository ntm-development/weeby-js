export = JSON;
/**
* @class JSON
*/
declare class JSON {
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
      * Returns a random word. (list endpoint not supported)
      * @param {string} type - The Type of JSON response to request. See https://weebyapi.xyz/api/docs#json for all the JSON endpoints.
      * @returns {Promise<string>} The response in a string.
      */
    word(type: string): Promise<string>;
    /**
      * Returns a random response.
      * @param {string} type - The Type of JSON response to request. See https://weebyapi.xyz/api/docs#json for all the JSON endpoints.
      * @returns {Promise<string>} The response in a string.
      */
    response(type: string): Promise<string>;
    /**
      * Returns a random Animal image of the type provided.
      * @param {string} type - The Type of Animal. See https://weebyapi.xyz/api/docs#json for all the JSON endpoints.
      * @returns {Promise<string>} The Formatted Animal Image URL.
      */
    animalImage(type: string): Promise<string>;
    /**
      * Returns a random SFW Meme from a Subreddit.
      * @param {MemeCategory} category - The name of the category.
      * @returns {Promise<MemeResponse>} The returned JSON object.
      */
    meme(category: MemeCategory): Promise<MemeResponse>;
    /**
      * Formats the provided text into a different style.
      * @param {TextFormatterOptions} options - The options to use.
      * @returns {Promise<string>} The response in a string.
      */
    textFormat({ type, text }?: TextFormatterOptions): Promise<string>;
    /**
      * Fetches Weeby API's current statistics.
      * @returns {Promise<object>} The statistics returned in a object.
      */
    stats(): Promise<object>;
}
declare namespace JSON {
    export { MemeResponse, TextFormatterOptions, MemeCategory };
}
/**
 * All available Meme Categories:
 */
type MemeCategory = ('meme' | 'memes' | 'wholesomememes' | 'dankmemes');
/**
 * - The Meme Response object.
 */
type MemeResponse = {
    /**
     * - The name of the Subreddit.
     */
    subreddit: string;
    /**
     * - The URL of the Subreddit.
     */
    subredditURL: string;
    /**
     * - The image URL of the post.
     */
    url: string;
    /**
     * - The URL of of the post.
     */
    permaURL: string;
    /**
     * - The title of the post.
     */
    title: string;
    /**
     * - The author of the post.
     */
    author: string;
    /**
     * - The date the post was created.
     */
    date: string;
    /**
     * - The number of scores the post earned.
     */
    score: number;
    /**
     * - The number of comments on the post.
     */
    comments: number;
    /**
     * - The number of awards given on the post.
     */
    awards: number;
};
/**
 * - The options object for the text formatter.
 */
type TextFormatterOptions = {
    /**
     * - The type of text formatter.
     */
    type: string;
    /**
     * - The text to format.
     */
    text: string;
};