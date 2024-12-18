/**
 * Detect conditional block begin/end
 *
 * @private
 * @param  {String}   marker
 * @return {Boolean}  true if there is a showEnd/hideEnd formatter
 */
export function _isConditionalBlockEndMarker(marker: string): boolean;
/**
 * Detect conditional block begin/end
 *
 * @private
 * @param  {String}   marker
 * @return {Boolean}  true if there is a showBegin/hideBegin formatter
 */
export function _isConditionalBlockBeginMarker(marker: string): boolean;
/**
 * Test if a string or an array contains a value. The new formatter `ifIN` should be used instead of this one.
 *
 * @version 0.13.0
 *
 * @example [ "your beautiful eyes", "beauti",  "bingo" ]
 * @example [ "your beautiful eyes", "leg"   ,  "bingo" ]
 * @example [ "your beautiful eyes", "eyes"  ,  "bingo" ]
 * @example [ ""                   , "eyes"  ,  "bingo" ]
 * @example [ "your beautiful eyes", ""      ,  "bingo" ]
 * @example [ [100, 120, 20]       , 120     ,  "bingo" ]
 * @example [ [100, 120, 20]       , 99      ,  "bingo" ]
 * @example [ ["your", "eyes"]     , "eyes"  ,  "bingo" ]
 * @example [ []                   , "eyes"  ,  "bingo" ]
 *
 * @param  {String|Array}             d                 data
 * @param  {String|Integer|Boolean}   value             value to search
 * @param  {String}                   messageIfTrue     message to print if JSON data contains the value
 * @param  {Boolean}                  continueOnSuccess [optional], if true, next formatter will be called even if the condition is true
 * @return {Mixed}                    `message` if condition is true, `d` otherwise
 */
export function ifContain(d: string | any[], value: string | Integer | boolean, messageIfTrue: string, continueOnSuccess: boolean): Mixed;
export class ifContain {
    /**
     * Test if a string or an array contains a value. The new formatter `ifIN` should be used instead of this one.
     *
     * @version 0.13.0
     *
     * @example [ "your beautiful eyes", "beauti",  "bingo" ]
     * @example [ "your beautiful eyes", "leg"   ,  "bingo" ]
     * @example [ "your beautiful eyes", "eyes"  ,  "bingo" ]
     * @example [ ""                   , "eyes"  ,  "bingo" ]
     * @example [ "your beautiful eyes", ""      ,  "bingo" ]
     * @example [ [100, 120, 20]       , 120     ,  "bingo" ]
     * @example [ [100, 120, 20]       , 99      ,  "bingo" ]
     * @example [ ["your", "eyes"]     , "eyes"  ,  "bingo" ]
     * @example [ []                   , "eyes"  ,  "bingo" ]
     *
     * @param  {String|Array}             d                 data
     * @param  {String|Integer|Boolean}   value             value to search
     * @param  {String}                   messageIfTrue     message to print if JSON data contains the value
     * @param  {Boolean}                  continueOnSuccess [optional], if true, next formatter will be called even if the condition is true
     * @return {Mixed}                    `message` if condition is true, `d` otherwise
     */
    constructor(d: string | any[], value: string | Integer | boolean, messageIfTrue: string, continueOnSuccess: boolean);
    stopPropagation: boolean;
}
/**
 * Test if data is empty (null, undefined, [], {}, ...). The new formatter `ifEM` should be used instead of this one.
 *
 * @version 0.12.5
 *
 * @example [ null     ,  "D'oh!" ]
 * @example [ []       ,  "D'oh!" ]
 * @example [ {}       ,  "D'oh!" ]
 * @example [ ""       ,  "D'oh!" ]
 * @example [ 0        ,  "D'oh!" ]
 * @example [ "homer"  ,  "D'oh!" ]
 * @example [ [23]     ,  "D'oh!" ]
 * @example [ {"id":3} ,  "D'oh!" ]
 *
 * @param  {Mixed} d                   data
 * @param  {String} message            message to print if JSON data is empty
 * @param  {Boolean} continueOnSuccess [optional], if true, next formatter will be called even if the condition is true
 * @return {Mixed}                     `message` if condition is true, `d` otherwise
 */
export function ifEmpty(d: Mixed, message: string, continueOnSuccess: boolean): Mixed;
export class ifEmpty {
    /**
     * Test if data is empty (null, undefined, [], {}, ...). The new formatter `ifEM` should be used instead of this one.
     *
     * @version 0.12.5
     *
     * @example [ null     ,  "D'oh!" ]
     * @example [ []       ,  "D'oh!" ]
     * @example [ {}       ,  "D'oh!" ]
     * @example [ ""       ,  "D'oh!" ]
     * @example [ 0        ,  "D'oh!" ]
     * @example [ "homer"  ,  "D'oh!" ]
     * @example [ [23]     ,  "D'oh!" ]
     * @example [ {"id":3} ,  "D'oh!" ]
     *
     * @param  {Mixed} d                   data
     * @param  {String} message            message to print if JSON data is empty
     * @param  {Boolean} continueOnSuccess [optional], if true, next formatter will be called even if the condition is true
     * @return {Mixed}                     `message` if condition is true, `d` otherwise
     */
    constructor(d: Mixed, message: string, continueOnSuccess: boolean);
    stopPropagation: boolean;
}
/**
 * Test if a value equals a variable. The new formatter `ifEQ` should be used instead of this one.
 *
 * @version 0.13.0
 *
 * @example [ 100      , 100     ,  "bingo" ]
 * @example [ 100      , 101     ,  "bingo" ]
 * @example [ "homer"  , "homer" ,  "bingo" ]
 * @example [ "homer"  , "bart"  ,  "bingo" ]
 * @example [ ""       , ""      ,  "bingo" ]
 * @example [ null     , 100     ,  "bingo" ]
 * @example [ null     , null    ,  "bingo" ]
 * @example [ 0        , 100     ,  "bingo" ]
 *
 * @param  {String|Integer|Boolean}   d                 data
 * @param  {String|Integer|Boolean}   value             value to test
 * @param  {String}                   messageIfTrue     message to print if the value equals JSON data
 * @param  {Boolean}                  continueOnSuccess [optional], if true, next formatter will be called even if the condition is true
 * @return {Mixed}                    `message` if condition is true, `d` otherwise
 */
export function ifEqual(d: string | Integer | boolean, value: string | Integer | boolean, messageIfTrue: string, continueOnSuccess: boolean): Mixed;
export class ifEqual {
    /**
     * Test if a value equals a variable. The new formatter `ifEQ` should be used instead of this one.
     *
     * @version 0.13.0
     *
     * @example [ 100      , 100     ,  "bingo" ]
     * @example [ 100      , 101     ,  "bingo" ]
     * @example [ "homer"  , "homer" ,  "bingo" ]
     * @example [ "homer"  , "bart"  ,  "bingo" ]
     * @example [ ""       , ""      ,  "bingo" ]
     * @example [ null     , 100     ,  "bingo" ]
     * @example [ null     , null    ,  "bingo" ]
     * @example [ 0        , 100     ,  "bingo" ]
     *
     * @param  {String|Integer|Boolean}   d                 data
     * @param  {String|Integer|Boolean}   value             value to test
     * @param  {String}                   messageIfTrue     message to print if the value equals JSON data
     * @param  {Boolean}                  continueOnSuccess [optional], if true, next formatter will be called even if the condition is true
     * @return {Mixed}                    `message` if condition is true, `d` otherwise
     */
    constructor(d: string | Integer | boolean, value: string | Integer | boolean, messageIfTrue: string, continueOnSuccess: boolean);
    stopPropagation: boolean;
}
/**
 * Matches empty values, string, arrays or objects (null, undefined, [], {}, ...), it replaces `ifEmpty`.
 *
 * @version 2.0.0
 * @exampleContextFormatter [ null     ] true
 * @exampleContextFormatter [ []       ] true
 * @exampleContextFormatter [ {}       ] true
 * @exampleContextFormatter [ ""       ] true
 * @exampleContextFormatter [ 0        ] false
 * @exampleContextFormatter [ "homer"  ] false
 * @exampleContextFormatter [ [23]     ] false
 * @exampleContextFormatter [ {"id":3} ] false
 *
 * @param  {Mixed} d  data
 */
export function ifEM(d: Mixed): Mixed;
export class ifEM {
    /**
     * Matches empty values, string, arrays or objects (null, undefined, [], {}, ...), it replaces `ifEmpty`.
     *
     * @version 2.0.0
     * @exampleContextFormatter [ null     ] true
     * @exampleContextFormatter [ []       ] true
     * @exampleContextFormatter [ {}       ] true
     * @exampleContextFormatter [ ""       ] true
     * @exampleContextFormatter [ 0        ] false
     * @exampleContextFormatter [ "homer"  ] false
     * @exampleContextFormatter [ [23]     ] false
     * @exampleContextFormatter [ {"id":3} ] false
     *
     * @param  {Mixed} d  data
     */
    constructor(d: Mixed);
    isConditionTrue: boolean;
}
/**
 * Matches not empty values, string, arrays or objects.
 *
 * @version 2.0.0
 * @exampleContextFormatter [ 0        ] true
 * @exampleContextFormatter [ "homer"  ] true
 * @exampleContextFormatter [ [23]     ] true
 * @exampleContextFormatter [ {"id":3} ] true
 * @exampleContextFormatter [ null     ] false
 * @exampleContextFormatter [ []       ] false
 * @exampleContextFormatter [ {}       ] false
 * @exampleContextFormatter [ ""       ] false
 *
 * @param  {Mixed} d  data
 */
export function ifNEM(d: Mixed): Mixed;
export class ifNEM {
    /**
     * Matches not empty values, string, arrays or objects.
     *
     * @version 2.0.0
     * @exampleContextFormatter [ 0        ] true
     * @exampleContextFormatter [ "homer"  ] true
     * @exampleContextFormatter [ [23]     ] true
     * @exampleContextFormatter [ {"id":3} ] true
     * @exampleContextFormatter [ null     ] false
     * @exampleContextFormatter [ []       ] false
     * @exampleContextFormatter [ {}       ] false
     * @exampleContextFormatter [ ""       ] false
     *
     * @param  {Mixed} d  data
     */
    constructor(d: Mixed);
    isConditionTrue: boolean;
}
/**
 * Matches all values that are equal to a specified value. It can be combined with other formatters to create conditional content. It returns the initial marker. The state of the condition is not returned.
 *
 * @version 2.0.0
 * @exampleContextFormatter [ 100      , 100     ] true
 * @exampleContextFormatter [ 100      , 101     ] false
 * @exampleContextFormatter [ "homer"  , "homer" ] true
 * @exampleContextFormatter [ "homer"  , "bart"  ] false
 * @exampleContextFormatter [ ""       , ""      ] true
 * @exampleContextFormatter [ null     , 100     ] false
 * @exampleContextFormatter [ null     , null    ] true
 * @exampleContextFormatter [ 0        , 100     ] false
 *
 * @param {String|Integer} d
 * @param {String|Integer} value value to test
 * @returns It returns the initial value `d`. The state of the condition is not returned.
 */
export function ifEQ(d: string | Integer, value: string | Integer): any;
export class ifEQ {
    /**
     * Matches all values that are equal to a specified value. It can be combined with other formatters to create conditional content. It returns the initial marker. The state of the condition is not returned.
     *
     * @version 2.0.0
     * @exampleContextFormatter [ 100      , 100     ] true
     * @exampleContextFormatter [ 100      , 101     ] false
     * @exampleContextFormatter [ "homer"  , "homer" ] true
     * @exampleContextFormatter [ "homer"  , "bart"  ] false
     * @exampleContextFormatter [ ""       , ""      ] true
     * @exampleContextFormatter [ null     , 100     ] false
     * @exampleContextFormatter [ null     , null    ] true
     * @exampleContextFormatter [ 0        , 100     ] false
     *
     * @param {String|Integer} d
     * @param {String|Integer} value value to test
     * @returns It returns the initial value `d`. The state of the condition is not returned.
     */
    constructor(d: string | Integer, value: string | Integer);
    isConditionTrue: boolean;
}
/**
 * Matches all values that are not equal to a specified value. It can be combined with other formatters to create conditional content. It returns the initial marker. The state of the condition is not returned.
 *
 * @version 2.0.0
 * @exampleContextFormatter [ 100      , 100     ] false
 * @exampleContextFormatter [ 100      , 101     ] true
 * @exampleContextFormatter [ "homer"  , "homer" ] false
 * @exampleContextFormatter [ "homer"  , "bart"  ] true
 * @exampleContextFormatter [ ""       , ""      ] false
 * @exampleContextFormatter [ null     , 100     ] true
 * @exampleContextFormatter [ null     , null    ] false
 * @exampleContextFormatter [ 0        , 100     ] true
 *
 * @param {String|Integer} d
 * @param {String|Integer} value value to test
 * @returns It returns the initial value `d`. The state of the condition is not returned.
 */
export function ifNE(d: string | Integer, value: string | Integer): any;
export class ifNE {
    /**
     * Matches all values that are not equal to a specified value. It can be combined with other formatters to create conditional content. It returns the initial marker. The state of the condition is not returned.
     *
     * @version 2.0.0
     * @exampleContextFormatter [ 100      , 100     ] false
     * @exampleContextFormatter [ 100      , 101     ] true
     * @exampleContextFormatter [ "homer"  , "homer" ] false
     * @exampleContextFormatter [ "homer"  , "bart"  ] true
     * @exampleContextFormatter [ ""       , ""      ] false
     * @exampleContextFormatter [ null     , 100     ] true
     * @exampleContextFormatter [ null     , null    ] false
     * @exampleContextFormatter [ 0        , 100     ] true
     *
     * @param {String|Integer} d
     * @param {String|Integer} value value to test
     * @returns It returns the initial value `d`. The state of the condition is not returned.
     */
    constructor(d: string | Integer, value: string | Integer);
    isConditionTrue: boolean;
}
/**
 * Matches values that are greater than a specified value.
 *
 * @version 2.0.0
 * @exampleContextFormatter [1234, 1] true
 * @exampleContextFormatter ["50", "-29"] true
 * @exampleContextFormatter ["32q", "4q2"] true
 * @exampleContextFormatter ["1234Hello", "1"] true
 * @exampleContextFormatter ["10", "8Hello1234"] true
 * @exampleContextFormatter [-23, 19] false
 * @exampleContextFormatter [1, 768] false
 * @exampleContextFormatter [0, 0] false
 * @exampleContextFormatter [-2891, "33Hello"] false
 *
 * @param {Integer} d
 * @param {Integer} value value to test
 * @returns It returns the initial value `d`. The state of the condition is not returned.
 */
export function ifGT(d: Integer, value: Integer): Integer;
export class ifGT {
    /**
     * Matches values that are greater than a specified value.
     *
     * @version 2.0.0
     * @exampleContextFormatter [1234, 1] true
     * @exampleContextFormatter ["50", "-29"] true
     * @exampleContextFormatter ["32q", "4q2"] true
     * @exampleContextFormatter ["1234Hello", "1"] true
     * @exampleContextFormatter ["10", "8Hello1234"] true
     * @exampleContextFormatter [-23, 19] false
     * @exampleContextFormatter [1, 768] false
     * @exampleContextFormatter [0, 0] false
     * @exampleContextFormatter [-2891, "33Hello"] false
     *
     * @param {Integer} d
     * @param {Integer} value value to test
     * @returns It returns the initial value `d`. The state of the condition is not returned.
     */
    constructor(d: Integer, value: Integer);
    isConditionTrue: boolean;
}
/**
 * Matches values that are greater than or equal to a specified value.
 *
 * @version 2.0.0
 * @exampleContextFormatter [50, -29] true
 * @exampleContextFormatter [1, 1] true
 * @exampleContextFormatter [1290, 768] true
 * @exampleContextFormatter ["1234", "1"] true
 * @exampleContextFormatter [-23, 19] false
 * @exampleContextFormatter [1, 768] false
 * @exampleContextFormatter ["1" , "1234"] false
 *
 * @param {Integer} d
 * @param {Integer} value value to test
 * @returns It returns the initial value `d`. The state of the condition is not returned.
 */
export function ifGTE(d: Integer, value: Integer): Integer;
export class ifGTE {
    /**
     * Matches values that are greater than or equal to a specified value.
     *
     * @version 2.0.0
     * @exampleContextFormatter [50, -29] true
     * @exampleContextFormatter [1, 1] true
     * @exampleContextFormatter [1290, 768] true
     * @exampleContextFormatter ["1234", "1"] true
     * @exampleContextFormatter [-23, 19] false
     * @exampleContextFormatter [1, 768] false
     * @exampleContextFormatter ["1" , "1234"] false
     *
     * @param {Integer} d
     * @param {Integer} value value to test
     * @returns It returns the initial value `d`. The state of the condition is not returned.
     */
    constructor(d: Integer, value: Integer);
    isConditionTrue: boolean;
}
/**
 * Matches values that are less than a specified value.
 *
 * @version 2.0.0
 * @exampleContextFormatter [-23, 19] true
 * @exampleContextFormatter [1, 768] true
 * @exampleContextFormatter ["1" , "1234"] true
 * @exampleContextFormatter ["123dsf", "103123"] true
 * @exampleContextFormatter [-1299283, "-2891feihuwf"] true
 * @exampleContextFormatter [50, -29] false
 * @exampleContextFormatter [0, 0] false
 * @exampleContextFormatter [1290, 768] false
 * @exampleContextFormatter ["1234", "1"] false
 *
 * @param {Integer} d
 * @param {Integer} value value to test
 * @returns It returns the initial value `d`. The state of the condition is not returned.
 */
export function ifLT(d: Integer, value: Integer): Integer;
export class ifLT {
    /**
     * Matches values that are less than a specified value.
     *
     * @version 2.0.0
     * @exampleContextFormatter [-23, 19] true
     * @exampleContextFormatter [1, 768] true
     * @exampleContextFormatter ["1" , "1234"] true
     * @exampleContextFormatter ["123dsf", "103123"] true
     * @exampleContextFormatter [-1299283, "-2891feihuwf"] true
     * @exampleContextFormatter [50, -29] false
     * @exampleContextFormatter [0, 0] false
     * @exampleContextFormatter [1290, 768] false
     * @exampleContextFormatter ["1234", "1"] false
     *
     * @param {Integer} d
     * @param {Integer} value value to test
     * @returns It returns the initial value `d`. The state of the condition is not returned.
     */
    constructor(d: Integer, value: Integer);
    isConditionTrue: boolean;
}
/**
 * Matches values that are less than or equal to a specified value.
 *
 * @version 2.0.0
 * @exampleContextFormatter [-23, 19] true
 * @exampleContextFormatter [1, 768] true
 * @exampleContextFormatter [5, 5] true
 * @exampleContextFormatter ["1" , "1234"] true
 * @exampleContextFormatter [1290, 768] false
 * @exampleContextFormatter ["1234", "1"] false
 *
 * @param {Integer} d
 * @param {Integer} value value to test
 * @returns It returns the initial value `d`. The state of the condition is not returned.
 */
export function ifLTE(d: Integer, value: Integer): Integer;
export class ifLTE {
    /**
     * Matches values that are less than or equal to a specified value.
     *
     * @version 2.0.0
     * @exampleContextFormatter [-23, 19] true
     * @exampleContextFormatter [1, 768] true
     * @exampleContextFormatter [5, 5] true
     * @exampleContextFormatter ["1" , "1234"] true
     * @exampleContextFormatter [1290, 768] false
     * @exampleContextFormatter ["1234", "1"] false
     *
     * @param {Integer} d
     * @param {Integer} value value to test
     * @returns It returns the initial value `d`. The state of the condition is not returned.
     */
    constructor(d: Integer, value: Integer);
    isConditionTrue: boolean;
}
/**
 * Matches any of the values specified in an array or string, it replaces `ifContain`.
 *
 * @version 2.0.0
 * @exampleContextFormatter ["car is broken", "is"] true
 * @exampleContextFormatter [[1, 2, "toto"], 2] true
 * @exampleContextFormatter ["car is broken", "are"] false
 * @exampleContextFormatter [[1, 2, "toto"], "titi"] false
 *
 * @param {Integer|String|Array} d
 * @param {Integer} value value to test
 * @returns It returns the initial value `d`. The state of the condition is not returned.
 */
export function ifIN(d: Integer | string | any[], value: Integer): any;
export class ifIN {
    /**
     * Matches any of the values specified in an array or string, it replaces `ifContain`.
     *
     * @version 2.0.0
     * @exampleContextFormatter ["car is broken", "is"] true
     * @exampleContextFormatter [[1, 2, "toto"], 2] true
     * @exampleContextFormatter ["car is broken", "are"] false
     * @exampleContextFormatter [[1, 2, "toto"], "titi"] false
     *
     * @param {Integer|String|Array} d
     * @param {Integer} value value to test
     * @returns It returns the initial value `d`. The state of the condition is not returned.
     */
    constructor(d: Integer | string | any[], value: Integer);
    isConditionTrue: boolean;
}
/**
 * Matches none of the values specified in an array or string.
 *
 * @version 2.0.0
 * @exampleContextFormatter ["car is broken", "are"] true
 * @exampleContextFormatter [[1, 2, "toto"], "titi"] true
 * @exampleContextFormatter ["car is broken", "is"] false
 * @exampleContextFormatter [[1, 2, "toto"], 2] false
 *
 * @param {Integer|String|Array} d
 * @param {Integer} value value to test
 * @returns It returns the initial value `d`. The state of the condition is not returned.
 */
export function ifNIN(d: Integer | string | any[], value: Integer): any;
export class ifNIN {
    /**
     * Matches none of the values specified in an array or string.
     *
     * @version 2.0.0
     * @exampleContextFormatter ["car is broken", "are"] true
     * @exampleContextFormatter [[1, 2, "toto"], "titi"] true
     * @exampleContextFormatter ["car is broken", "is"] false
     * @exampleContextFormatter [[1, 2, "toto"], 2] false
     *
     * @param {Integer|String|Array} d
     * @param {Integer} value value to test
     * @returns It returns the initial value `d`. The state of the condition is not returned.
     */
    constructor(d: Integer | string | any[], value: Integer);
    isConditionTrue: boolean;
}
/**
 * hide text block between hideBegin and hideEnd if the condition is true
 * @version 2.0.0
 * @private
 * @param {*} d
 */
export function hideBegin(d: any): string;
export class hideBegin {
    /**
     * hide text block between hideBegin and hideEnd if the condition is true
     * @version 2.0.0
     * @private
     * @param {*} d
     */
    private constructor();
    isHidden: number;
    stopPropagation: boolean;
}
/**
 * hide text block between hideBegin and hideEnd if the condition is true
 * @version 2.0.0
 * @private
 */
export function hideEnd(): string;
export class hideEnd {
    isHidden: number;
}
/**
 * Show a text block between showBegin and showEnd if the condition is true
 * @version 2.0.0
 * @private
 * @param {*} d
 */
export function showBegin(d: any): string;
export class showBegin {
    /**
     * Show a text block between showBegin and showEnd if the condition is true
     * @version 2.0.0
     * @private
     * @param {*} d
     */
    private constructor();
    isHidden: number;
    stopPropagation: boolean;
}
/**
 * show a text block between showBegin and showEnd if the condition is true
 * @version 2.0.0
 * @private
 */
export function showEnd(): string;
export class showEnd {
    isHidden: number;
}
/**
 * Print a message if the condition is true. It should be used with other formatters to print conditional content.
 *
 * @version 2.0.0
 * @example ["Carbone.io"]
 *
 * @param {Mixed} d marker
 * @param {*} message message to print
 */
export function show(d: Mixed, message: any): any;
export class show {
    /**
     * Print a message if the condition is true. It should be used with other formatters to print conditional content.
     *
     * @version 2.0.0
     * @example ["Carbone.io"]
     *
     * @param {Mixed} d marker
     * @param {*} message message to print
     */
    constructor(d: Mixed, message: any);
    stopPropagation: boolean;
}
/**
 * Print a message if the condition is false. It should be used with other formatters to print conditional content.
 *
 * @version 2.0.0
 * @param {Mixed} d marker
 * @param {*} message message to print
 */
export function elseShow(d: Mixed, message: any): any;
export class elseShow {
    /**
     * Print a message if the condition is false. It should be used with other formatters to print conditional content.
     *
     * @version 2.0.0
     * @param {Mixed} d marker
     * @param {*} message message to print
     */
    constructor(d: Mixed, message: any);
    stopPropagation: boolean;
}
/**
 * Change the default operator between conditional formatters.
 *
 * For example: `{d.car:ifEQ('delorean'):and(.speed):ifGT(80):show('TravelInTime'):elseShow('StayHere')}`
 * means "if  d.car equals 'delorean' AND d.speed is greater than 80, then it prints 'TravelInTime', otherwise
 * it prints 'StayHere'
 *
 * @version 2.0.0
 * @param  {Mixed} d      data
 * @param  {Mixed} value  [optional] new value to test
 * @return {Mixed}        if `value` is defined, the next formatter "sees" this new value instead of the original value
 */
export function and(d: Mixed, value: Mixed, ...args: any[]): Mixed;
export class and {
    /**
     * Change the default operator between conditional formatters.
     *
     * For example: `{d.car:ifEQ('delorean'):and(.speed):ifGT(80):show('TravelInTime'):elseShow('StayHere')}`
     * means "if  d.car equals 'delorean' AND d.speed is greater than 80, then it prints 'TravelInTime', otherwise
     * it prints 'StayHere'
     *
     * @version 2.0.0
     * @param  {Mixed} d      data
     * @param  {Mixed} value  [optional] new value to test
     * @return {Mixed}        if `value` is defined, the next formatter "sees" this new value instead of the original value
     */
    constructor(d: Mixed, value: Mixed, ...args: any[]);
    isAndOperator: boolean;
}
/**
 * Change the default operator between conditional formatters.
 *
 * For example: `{d.car:ifEQ('delorean'):or(.speed):ifGT(80):show('TravelInTime'):elseShow('StayHere')}`
 * means "if  d.car equals 'delorean' OR d.speed is greater than 80, then it prints 'TravelInTime', otherwise
 * it prints 'StayHere'
 *
 *
 * @version 2.0.0
 * @param  {Mixed} d      data
 * @param  {Mixed} value  [optional] new value to test
 * @return {Mixed}        if `value` is defined, the next formatter "sees" this new value instead of the original value
 */
export function or(d: Mixed, value: Mixed, ...args: any[]): Mixed;
export class or {
    /**
     * Change the default operator between conditional formatters.
     *
     * For example: `{d.car:ifEQ('delorean'):or(.speed):ifGT(80):show('TravelInTime'):elseShow('StayHere')}`
     * means "if  d.car equals 'delorean' OR d.speed is greater than 80, then it prints 'TravelInTime', otherwise
     * it prints 'StayHere'
     *
     *
     * @version 2.0.0
     * @param  {Mixed} d      data
     * @param  {Mixed} value  [optional] new value to test
     * @return {Mixed}        if `value` is defined, the next formatter "sees" this new value instead of the original value
     */
    constructor(d: Mixed, value: Mixed, ...args: any[]);
    isAndOperator: boolean;
}
/**
 * Returns the length of a string or array.
 *
 * @version 2.0.0
 * @example ["Hello World"]
 * @example [""]
 * @example [[1, 2, 3, 4, 5]]
 * @example [[1, "Hello"]]
 *
 * @param {Mixed} d Array or String
 * @returns {Number} Length of the element
 */
export function len(d: Mixed): number;
//# sourceMappingURL=condition.d.ts.map