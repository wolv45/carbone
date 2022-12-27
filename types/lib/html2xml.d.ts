export = html2xml;
declare class html2xml {
    constructor(html: any);
    html: any;
    result: any[];
    TAGS: {
        docx: {
            start_text: string;
            end_text: string;
            b: string;
            u: string;
            i: string;
            color: (hex: any) => string;
        };
    };
    hasError: boolean;
    json: {};
    iter: number;
    toJSON(): void;
    getXML(): string;
    buildStyles(styles: any): {};
    setProps(child: any, deep?: number): void;
    buildText(child: any): void;
    convert(item: any): void;
}
