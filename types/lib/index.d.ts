export const formatters: {};
export function set(options: any): void;
export function reset(): void;
export function addTemplate(fileId: string, data: any, callback: Function): void;
export function addFormatters(customFormatters: any): void;
export function removeTemplate(fileId: string, callback: Function): void;
export function listConversionFormats(documentType: string): any[];
export function renderXML(xml: any, data: any, optionsRaw: any, callbackRaw: any): void;
export function renderCallback(templatePath: string, data: any, optionsRaw: any, callbackRaw: Function): void;
export function renderCallback(templatePath: string, data: any, callbackRaw: Function): void;
export function renderPromise(templatePath: string, data: any): Promise<{result: Buffer, reportName?: string}>;
export function renderPromise(templatePath: string, data: any, optionsRaw: any): Promise<{result: Buffer, reportName?: string}>;
export function render(templatePath: string, data: any, optionsRaw: any, callbackRaw: Function): void;
export function render(templatePath: string, data: any, callbackRaw: Function): void;
export function render(templatePath: string, data: any): Promise<{result: Buffer, reportName?: string}>;
export function render(templatePath: string, data: any, optionsRaw: any): Promise<{result: Buffer, reportName?: string}>;
export function getFileExtension(filePath: string, callback: Function): void;
export function convert(data: Buffer, convertTo: string, options: any, callback: Function): void;
//# sourceMappingURL=index.d.ts.map