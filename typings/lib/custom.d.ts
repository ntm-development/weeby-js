import './typedefs';
export = Custom;
/**
* @class Custom
*/
declare class Custom {
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
      * Creates a customisable greeting image. Optional parameters can let you customise the color of each element, or let you add a message.
      * @param {GreetingOptions} options - The options that contain the required parameters.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    greeting({ icon, background, name, greet, message, greetHex, nameHex, circleHex, messageHex, font }?: GreetingOptions): Promise<any>;
    /**
      * Creates a customisable booster add/remove image. Optional queries can let you customise the color of each element.
      * @param {BoosterOptions} options - The options that contain the required parameters.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    booster({ icon, background, name, title, message, titleHex, nameHex, circleHex, messageHex, font }?: BoosterOptions): Promise<any>;
    /**
      * Creates a customisable rank card with icon, name, and leveling stats.
      * @param {RankOptions} options - The options that contain the required parameters.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    rank({ avatar, username, bgColor, level, xp }?: RankOptions): Promise<any>;
    /**
      * Creates a customisable level up card.
      * @param {LevelUpOptions} options - The options that contain the required parameters.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    levelUp({ avatar, bgColor, borderColor, oldlevel, newlevel, font }?: LevelUpOptions): Promise<any>;
}
declare namespace Custom {
    export { GreetingOptions, BoosterOptions, RankOptions, LevelUpOptions };
}
/**
 * Options for creating a customisable greeting image.
 */
type GreetingOptions = any;
/**
 * Options for creating a booster image.
 */
type BoosterOptions = {
    /**
     * - The link to an image (.png, .jpg, .gif)
     */
    icon: string;
    /**
     * - The link to an image (.png, .jpg, .gif) (1024x470 recommended)
     */
    background: string;
    /**
     * - The name of the user who boosted the server.
     */
    name: string;
    /**
     * - The title of the booster card.
     */
    title: string;
    /**
     * - Provide a message on the bottom of title.
     */
    message?: string;
    /**
     * - The color of the title text. (Do not include the hashtag).
     */
    titleHex?: string;
    /**
     * - The color of the name text. (Do not include the hashtag).
     */
    nameHex?: string;
    /**
     * - The color of the avatar border. (Do not include the hashtag).
     */
    circleHex?: string;
    /**
     * - The color of the message text. (Do not include the hashtag).
     */
    messageHex?: string;
    /**
     * - The font to use, 'nexa' by default.
     */
    font?: FontType;
};
/**
 * Options for creating a rank card.
 */
type RankOptions = {
    /**
     * - The link to an image (.png, .jpg, .gif)
     */
    avatar: string;
    /**
     * - The username to print.
     */
    username: string;
    /**
     * - The color of the background.
     */
    bgColor: string;
    /**
     * - The level the user is currently on.
     */
    level: number;
    /**
     * - How much XP the user has.
     */
    xp: number;
};
/**
 * Options for creating a level up card.
 */
type LevelUpOptions = {
    /**
     * - The link to an image (.png, .jpg, .gif)
     */
    avatar: string;
    /**
     * - The color of the background. (Do not include the hashtag).
     */
    bgColor: string;
    /**
     * - The color of the avatar border. (Do not include the hashtag).
     */
    borderColor: string;
    /**
     * - The old level of the user.
     */
    oldlevel: number;
    /**
     * - The new level of the user.
     */
    newlevel: number;
    /**
     * - The font to use, 'nexa' by default.
     */
    font?: FontType;
};