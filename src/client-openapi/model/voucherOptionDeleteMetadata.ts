/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface VoucherOptionDeleteMetadata { 
    /**
     * Is the delete operation available for this Voucher?
     */
    readonly available?: boolean;
    /**
     * If the delete operation is not available then this is a list of reasons why. Otherwise the list will be empty
     */
    readonly reasons?: Array<string>;
}

