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


export interface AmeldingType { 
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    /**
     * displayName
     */
    readonly displayName?: string;
    /**
     * code
     */
    readonly code?: string;
    /**
     * type
     */
    readonly type?: number;
}

