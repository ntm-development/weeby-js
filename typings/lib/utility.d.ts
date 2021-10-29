export = Utility;
/**
* @class Utility
*/
declare class Utility {
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
     * Checks if a user has voted for a bot on Top.gg
     * @param {TopGGVoteCheckerOptions} options - The options you want to use.
     * @returns {Promise<TopGGVoteCheckerResponse>}
     */
    topGGVoteChecker({ botID, userID }: TopGGVoteCheckerOptions): Promise<TopGGVoteCheckerResponse>;
    /**
     * Converts the provided currency to a different currency.
     * @param {CurrencyConverterOptions} options - The options you want to use.
     * @returns {Promise<CurrencyConverterResponse>}
     */
    currencyConverter({ from, to, amount }?: CurrencyConverterOptions): Promise<CurrencyConverterResponse>;
    /**
     * Translate the provided text to another language.
     * @param {TranslatorOptions} options - The options you want to use.
     * @returns {Promise<TranslateResponse>}
     */
    translate({ from, to, text }?: any): Promise<TranslateResponse>;
    /**
     * Returns the weather for the provided location.
     * @param {WeatherOptions} options - The options you want to use.
     * @returns {Promise<WeatherResponse>}
     */
    weather({ location, degreeType }?: WeatherOptions): Promise<WeatherResponse>;
}
declare namespace Utility {
    export { TopGGVoteCheckerOptions, TopGGVoteCheckerResponse, TranslateOptions, TranslateResponse, CurrencyConverterOptions, CurrencyConverterResponse, WeatherOptions, WeatherResponse };
}
/**
 * - The options for the TopGGVoteChecker.
 */
type TopGGVoteCheckerOptions = {
    /**
     * - The ID of the bot you want to check.
     */
    botID: string;
    /**
     * - The ID of the user you want to check.
     */
    userID: string;
};
/**
 * - The response from the Top.gg Vote Checker method.
 */
type TopGGVoteCheckerResponse = {
    /**
     * - The ID of the user.
     */
    userID: string;
    /**
     * - The ID of the bot.
     */
    botID: string;
    /**
     * - The date the user voted (Unix Timestamp)
     */
    dateVoted: number;
    /**
     * - The current expiry of the vote (12 Hours - Unix Timestamp)
     */
    currentVoteExpiry: number;
    /**
     * - The amount of times the user has voted lifetime for the bot.
     */
    timesVoted: number;
    /**
     * - Whether the user has voted or not.
     */
    hasVoted: boolean;
    /**
     * - Whether the user voted on a weekend or not.
     */
    isWeekend: boolean;
};
/**
 * - The options for the Currency Converter.
 */
type CurrencyConverterOptions = {
    /**
     * - A valid ISO 4217 code of the currency (i.e. USD). Refer to this: https://www.xe.com/iso4217.php
     */
    from: string;
    /**
     * - A valid ISO 4217 code of the currency (i.e. USD). Refer to this: https://www.xe.com/iso4217.php
     */
    to: string;
    /**
     * - The amount you want to have converted.
     */
    amount: number;
};
/**
 * - The response of the currency converter method.
 */
type CurrencyConverterResponse = {
    /**
     * - The language the text was translated from.
     */
    from: {
        type: string;
        amount: string;
    };
    /**
     * - The language the text was translated to.
     */
    to: {
        type: string;
        amount: string;
    };
};
/**
 * - The response of the translate method.
 */
type TranslateResponse = {
    /**
     * - The language the text was translated from.
     */
    from: {
        language: string;
        text: string;
    };
    /**
     * - The language the text was translated to.
     */
    to: {
        language: string;
        text: string;
    };
};
/**
 * - The options for the Weather method.
 */
type WeatherOptions = any;
/**
 * - The response for the Weather method.
 */
type WeatherResponse = {
    /**
     * - The location being observed.
     */
    observationPoint: string;
    /**
     * - The current conditions.
     */
    conditions: string;
    /**
     * - The URL for the current conditions image.
     */
    conditionsImageURL: string;
    /**
     * - The degree type being used.
     */
    degreeType: string;
    /**
     * - The current temperature.
     */
    temperature: string;
    /**
     * - The current feels like temperature.
     */
    feelsLike: string;
    /**
     * - The current wind speed, in km/h.
     */
    windSpeed: string;
    /**
     * - The current wind display, in km/h.
     */
    windDisplay: string;
    /**
     * - The current humidity.
     */
    humidity: string;
    /**
     * - Today's day.
     */
    day: string;
    /**
     * - Today's date.
     */
    date: string;
    /**
     * - The latitude of the location.
     */
    latitude: string;
    /**
     * - The longitude of the location.
     */
    longitude: string;
};
/**
 * - The options for the Translate method.
 */
type TranslateOptions = {
    /**
     * - A valid ISO language code. Refer to this: http://www.lingoes.net/en/translator/langcode.htm
     */
    from: string;
    /**
     * - A valid ISO language code. Refer to this: http://www.lingoes.net/en/translator/langcode.htm
     */
    to: string;
    /**
     * - The text to translate.
     */
    text: number;
};
