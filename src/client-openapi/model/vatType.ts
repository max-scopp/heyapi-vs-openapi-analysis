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


export interface VatType { 
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    name?: string;
    number?: string;
    displayName?: string;
    percentage?: number;
    /**
     * Percentage of the VAT amount that is deducted. Always 100% for all predefined VAT types, but can be lower for custom types for relative VAT.
     */
    deductionPercentage?: number;
    parentType?: VatType;
}

