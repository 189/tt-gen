export interface IPreload {
    apiType: string;
    method: string;
    params: string;
    pagePath?: string;
}
export interface IMeta {
    name?: string;
    property?: string;
    content: string;
}
export interface ILink {
    name?: string;
    rel: string;
    href: string;
    as: string;
    browserOnly?: boolean;
}
export interface Page {
    name: string;
    title?: string;
    path: string;
    proxy: string;
    enable: boolean;
    metas?: IMeta[];
    links?: ILink[];
    preloads: IPreload[];
}
export declare enum SITE_COUNTRY {
    sg = "sg",
    my = "my",
    th = "th",
    id = "id",
    pk = "pk",
    twc = "twc",
    au = "au",
}
export interface IGenParams {
    pagesFilePath?: string;
    pages: string | Page[];
    templatePath: string;
    sitePath: string;
    siteCountry: SITE_COUNTRY;
    isAll?: boolean;
}
export declare const titanGen: ({sitePath, templatePath, pagesFilePath, siteCountry, pages, isAll}: IGenParams, project: string, isPRO: boolean, compressHtml?: boolean) => Promise<void>;
export declare const titanMultiSiteGen: (genParamArr: IGenParams[], project: string, isPRO: boolean, compressHtml?: boolean) => Promise<void>;
