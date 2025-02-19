/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface PostBalanceAdjustmentRequestDTO { 
    /**
     * The id of the reconciliation where adjustment will be created
     */
    reconciliationId: number;
    /**
     * Posting Ids
     */
    postingIds: Array<number>;
    /**
     * Transaction Ids
     */
    transactionIds: Array<number>;
    /**
     * Payment Type Id
     */
    paymentTypeId: number;
}

