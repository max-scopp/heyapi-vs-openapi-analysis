/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface IncomingInvoiceMetaData { 
    /**
     * Voucher Id of the incoming invoice
     */
    voucherId?: number;
    /**
     * Id of the incoming invoice
     */
    incomingInvoiceDraftId?: number;
    /**
     * Id of the incoming invoice
     */
    incomingInvoiceId?: number;
    /**
     * Why is locked
     */
    whyIsLocked?: string;
    /**
     * VAT locked
     */
    vatLocked?: boolean;
    /**
     * Why is VAT locked
     */
    whyIsVatLocked?: string;
    /**
     * Changed at
     */
    changedAt?: string;
    /**
     * Changed by employee ID
     */
    changedByEmployeeId?: number;
    /**
     * Changed by actual employee ID
     */
    changedByActualEmployeeId?: number;
    /**
     * Changed by actual Company ID
     */
    changedByActualCompanyId?: number;
    postedToLedger?: boolean;
    draft?: boolean;
    draftChanged?: boolean;
    'new'?: boolean;
    locked?: boolean;
}

