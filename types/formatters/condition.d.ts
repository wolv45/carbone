/**
 * Test if a string or an array contains a value
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
     * Test if a string or an array contains a value
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
 * Test if data is empty (null, undefined, [], {}, ...)
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
     * Test if data is empty (null, undefined, [], {}, ...)
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
 * Test if a value equals a variable
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
     * Test if a value equals a variable
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
 * Test if data is empty (null, undefined, [], {}, ...)
 *
 * @version 2.0
 * @example [ null     ]
 * @example [ []       ]
 * @example [ {}       ]
 * @example [ ""       ]
 * @example [ 0        ]
 * @example [ "homer"  ]
 * @example [ [23]     ]
 * @example [ {"id":3} ]
 *
 * @param  {Mixed} d  data
 */
export function ifEM(d: Mixed): Mixed;
export class ifEM {
    /**
     * Test if data is empty (null, undefined, [], {}, ...)
     *
     * @version 2.0
     * @example [ null     ]
     * @example [ []       ]
     * @example [ {}       ]
     * @example [ ""       ]
     * @example [ 0        ]
     * @example [ "homer"  ]
     * @example [ [23]     ]
     * @example [ {"id":3} ]
     *
     * @param  {Mixed} d  data
     */
    constructor(d: Mixed);
    isConditionTrue: [type];
}
export function ifNEM(d: any): any;
export class ifNEM {
    constructor(d: any);
    isConditionTrue: [type];
}
export function ifEQ(d: any, value: any): any;
export class ifEQ {
    constructor(d: any, value: any);
    isConditionTrue: [type];
}
export function ifNE(d: any, value: any): any;
export class ifNE {
    constructor(d: any, value: any);
    isConditionTrue: [type];
}
export function ifGT(d: any, value: any): any;
export class ifGT {
    constructor(d: any, value: any);
    isConditionTrue: [type];
}
export function ifGTE(d: any, value: any): any;
export class ifGTE {
    constructor(d: any, value: any);
    isConditionTrue: [type];
}
export function ifLT(d: any, value: any): any;
export class ifLT {
    constructor(d: any, value: any);
    isConditionTrue: [type];
}
export function ifLTE(d: any, value: any): any;
export class ifLTE {
    constructor(d: any, value: any);
    isConditionTrue: [type];
}
export function ifIN(d: any, value: any): any;
export class ifIN {
    constructor(d: any, value: any);
    isConditionTrue: [type];
}
export function ifNIN(d: any, value: any): any;
export class ifNIN {
    constructor(d: any, value: any);
    isConditionTrue: [type];
}
export function hideBegin(d: any): string;
export class hideBegin {
    constructor(d: any);
    isHidden: number;
    stopPropagation: boolean;
}
export function hideEnd(): string;
export class hideEnd {
    isHidden: number;
}
export function showBegin(d: any): string;
export class showBegin {
    constructor(d: any);
    isHidden: number;
    stopPropagation: boolean;
}
export function showEnd(): string;
export class showEnd {
    isHidden: number;
}
export function show(d: any, message: any): any;
export class show {
    constructor(d: any, message: any);
    stopPropagation: boolean;
}
export function elseShow(d: any, message: any): any;
export class elseShow {
    constructor(d: any, message: any);
    stopPropagation: boolean;
}
/**
 * Change default operator between conditional formatters
 *
 * For example: `{d.car:ifEQ('delorean'):and(.speed):ifGT(80):show('TravelInTime'):elseShow('StayHere')}`
 * means "if  d.car equals 'delorean' AND d.speed is greater than 80, then it prints 'TravelInTime', otherwise
 * it prints 'StayHere'
 *
 * @version 2.0
 * @param  {Mixed} d      data
 * @param  {Mixed} value  [optional] new value to test
 * @return {Mixed}        if `value` is defined, the next formatter "sees" this new value instead of the original value
 */
export function and(d: Mixed, value: Mixed, ...args: any[]): Mixed;
export class and {
    /**
     * Change default operator between conditional formatters
     *
     * For example: `{d.car:ifEQ('delorean'):and(.speed):ifGT(80):show('TravelInTime'):elseShow('StayHere')}`
     * means "if  d.car equals 'delorean' AND d.speed is greater than 80, then it prints 'TravelInTime', otherwise
     * it prints 'StayHere'
     *
     * @version 2.0
     * @param  {Mixed} d      data
     * @param  {Mixed} value  [optional] new value to test
     * @return {Mixed}        if `value` is defined, the next formatter "sees" this new value instead of the original value
     */
    constructor(d: Mixed, value: Mixed, ...args: any[]);
    isAndOperator: boolean;
}
/**
 * Change default operator between conditional formatters
 *
 * For example: `{d.car:ifEQ('delorean'):or(.speed):ifGT(80):show('TravelInTime'):elseShow('StayHere')}`
 * means "if  d.car equals 'delorean' OR d.speed is greater than 80, then it prints 'TravelInTime', otherwise
 * it prints 'StayHere'
 *
 *
 * @version 2.0
 * @param  {Mixed} d      data
 * @param  {Mixed} value  [optional] new value to test
 * @return {Mixed}        if `value` is defined, the next formatter "sees" this new value instead of the original value
 */
export function or(d: Mixed, value: Mixed, ...args: any[]): Mixed;
export class or {
    /**
     * Change default operator between conditional formatters
     *
     * For example: `{d.car:ifEQ('delorean'):or(.speed):ifGT(80):show('TravelInTime'):elseShow('StayHere')}`
     * means "if  d.car equals 'delorean' OR d.speed is greater than 80, then it prints 'TravelInTime', otherwise
     * it prints 'StayHere'
     *
     *
     * @version 2.0
     * @param  {Mixed} d      data
     * @param  {Mixed} value  [optional] new value to test
     * @return {Mixed}        if `value` is defined, the next formatter "sees" this new value instead of the original value
     */
    constructor(d: Mixed, value: Mixed, ...args: any[]);
    isAndOperator: boolean;
}
//# sourceMappingURL=condition.d.ts.map