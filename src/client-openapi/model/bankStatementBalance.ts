/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface BankStatementBalance { 
    /**
     * Booked balance on the given date.
     */
    readonly bookedAmount?: number;
    readonly bookedDate?: string;
    /**
     * Available balance.
     */
    readonly availableAmount?: number;
    readonly availableDate?: string;
}

