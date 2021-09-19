export = WeebyAPI;
/**
* @class Client
* @classdesc weeby-js - The official JavaScript wrapper for Weeby API, developed by NTM Development. Website: https://weebyapi.xyz/
*/
declare class WeebyAPI {
    /**
       * @constructor
       * @param {string} token - Your Weeby API Token. Get this by applying through the Weeby API bot on the Discord Server. https://discord.com/invite/G2rb53z
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
}
import Generators = require("./src/lib/generators");
import GIF = require("./src/lib/gif");
import Overlays = require("./src/lib/overlays");
import Effects = require("./src/lib/effects");
import JSON = require("./src/lib/json");
import Custom = require("./src/lib/custom");
