export = Effects;
/**
 * @class Effects
*/
declare class Effects {
    /**
     * The options for general effects.
     * @typedef {Object} GeneralOptions
     * @property {string} type - The type of effect to apply.
     * @property {string} image - The link to an image (.png, .jpg, .gif)
     */
    /**
     * The options for intensity effects.
     * @typedef {Object} IntensityOptions
     * @property {string} type - The type of effect to apply.
     * @property {string} image - The link to an image (.png, .jpg, .gif)
     * @property {number} intensity - The intensity of the effect.
     */
    /**
     * The options for level effects.
     * @typedef {Object} LevelOptions
     * @property {string} type - The type of effect to apply.
     * @property {string} image - The link to an image (.png, .jpg, .gif)
     * @property {number} level - The level of the effect.
     */
    /**
     * The options for resizing an image.
     * @typedef {Object} ResizeOptions
     * @property {number} width - The width of the image. (1-2000px)
     * @property {number} height - The height of the image. (1-2000px)
     * @property {string} image - The link to an image (.png, .jpg, .gif)
     */
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
      * Applies an effect to the provided image. Please see https://weebyapi.xyz/api/docs#effects for the available effects.
      * @param {GeneralOptions} options - The options that contain the required parameters.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    general(options?: {
        /**
         * - The type of effect to apply.
         */
        type: string;
        /**
         * - The link to an image (.png, .jpg, .gif)
         */
        image: string;
    }): Promise<any>;
    /**
      * Applies an effect to the provided image that can change the level. Please see https://weebyapi.xyz/api/docs#effects for the available effects.
      * @param {IntensityOptions} options - The options that contain the required parameters.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    intensity(options?: {
        /**
         * - The type of effect to apply.
         */
        type: string;
        /**
         * - The link to an image (.png, .jpg, .gif)
         */
        image: string;
        /**
         * - The intensity of the effect.
         */
        intensity: number;
    }): Promise<any>;
    /**
      * Applies an effect to the provided image that can change the level. Please see https://weebyapi.xyz/api/docs#effects for the available effects.
      * @param {LevelOptions} options - The options that contain the required parameters.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    level(options?: {
        /**
         * - The type of effect to apply.
         */
        type: string;
        /**
         * - The link to an image (.png, .jpg, .gif)
         */
        image: string;
        /**
         * - The level of the effect.
         */
        level: number;
    }): Promise<any>;
    /**
      * Resizes a provided image.
      * @param {ResizeOptions} options - The options that contain the required parameters.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    resize(options?: {
        /**
         * - The width of the image. (1-2000px)
         */
        width: number;
        /**
         * - The height of the image. (1-2000px)
         */
        height: number;
        /**
         * - The link to an image (.png, .jpg, .gif)
         */
        image: string;
    }): Promise<any>;
}