/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Posting } from './posting';
import { Change } from './change';


export interface CloseGroup { 
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    date?: string;
    readonly postings?: Array<Posting>;
}

