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


export interface ReconciliationPaymentType { 
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    /**
     * Display Name
     */
    readonly displayName?: string;
}

