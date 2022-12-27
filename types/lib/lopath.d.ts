export function PathError(message: any): void;
export class PathError {
    constructor(message: any);
    name: string;
    code: string;
    message: any;
}
/**
 * Convert an absolute path to an absolute URL understood by LibreOffice and
 *  OpenOffice. This is necessary because LO/OO use a cross-platform path format
 *  that does not match paths understood natively by OSes.
 * If the input is already a URL, it is returned as-is.
 * @param {string} inputPath - An absolute path to convert to a URL.
 * @returns {string} A string suitable for use with LibreOffice as an absolute file path URL.
 */
export function convertToURL(inputPath: string): string;
export { convertToURL as ConvertToURL };
