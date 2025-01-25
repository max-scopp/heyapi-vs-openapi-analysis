/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { InvoiceReminder } from './invoiceReminder';
import { InvoiceMessage } from './invoiceMessage';
import { InvoiceStatus } from './invoiceStatus';


export interface InvoiceSummary { 
    readonly id?: number;
    readonly invoiceId?: number;
    readonly documentId?: number;
    readonly description?: string;
    readonly invoiceNumber?: number;
    readonly invoiceDetailsUrl?: string;
    readonly invoiceViewUrl?: string;
    readonly customerId?: number;
    readonly customer?: string;
    readonly customerAccountNumber?: number;
    readonly customerDetailsUrl?: string;
    readonly projectReferenceNumber?: string;
    readonly invoiceDate?: string;
    readonly dueDate?: string;
    readonly currency?: string;
    readonly amountExVat?: number;
    readonly amountInclVat?: number;
    readonly amountCurrency?: number;
    readonly paidAmount?: number;
    readonly remainingAmount?: number;
    invoiceStatus?: InvoiceStatus;
    readonly pepppolSendStatus?: number;
    readonly messages?: Array<InvoiceMessage>;
    readonly reminders?: Array<InvoiceReminder>;
    readonly projectDetailsUrl?: string;
    readonly amountOutstanding?: number;
    readonly currencyId?: number;
}

