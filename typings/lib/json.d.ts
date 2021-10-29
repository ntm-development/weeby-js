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
      * Fetches lyrics from the Genius API.
      * @param {string} query - The lyrics to search. See https://weebyapi.xyz/api/docs#json for all the JSON endpoints.
      * @returns {Promise<LyricsResponse>} The lyrics and its information.
      */
    lyrics(query: string): Promise<LyricsResponse>;
    /**
      * Fetches Weeby API's current statistics.
      * @returns {Promise<object>} The statistics returned in a object.
      */
    stats(): Promise<object>;
}
declare namespace JSON {
    export { LyricsResponse, MemeResponse, TextFormatterOptions, MemeCategory };
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
/**
 * - The response object for lyrics.
 */
type LyricsResponse = {
    /**
     * - The ID of the song.
     */
    id: number;
    /**
     * - The Genius Lyrics URL.
     */
    url: string;
    /**
     * - The track object.
     */
    track: {
        name: string;
        thumbnail: string;
        media: string;
    };
    /**
     * - The artist object.
     */
    artist: {
        name: string;
        thumbnail: string;
        id: number;
    };
    /**
     * - The album object.
     */
    album: {
        name: string;
        thumbnail: string;
        id: number;
    };
    /**
     * - The colors object.
     */
    colors: {
        songArtPrimary: string;
        songArtSecondary: string;
        songArtText: string;
    };
    /**
     * - The stats object.
     */
    stats: {
        hot: boolean;
        pageViews: number;
        contributors: number;
        transcribers: number;
        accepted_annotations: number;
    };
    /**
     * - The recording location of the song/album.
     */
    recordingLocation: any;
    /**
     * - The release date of the song.
     */
    releaseDate: string;
    /**
     * - The formatted version of the release date.
     */
    formattedReleaseDate: string;
    /**
     * - The lyrics of the song.
     */
    lyrics: string;
};
