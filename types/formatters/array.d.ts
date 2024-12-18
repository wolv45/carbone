/**
 * Flatten an array of String or Number
 *
 * @version 0.12.5
 *
 * @example [ ["homer", "bart", "lisa"]        ]
 * @example [ ["homer", "bart", "lisa"] , " | "]
 * @example [ ["homer", "bart", "lisa"] , ""   ]
 * @example [ [10, 50]                         ]
 * @example [ []                               ]
 * @example [ null                             ]
 * @example [ {}                               ]
 * @example [ 20                               ]
 * @example [                                  ]
 *
 * @param  {Array}  d           array passed by carbone
 * @param  {String} separator   [optional] item separator (`,` by default)
 * @return {String}             computed result, or `d` if `d` is not an array
 */
export function arrayJoin(d: any[], separator: string): string;
/**
 *
 * @version 0.12.5
 *
 * Flatten an array of objects
 *
 * It ignores nested objects and arrays
 *
 * @example [ [{"id":2, "name":"homer"}, {"id":3, "name":"bart"} ]                    ]
 * @example [ [{"id":2, "name":"homer"}, {"id":3, "name":"bart"} ] , " - "            ]
 * @example [ [{"id":2, "name":"homer"}, {"id":3, "name":"bart"} ] , " ; ", "|"       ]
 * @example [ [{"id":2, "name":"homer"}, {"id":3, "name":"bart"} ] , " ; ", "|", "id" ]
 * @example [ [{"id":2, "name":"homer", "obj":{"id":20}, "arr":[12,23] }]             ]
 * @example [ ["homer", "bart", "lisa"]                                               ]
 * @example [ [10, 50]                                                                ]
 * @example [ []                                                                      ]
 * @example [ null                                                                    ]
 * @example [ {}                                                                      ]
 * @example [ 20                                                                      ]
 * @example [                                                                         ]
 *
 * @param  {Array} d                     array passed by carbone
 * @param  {String} objSeparator         [optional] object separator (`, ` by default)
 * @param  {String} attributeSeparator   [optional] attribute separator (`:` by default)
 * @param  {String} attributes           [optional] list of object's attributes to print
 * @return {String}                      the computed result, or `d` if `d` is not an array
 */
export function arrayMap(d: any[], objSeparator: string, attributeSeparator: string, ...args: any[]): string;
/**
 * Count and print row number of any array
 *
 * Usage example: `d[i].id:count()` will print a counter of the current row no matter the value of `id`
 *
 * @version 1.1.0
 *
 * @param   {String}  d       Array passed by carbone
 * @param   {String}  start   Number to start with (default: 1)
 * @return  {String}          Counter value
 */
export function count(d: string, loopId: any, start: string): string;
//# sourceMappingURL=array.d.ts.map