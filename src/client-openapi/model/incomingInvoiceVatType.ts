/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface IncomingInvoiceVatType { 
    /**
     * Id of vat type
     */
    id?: number;
    /**
     * The vat type direction
     */
    direction?: IncomingInvoiceVatType.DirectionEnum;
    /**
     * The vat type number
     */
    number?: string;
    /**
     * The vat type name
     */
    name?: string;
    /**
     * java.math.BigDecimal
     */
    basisPercentage?: number;
    /**
     * java.math.BigDecimal
     */
    percentage?: number;
    /**
     * The vat type name
     */
    displayName?: string;
    reverseInDeductableVatCode?: boolean;
    reverseInNonDeductableVatCode?: boolean;
}
export namespace IncomingInvoiceVatType {
    export type DirectionEnum = 'IN' | 'OUT';
    export const DirectionEnum = {
        In: 'IN' as DirectionEnum,
        Out: 'OUT' as DirectionEnum
    };
}


