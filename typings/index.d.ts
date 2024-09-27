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
import Generators = require("./lib/generators");
import GIF = require("./lib/gif");
import Overlays = require("./lib/overlays");
import Effects = require("./lib/effects");
import JSON = require("./lib/json");
import Custom = require("./lib/custom");
import Utility = require("./lib/utility");