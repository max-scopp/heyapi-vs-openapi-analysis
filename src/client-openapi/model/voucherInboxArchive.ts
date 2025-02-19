/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface VoucherInboxArchive { 
    /**
     * List of voucherInboxIds to move to archive
     */
    ids?: string;
    /**
     * Target path in archive
     */
    pathId?: number;
    archiveDate?: string;
    /**
     * Override filename
     */
    filename?: string;
    /**
     * Add to specific archive
     */
    modelType?: VoucherInboxArchive.ModelTypeEnum;
    modelId?: number;
    /**
     * Add to document to invoice
     */
    addToInvoice?: VoucherInboxArchive.AddToInvoiceEnum;
}
export namespace VoucherInboxArchive {
    export type ModelTypeEnum = 'NONE' | 'CUSTOMER' | 'SUPPLIER' | 'PROJECT' | 'ORDER' | 'OFFER' | 'PRODUCT' | 'EMPLOYEE' | 'ACCOUNT' | 'ASSET';
    export const ModelTypeEnum = {
        None: 'NONE' as ModelTypeEnum,
        Customer: 'CUSTOMER' as ModelTypeEnum,
        Supplier: 'SUPPLIER' as ModelTypeEnum,
        Project: 'PROJECT' as ModelTypeEnum,
        Order: 'ORDER' as ModelTypeEnum,
        Offer: 'OFFER' as ModelTypeEnum,
        Product: 'PRODUCT' as ModelTypeEnum,
        Employee: 'EMPLOYEE' as ModelTypeEnum,
        Account: 'ACCOUNT' as ModelTypeEnum,
        Asset: 'ASSET' as ModelTypeEnum
    };
    export type AddToInvoiceEnum = 'ADD_TO_INVOICE_NONE' | 'ADD_TO_INVOICE_NEXT' | 'ADD_TO_INVOICE_ALL';
    export const AddToInvoiceEnum = {
        AddToInvoiceNone: 'ADD_TO_INVOICE_NONE' as AddToInvoiceEnum,
        AddToInvoiceNext: 'ADD_TO_INVOICE_NEXT' as AddToInvoiceEnum,
        AddToInvoiceAll: 'ADD_TO_INVOICE_ALL' as AddToInvoiceEnum
    };
}


