/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface ReconciliationEntry { 
    /**
     * Id of posting or transaction
     */
    id?: number;
    /**
     * Shows if it is a Posting or BankTransaction
     */
    entryType?: ReconciliationEntry.EntryTypeEnum;
    /**
     * The amount of the posting or transaction
     */
    readonly amountCurrency?: number;
    /**
     * The description of the posting or transaction
     */
    readonly description?: string;
    /**
     * The details of the posting or transaction
     */
    readonly details?: string;
    /**
     * The date of the posting or transaction
     */
    readonly date?: string;
}
export namespace ReconciliationEntry {
    export type EntryTypeEnum = 'Posting' | 'BankTransaction';
    export const EntryTypeEnum = {
        Posting: 'Posting' as EntryTypeEnum,
        BankTransaction: 'BankTransaction' as EntryTypeEnum
    };
}


