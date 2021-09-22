export = JSON;
/**
* @class JSON
*/
declare class JSON {
    constructor(token: any, baseURL: any);
    /** @access private */
    token: any;
    /** @access private */
    baseURL: any;
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
      * Returns a random response.
      * @param {Object} options - The options that contain the required parameters.
      * @param {string} options.type - The type of text formatter.
      * @param {string} options.text - The text to format.
      * @returns {Promise<string>} The response in a string.
      */
    textFormat(options?: {
        type: string;
        text: string;
    }): Promise<string>;
    /**
      * Fetches lyrics from the Genius API.
      * @param {string} query - The lyrics to search. See https://weebyapi.xyz/api/docs#json for all the JSON endpoints.
      * @returns {Promise<lyricsResponse>} The lyrics and its informtation.
      */
    lyrics(query: string): Promise<lyricsResponse>;
    /**
      * Fetches Weeby API's current statistics.
      * @returns {Promise<Object>} The statistics returned in a object.
      */
    stats(): Promise<any>;
}
declare namespace JSON {
    export { lyricsResponse };
}
/**
 * - The response for json.lyrics
 */
type lyricsResponse = {
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
