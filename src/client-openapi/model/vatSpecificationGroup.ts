/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { VatSpecificationLine } from './vatSpecificationLine';


export interface VatSpecificationGroup { 
    /**
     * The name of the group
     */
    readonly name?: string;
    /**
     * The vat lines
     */
    readonly lines?: Array<VatSpecificationLine>;
    /**
     * Total vat amount on the group
     */
    readonly totalAmountVat?: number;
    /**
     * Total vat basis amount on the group
     */
    readonly totalAmountVatBasis?: number;
}

