export = Overlays;
/**
* @class Overlays
*/
declare class Overlays {
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
      * Draws one image on a requested image overlay. Please see https://weebyapi.xyz/api/docs#overlays for the available overlays.
      * @param {OverlaysOptions} options The options for the request
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    fetch({ type, image }: OverlaysOptions): Promise<any>;
}
declare namespace Overlays {
    export { OverlaysOptions };
}
type OverlaysOptions = {
    /**
     * - The type of overlay.
     */
    type: string;
    /**
     * - The link to an image (.png, .jpg, .gif)
     */
    image: string;
};
