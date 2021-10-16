export = Custom;
/**
* @class Custom
*/
declare class Custom {
    constructor(token: any, baseURL: any);
    /** @access private */
    token: any;
    /** @access private */
    baseURL: any;
    /**
      * Creates a customisable greeting image with Icon, Name, Greet and Background. Optional parameters can let you customise the color of each element, or let you add a message.
      * @param {object} options - The options that contain the required parameters.
      * @param {string} options.icon - The link to an image (.png, .jpg, .gif)
      * @param {string} options.background - The link to an image (.png, .jpg, .gif) (1024x470 recommended)
      * @param {string} options.name - The name of the greeted user.
      * @param {string} options.greet - What should the user be greeted with?
      * @param {string} [options.message] - Provide a message on the bottom of the user's name.
      * @param {string} [options.greetHex=000000] - The color of the greet text. (Do not include the hashtag).
      * @param {string} [options.nameHex=000000] - The color of the name text. (Do not include the hashtag).
      * @param {string} [options.circleHex=000000] - The color of the avatar border. (Do not include the hashtag).
      * @param {string} [options.messageHex=000000] - The color of the message text. (Do not include the hashtag).
      * @param {('gotham'|'stoneserif'|'roboto'|'arial'|'impact'|'riffic'|'minecraft'|'pinkycupid'|'paladins'|'pokemon'|'oldenglish'|'chalkduster'|'akbar'|'nexa'|'verdana'|'typewriter'|'spongebob'|'cornerofthesky')} [options.font=gotham] - The font to use, 'gotham' by default.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    greeting(options?: {
        icon: string;
        background: string;
        name: string;
        greet: string;
        message?: string;
        greetHex?: string;
        nameHex?: string;
        circleHex?: string;
        messageHex?: string;
        font?: string;
    }): Promise<any>;
    /**
      * Creates a customisable booster add/remove image with Icon, Name and Background. Optional queries can let you customise the color of each element.
      * @param {object} options - The options that contain the required parameters.
      * @param {string} options.icon - The link to an image (.png, .jpg, .gif)
      * @param {string} options.background - The link to an image (.png, .jpg, .gif) (1024x470 recommended)
      * @param {string} options.name - The name of the user who boosted the server.
      * @param {string} options.title - The title of the booster card.
      * @param {string} [options.message] - Provide a message on the bottom of title.
      * @param {string} [options.titleHex =f47fff] - The color of the title text. (Do not include the hashtag).
      * @param {string} [options.nameHex=FFFFFF] - The color of the name text. (Do not include the hashtag).
      * @param {string} [options.circleHex=9f50a7] - The color of the avatar border. (Do not include the hashtag).
      * @param {string} [options.messageHex=9f50a7] - The color of the message text. (Do not include the hashtag).
      * @param {('gotham'|'stoneserif'|'roboto'|'arial'|'impact'|'riffic'|'minecraft'|'pinkycupid'|'paladins'|'pokemon'|'oldenglish'|'chalkduster'|'akbar'|'nexa'|'verdana'|'typewriter'|'spongebob'|'cornerofthesky')} [options.font=nexa] - The font to use, 'nexa' by default.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    booster(options?: {
        icon: string;
        background: string;
        name: string;
        title: string;
        message?: string;
        titleHex?: string;
        nameHex?: string;
        circleHex?: string;
        messageHex?: string;
        font?: string;
    }): Promise<any>;
    /**
      * Creates a customisable rank card with Icon, Name, and leveling stats.
      * @param {object} options - The options that contain the required parameters.
      * @param {string} options.avatar - The link to an image (.png, .jpg, .gif)
      * @param {string} options.username - The username to print.
      * @param {string} options.bgColor - The color of the background.
      * @param {number} options.level - The Level the user is currently on.
      * @param {number} options.xp - How much XP the user has.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    rank(options?: {
        avatar: string;
        username: string;
        bgColor: string;
        level: number;
        xp: number;
    }): Promise<any>;
    /**
      * Creates a customisable level up card.
      * @param {object} options - The options that contain the required parameters.
      * @param {string} options.avatar - The link to an image (.png, .jpg, .gif)
      * @param {string} options.bgColor - The color of the background. (Do not include the hashtag).
      * @param {string} options.borderColor - The color of the avatar border. (Do not include the hashtag).
      * @param {number} options.oldlevel - The old level of the user.
      * @param {number} options.newlevel - The new level of the user.
      * @param {('gotham'|'stoneserif'|'roboto'|'arial'|'impact'|'riffic'|'minecraft'|'pinkycupid'|'paladins'|'pokemon'|'oldenglish'|'chalkduster'|'akbar'|'nexa'|'verdana'|'typewriter'|'spongebob'|'cornerofthesky')} [options.font=nexa] - The font to use, 'nexa' by default.
      * @returns {Promise<buffer>} The generated image in a buffer.
      */
    levelUp(options?: {
        avatar: string;
        bgColor: string;
        borderColor: string;
        oldlevel: number;
        newlevel: number;
        font?: string;
    }): Promise<any>;
}