export function buildXML(xml: string, data: any | any[], options: any, callback: Function): void;
export function getFormatterString(getSafeValue: Function, varName: any, contextName: any, formatters: any, existingFormatters: any, onlyFormatterWhichInjectXML: boolean): string;
export function getFilterString(getSafeVar: Function, getSafeValue: Function, conditions: any[], codeIfTrue: string, prefix: string, inverseCondition: boolean, forceObjectTested: string): string;
export function assembleXmlParts(arrayOfStringPart: any[], sortDepth: integer, builderDictionary: any[]): string;
export function getLoopIteration(loopIds: any, part: any): void;
export function sortXmlParts(arrayToSort: any[]): any[];
export function forEachArrayExit(currentlyVisitedArrays: any[], objDependencyDescriptor: object, nextAttrName: string, execute: Function): void;
export function generateSafeJSVariable(): Function;
export function generateSafeJSValueAccessor(dictionaryName: string): {
    getIndex: (xmlOrConstantValue: any) => any;
    get: (xmlOrConstantValue: any) => string;
    getDictionary: () => any[];
};
export function getBuilderFunction(descriptor: object, existingFormatters: any): Function;
//# sourceMappingURL=builder.d.ts.map