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


export interface PurchaseOrderEmail { 
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    email?: string;
    subject?: string;
    message?: string;
}

