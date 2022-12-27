export function buildXML(xml: string, data: any, options: any, callback: Function): void;
export function getFormatterString(varName: any, contextName: any, formatters: any, existingFormatters: any, onlyFormatterWhichInjectXML: boolean): string;
export function getFilterString(conditions: any[], codeIfTrue: string, prefix: string, inverseCondition: boolean, forceObjectTested: string): string;
export function assembleXmlParts(arrayOfStringPart: any[], sortDepth: integer): string;
export function getLoopIteration(loopIds: any, part: any): void;
export function sortXmlParts(arrayToSort: any[]): any;
export function forEachArrayExit(currentlyVisitedArrays: any[], objDependencyDescriptor: any, nextAttrName: string, execute: Function): void;
export function getBuilderFunction(descriptor: any, existingFormatters: any): Function;
