export = GIF;
/**
* @class GIF
*/
declare class GIF {
    constructor(token: any, baseURL: any);
    /** @access private */
    token: any;
    /** @access private */
    baseURL: any;
    /**
      * Returns a random GIF image of the type provided.
      * @param {string} type - The Type of GIF. See https://weebyapi.xyz/api/docs#gif for all the GIFs.
      * @returns {Promise<string>} The Formatted GIF URL.
      */
    fetch(type: string): Promise<string>;
}