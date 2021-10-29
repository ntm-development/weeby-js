/** 
 * Weeby API Definitions
 * Written by WiseDevHelper (Wise)
*/

export = WeebyAPI;
/**
* Weeby-JS - The official JavaScript wrapper for Weeby API, developed by NTM Development. Click [here](https://weebyapi.xyz/) for the website.
* @class Client
*/
declare class WeebyAPI {
    /**
     * @constructor
     * @param {string} token - Your Weeby API Token.
     */
    constructor(token: string);
    /**
     * The base URL.
     * @type {string}
     */
    baseURL: string;
    /**
     * The wrapper version.
     * @type {string}
     */
    version: string;
    /**
     * The generators module.
     * @type {Generators}
     */
    generators: Generators;
    /**
     * The GIF module.
     * @type {GIF}
     */
    gif: GIF;
    /**
     * The overlays module.
     * @type {Overlays}
     */
    overlays: Overlays;
    /**
     * The effects module.
     * @type {Effects}
     */
    effects: Effects;
    /**
     * The JSON module.
     * @type {JSON}
     */
    json: JSON;
    /**
     * The custom module.
     * @type {Custom}
     */
    custom: Custom;
    /**
     * The utility module.
     * @type {Utility}
     */
    utility: Utility;
}
import Generators = require("./lib/generators");
import GIF = require("./lib/gif");
import Overlays = require("./lib/overlays");
import Effects = require("./lib/effects");
import JSON = require("./lib/json");
import Custom = require("./lib/custom");
import Utility = require("./lib/utility");
