export const formatters: {};
/**
 * Parse options coming from user-side. Clean it and generate a safe options object for internal use
 *
 * @param {Object}    userDefinedOptions  The options object coming from user-side, passed in carbone.render(XML) is used
 * @param {<type>}    callbackFn          The callback function of carbone.render(XML)
 * @param {Function}  callback            The callback of this function
 */
export function parseOptions(userDefinedOptions: any, callbackFn: <type>() => any, callback: Function): void;
/**
 * Parse user-defined convertTo object and set options.convertTo with safe values
 *
 * options.extension must be set
 *
 * @param   {Object}  options               coming from parseOptions. It updates options.convertTo and generates this object
 *                                          {
 *                                            extension  : 'pdf',
 *                                            format     : 'writer_pdf_Export' // coming from lib/format.js
 *                                            optionsStr : '44,34,76',         // only for CSV
 *                                            filters    : {                   // only for PDF, JPG, ...
 *                                              ReduceImageResolution : true
 *                                            }
 *                                          }
 * @param   {Object}  userDefinedConvertTo  convertTo, coming from user-side
 * @return  {String}  options               Return null if no error. Return a string if there is an error.
 */
export function parseConvertTo(options: any, userDefinedConvertTo: any): string;
/**
 * Parse options of userDefinedCSVOptions coming from user side and update internal options.convertTo
 *
 * @param      {Object}  userDefinedCSVOptions  The csv options coming from user-side
 *                                              https://wiki.openoffice.org/wiki/Documentation/DevGuide/Spreadsheets/Filter_Options
 *                                              {
 *                                                 fieldSeparator    : ',',
 *                                                 textDelimiter     : '"',
 *                                                 characterSet      : '76',
 *                                                 numberOfFirstLine : 1,
 *                                                 cellFormat        : 1
 *                                              }
 * @param      {Object}  convertToObj  updates convertTo.optionsStr
 * @return     {String}                null of there is no error, a string if there is an error
 */
export function checkAndSetOptionsForCSV(userDefinedCSVOptions: any, convertToObj: any): string;
/**
 * Parse options of userDefinedPDFFilters coming from user side and update internal options.convertTo
 *
 * @param      {Object}  userDefinedPDFFilters    The pdf filters like ReduceImageResolution, ...
 * @param      {Object}  convertToObj             updates convertTo.optionsStr
 * @return     {String}                           null of there is no error, a string if there is an error
 */
export function checkAndSetOptionsForPDF(userDefinedPDFFilters: any, convertToObj: any): string;
/**
 * Verify files extensions type based on the format.js
 *
 * @param  {String} extensionIn extension type coming from the template file.
 * @param  {String} extensionOut extension type expected to be converted.
 * @return {Boolean} Return true if the extensions format are not matching, otherwise false.
 */
export function checkDocTypeAndOutputExtensions(extensionIn: string, extensionOut: string): boolean;
//# sourceMappingURL=input.d.ts.map