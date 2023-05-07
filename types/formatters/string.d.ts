/**
 * Lower case all letters
 *
 * @version 0.12.5
 *
 * @example [ "My Car" ]
 * @example [ "my car" ]
 * @example [ null ]
 * @example [ 1203 ]
 *
 * @param  {String} d string to parse
 * @return {String}   lower case on all letters, or `d` is it not a string
 */
export function lowerCase(d: string): string;
/**
 * Upper case all letters
 *
 * @version 0.12.5
 *
 * @example [ "My Car" ]
 * @example [ "my car" ]
 * @example [ null ]
 * @example [ 1203 ]
 *
 * @param  {String} d string to parse
 * @return {String}   upper case on all letters, or `d` is it not a string
 */
export function upperCase(d: string): string;
/**
 * Upper case first letter
 *
 * @version 0.12.5
 *
 * @example [ "My Car" ]
 * @example [ "my car" ]
 * @example [ null ]
 * @example [      ]
 * @example [ 1203 ]
 *
 * @param  {String} d string to parse
 * @return {String}   upper case on the first letter, or `d` is it not a string
 */
export function ucFirst(d: string): string;
/**
 * Upper case the first letter of all words
 *
 * @version 0.12.5
 *
 * @example [ "my car" ]
 * @example [ "My cAR" ]
 * @example [ null ]
 * @example [      ]
 * @example [ 1203 ]
 *
 * @param  {String} d string to parse
 * @return {String}   upper case on all words, or `d` is it not a string
 */
export function ucWords(d: string): string;
/**
 * Convert user-defined enums to human readable values
 *
 * User-defined enums must be passed in `options` of `carbone.render`.
 *
 * @version 0.13.0
 *
 * @exampleContext { "enum" : { "ORDER_STATUS"  : ["pending", "sent", "delivered"] } }
 * @example [ 0    , "ORDER_STATUS" ]
 * @example [ 1    , "ORDER_STATUS" ]
 * @example [ 5    , "ORDER_STATUS" ]
 *
 * @exampleContext { "enum" : { "YES_NO"        : {"true" : "Yes", "false" : "No"} } }
 * @example [ false, "YES_NO"       ]
 * @example [ true , "YES_NO"       ]
 * @example [ null , "YES_NO"       ]
 * @example [ 3    , "UNKNOWN_ENUM" ]
 *
 * @param  {Integer|String} d
 * @param  {String}         type   enum name passed in `options` of `carbone.render(data, options)`
 * @return {String}         return human readable enum or original value if it cannot be converted
 */
export function convEnum(d: Integer | string, type: string): string;
/**
 * Convert carriage return `\\r\\n` and line feed `\\n` to XML-specific code in rendered document
 *
 * Compatible with odt, and docx (beta)
 *
 * @version 1.1.0
 *
 * @exampleContext { "extension" : "odt" }
 * @example [ "my blue \\n car"   ]
 * @example [ "my blue \\r\\n car" ]
 *
 * @exampleContext { "extension" : "docx" }
 * @example [ "my blue \\n car"   ]
 * @example [ "my blue \\r\\n car" ]
 *
 * @param  {Integer|String} d
 * @return {String}         return "XML carriage return" for odt and docx
 */
export function convCRLF(d: Integer | string): string;
export namespace convCRLF {
    const canInjectXML: boolean;
}
/**
 * Removes accents from text
 *
 * @version 1.1.0
 *
 * @example [ "crème brulée" ]
 * @example [ "CRÈME BRULÉE" ]
 * @example [ "être"         ]
 * @example [ "éùïêèà"       ]
 *
 * @param  {String} d string to parse
 * @return {String}   string without accent
 */
export function unaccent(d: string): string;
/**
 * Always return the same message if called (sort of "catch all" formatter)
 *
 * @version 0.13.0
 *
 * @example [ "My Car", "hello!" ]
 * @example [ "my car", "hello!" ]
 * @example [ null    , "hello!" ]
 * @example [ 1203    , "hello!" ]
 *
 * @param  {Mixed}   d           data
 * @param  {String}  message     text to print
 * @return {String} `message` is always printed
 */
export function print(d: Mixed, message: string): string;
/**
 * Slice a string with a begin and an end
 *
 * @version 1.2.0
 *
 * @example ["foobar" , 0  , 3 ]
 * @example ["foobar" , 1      ]
 * @example ["foobar" , -2     ]
 * @example ["foobar" , 2  , -1]
 *
 * @param {String} d
 * @param {Integer} begin Zero-based index at which to begin extraction.
 * @param {Integer} end Zero-based index before which to end extraction
 * @return {String} return the formatted string
 */
export function substr(d: string, begin: Integer, end: Integer): string;
/**
 * Pad the string from the start with another string
 *
 * @version 3.0.0 new
 *
 * @example ["abc", 10         ]
 * @example ["abc", 10, "foo"  ]
 * @example ["abc", 6, "123465"]
 * @example ["abc", 8, "0"     ]
 * @example ["abc", 1          ]
 *
 * @param {String} d
 * @param {number} targetLength  The length of the resulting string once the string has been padded.
 *                               If the value is less than string length, then string is returned as-is.
 * @param {String} padString     The string to pad the current str with. If padString is too long to stay
 *                               within the targetLength, it will be truncated from the end. The default value is " "
 * @return {String} return the padded left string
 */
export function padl(d: string, targetLength: number, padString: string): string;
/**
 * Pad the string from the end with another string
 *
 * @version 3.0.0 new
 *
 * @example ["abc", 10         ]
 * @example ["abc", 10, "foo"  ]
 * @example ["abc", 6, "123465"]
 * @example ["abc", 8, "0"     ]
 * @example ["abc", 1          ]
 *
 * @param {String} d
 * @param {number} targetLength  The length of the resulting string once the string has been padded.
 *                               If the value is less than string length, then string is returned as-is.
 * @param {String} padString     The string to pad the current str with. If padString is too long to stay
 *                               within the targetLength, it will be truncated from the end. The default value is " "
 * @return {String} return the padded right string
 */
export function padr(d: string, targetLength: number, padString: string): string;
export function imageSize(d: any, width: any, height: any): any;
export function html(d: any): string;
export { substr as slice };
//# sourceMappingURL=string.d.ts.map