/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Company } from './company';
import { Change } from './change';


export interface VatDeliveryStatusUpdate { 
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    company?: Company;
    /**
     * The year of the VAT term
     */
    readonly year?: number;
    /**
     * The VAT term
     */
    readonly term?: number;
}

