export = Overlays;
/**
* @class Overlays
*/
declare class Overlays {
    constructor(token: any, baseURL: any);
    /** @access private */
    token: any;
    /** @access private */
    baseURL: any;
    /**
      * Draws one image on a requested image overlay. Please see https://weebyapi.xyz/api/docs#overlays for the available overlays.
      * @param {Object} options - The options that contain the required parameters.
      * @param {string} options.type - The Type of Overlay.
      * @param {string} options.image - The link to an image (.png, .jpg, .gif)
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    fetch(options?: {
        type: string;
        image: string;
    }): Promise<any>;
}