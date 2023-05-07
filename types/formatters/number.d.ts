/**
 * Format number according to the locale
 *
 * @exampleContext {"lang":"en-us"}
 * @example ["10"          ]
 * @example ["1000.456"    ]
 *
 * @param  {Number} d          Number to format
 * @param  {Number} precision  [optional] Number of decimal
 * @return {String} return     converted values
 */
export function formatN(d: number, precision: number): string;
/**
 * Format currency numbers
 *
 * Currencies are defined by the locale (`options.lang`). It can be overwritten by
 * `options.currencySource` and `options.currencyTarget` for one report  in `Carbone.render`
 * or globally with `Carbone.set`
 *
 * When `options.lang === 'fr-FR'` the `currencySource` and `currencyTarget` equals by default `EUR`.
 *
 * If the formatter `convCurr()` is used before, formatC prints the corresponding target currency used in `convCurr()`.
 *
 * By default, it prints with the currency symbol only, but you can use other output formats:
 *
 * @exampleContext {"lang":"en-us", "currency": { "source":"EUR", "target":"USD", "rates": { "EUR":1, "USD":2 }} }
 * @example ["1000.456"        ]
 * @example ["1000.456", "M"   ]
 * @example ["1"       , "M"   ]
 * @example ["1000"    , "L"   ]
 * @example ["1000"    , "LL"  ]
 *
 * @exampleContext {"lang":"fr-fr", "currency": { "source":"EUR", "target":"USD", "rates": { "EUR":1, "USD":2 }} }
 * @example ["1000.456"    ]
 *
 * @exampleContext {"lang":"fr-fr", "currency": { "source":"EUR", "target":"EUR", "rates": { "EUR":1, "USD":2 }} }
 * @example ["1000.456"    ]
 *
 * @param  {Number} d                 Number to format
 * @param  {Number} precisionOrFormat [optional] Number of decimal, or specific format <br>
 *                                      - Integer : change default precision of the currency
 *                                      - M  : print Major currency name without the number
 *                                      - L  : prints number with currency symbol (by default)
 *                                      - LL : prints number with Major currency name
 * @return {String}                   return converted values
 *
 */
export function formatC(d: number, precisionOrFormat: number): string;
export class formatC {
    /**
     * Format currency numbers
     *
     * Currencies are defined by the locale (`options.lang`). It can be overwritten by
     * `options.currencySource` and `options.currencyTarget` for one report  in `Carbone.render`
     * or globally with `Carbone.set`
     *
     * When `options.lang === 'fr-FR'` the `currencySource` and `currencyTarget` equals by default `EUR`.
     *
     * If the formatter `convCurr()` is used before, formatC prints the corresponding target currency used in `convCurr()`.
     *
     * By default, it prints with the currency symbol only, but you can use other output formats:
     *
     * @exampleContext {"lang":"en-us", "currency": { "source":"EUR", "target":"USD", "rates": { "EUR":1, "USD":2 }} }
     * @example ["1000.456"        ]
     * @example ["1000.456", "M"   ]
     * @example ["1"       , "M"   ]
     * @example ["1000"    , "L"   ]
     * @example ["1000"    , "LL"  ]
     *
     * @exampleContext {"lang":"fr-fr", "currency": { "source":"EUR", "target":"USD", "rates": { "EUR":1, "USD":2 }} }
     * @example ["1000.456"    ]
     *
     * @exampleContext {"lang":"fr-fr", "currency": { "source":"EUR", "target":"EUR", "rates": { "EUR":1, "USD":2 }} }
     * @example ["1000.456"    ]
     *
     * @param  {Number} d                 Number to format
     * @param  {Number} precisionOrFormat [optional] Number of decimal, or specific format <br>
     *                                      - Integer : change default precision of the currency
     *                                      - M  : print Major currency name without the number
     *                                      - L  : prints number with currency symbol (by default)
     *                                      - LL : prints number with Major currency name
     * @return {String}                   return converted values
     *
     */
    constructor(d: number, precisionOrFormat: number);
    modifiedCurrencyTarget: any;
}
/**
 * Convert from one currency to another
 *
 * Exchange rates are included by default in Carbone but you can provide a new echange rate
 * for one report in `options.currencyRates` of `Carbone.render` or globally with `Carbone.set`
 *
 * `convCurr()`  without parameters converts automatically from `options.currencySource` to `options.currencyTarget`.
 *
 * @exampleContext {"currency": { "source":"EUR", "target":"USD", "rates": { "EUR":1, "USD":2 }} }
 * @example [10                  ]
 * @example [1000                ]
 * @example [1000, "EUR"         ]
 * @example [1000, "USD"         ]
 * @example [1000, "USD",  "USD" ]
 *
 * @param  {Number} d        Number to convert
 * @param  {String} target   [optional] convert to this currency ('EUR'). By default it equals `options.currencyTarget`
 * @param  {String} source   [optional] currency of source data ('USD'). By default it equals `options.currencySource`
 * @return {String}          return converted values
 */
export function convCurr(d: number, target: string, source: string): string;
export class convCurr {
    /**
     * Convert from one currency to another
     *
     * Exchange rates are included by default in Carbone but you can provide a new echange rate
     * for one report in `options.currencyRates` of `Carbone.render` or globally with `Carbone.set`
     *
     * `convCurr()`  without parameters converts automatically from `options.currencySource` to `options.currencyTarget`.
     *
     * @exampleContext {"currency": { "source":"EUR", "target":"USD", "rates": { "EUR":1, "USD":2 }} }
     * @example [10                  ]
     * @example [1000                ]
     * @example [1000, "EUR"         ]
     * @example [1000, "USD"         ]
     * @example [1000, "USD",  "USD" ]
     *
     * @param  {Number} d        Number to convert
     * @param  {String} target   [optional] convert to this currency ('EUR'). By default it equals `options.currencyTarget`
     * @param  {String} source   [optional] currency of source data ('USD'). By default it equals `options.currencySource`
     * @return {String}          return converted values
     */
    constructor(d: number, target: string, source: string);
    modifiedCurrencyTarget: any;
}
/**
 * Round a number
 *
 * Same as toFixed(2) but it rounds number correclty `round(1.05, 1) = 1.1`
 *
 * @example [10.05123  , 2  ]
 * @example [1.05      , 1  ]
 *
 * @param  {Number} num       number
 * @param  {Number} precision number of decimal
 * @return {Number}
 */
export function round(num: number, precision: number): number;
/**
 * Add two numbers
 *
 * @example [1000.4  ,  2  ]
 * @example ["1000.4", "2" ]
 *
 * @param {Number} value Value to add
 * @return {Number} Result
 */
export function add(d: any, value: number): number;
/**
 * Substract two numbers
 *
 * @example [1000.4  ,  2  ]
 * @example ["1000.4", "2" ]
 *
 * @param {Number} value Value to substract
 * @return {Number} Result
 */
export function sub(d: any, value: number): number;
/**
 * Multiply two numbers
 *
 * @example [1000.4  ,  2  ]
 * @example ["1000.4", "2" ]
 *
 * @param {Number} value Value to multiply
 * @return {Number} Result
 */
export function mul(d: any, value: number): number;
/**
 * Divide two numbers
 *
 * @example [1000.4   ,  2  ]
 * @example ["1000.4" , "2" ]
 *
 * @param {Number} value Value to divide
 * @return {Number} Result
 */
export function div(d: any, value: number): number;
export declare function int(d: any): number;
export declare function toEN(d: any): string;
export declare function toFixed(d: any, nb: number): string;
export declare function toFR(d: any): string;
//# sourceMappingURL=number.d.ts.map