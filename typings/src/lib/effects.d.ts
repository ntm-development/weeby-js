export = Effects;
/**
 * @class Effects
*/
declare class Effects {
    constructor(token: any, baseURL: any);
    /** @access private */
    token: any;
    /** @access private */
    baseURL: any;
    /**
      * Applies an effect to the provided image. Please see https://weebyapi.xyz/api/docs#effects for the available effects.
      * @param {Object} options - The options that contain the required parameters.
      * @param {string} options.type - The Type of Effect to use.
      * @param {string} options.image - The link to an image (.png, .jpg, .gif)
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    general(options?: {
        type: string;
        image: string;
    }): Promise<any>;
    /**
      * Applies an effect to the provided image that can change the level. Please see https://weebyapi.xyz/api/docs#effects for the available effects.
      * @param {Object} options - The options that contain the required parameters.
      * @param {string} options.type - The Type of Effect to use.
      * @param {number} options.intensity - The intensity of the effect.
      * @param {string} options.image - The link to an image (.png, .jpg, .gif)
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    intensity(options?: {
        type: string;
        intensity: number;
        image: string;
    }): Promise<any>;
    /**
      * Applies an effect to the provided image that can change the level. Please see https://weebyapi.xyz/api/docs#effects for the available effects.
      * @param {Object} options - The options that contain the required parameters.
      * @param {string} options.type - The Type of Effect to use.
      * @param {number} options.level - The level of the effect.
      * @param {string} options.image - The link to an image (.png, .jpg, .gif)
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    level(options?: {
        type: string;
        level: number;
        image: string;
    }): Promise<any>;
    /**
      * Resizes a provided image.
      * @param {Object} options - The options that contain the required parameters.
      * @param {string} options.width - The width of the resized image. (1-2000)
      * @param {number} options.height - The height of the resized image. (1-2000)
      * @param {string} options.image - The link to an image (.png, .jpg, .gif)
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    resize(options?: {
        width: string;
        height: number;
        image: string;
    }): Promise<any>;
}
