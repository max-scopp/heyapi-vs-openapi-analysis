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


export interface GenericDataRate { 
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    readonly year?: number;
    readonly rateType?: string;
    readonly rate?: number;
    ratePreviousYear?: number;
}

