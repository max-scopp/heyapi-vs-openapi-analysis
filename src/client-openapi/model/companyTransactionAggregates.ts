/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface CompanyTransactionAggregates { 
    /**
     * Customer id.
     */
    readonly id?: number;
    /**
     * Customer name.
     */
    readonly name?: number;
    /**
     * Incoming amount from this customer.
     */
    readonly incomingAmount?: number;
    /**
     * Percentage of incoming amount from all companies.
     */
    readonly percentageOfIncoming?: number;
    /**
     * Outgoing amount to this company.
     */
    readonly outgoingAmount?: number;
    /**
     * Percentage outgoing amount from all companies.
     */
    readonly percentageOfOutgoing?: number;
}

