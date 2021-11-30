/** 
 * Weeby API Definitions
 * Written by WiseDevHelper (Wise)
*/

export = WeebyAPI;
/**
* @class Client
* @classdesc weeby-js - The official JavaScript wrapper for Weeby API, developed by NTM Development. Click [here](https://weebyapi.xyz/) for the website.
*/
declare class WeebyAPI {
    /**
       * @constructor
       * @param {string} token - Your Weeby API Token.
       */
    constructor(token: string);
    baseURL: string;
    version: any;
    generators: Generators;
    gif: GIF;
    overlays: Overlays;
    effects: Effects;
    json: JSON;
    custom: Custom;
    utility: Utility;
}
import Generators = require("./src/lib/generators");
import GIF = require("./src/lib/gif");
import Overlays = require("./src/lib/overlays");
import Effects = require("./src/lib/effects");
import JSON = require("./src/lib/json");
import Custom = require("./src/lib/custom");
import Utility = require("./src/lib/utility");