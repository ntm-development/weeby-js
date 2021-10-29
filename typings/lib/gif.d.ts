export = GIF;
/**
* @class GIF
*/
declare class GIF {
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
      * Returns a random GIF image of the type provided.
      * @param {string} type - The Type of GIF. See https://weebyapi.xyz/api/docs#gif for all the GIFs.
      * @returns {Promise<string>} The Formatted GIF URL.
      */
    fetch(type: string): Promise<string>;
}
