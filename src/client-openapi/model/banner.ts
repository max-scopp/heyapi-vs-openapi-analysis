/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Change } from './change';


export interface Banner { 
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    readonly bannerType?: string;
    readonly title?: string;
    readonly message?: string;
    readonly button?: string;
    readonly link?: string;
    readonly tag?: string;
    readonly done?: boolean;
    readonly cancellable?: boolean;
}

