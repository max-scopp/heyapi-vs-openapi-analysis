/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface InvoiceSummaryDTO { 
    readonly moreThan30DaysOverdueSum?: number;
    readonly lessThan30DaysOverdueSum?: number;
    readonly notOverdueSum?: number;
    readonly outstandingOrdersSum?: number;
    readonly showInvoiceAction?: boolean;
    readonly lastUpdated?: string;
    readonly widgetDisabled?: boolean;
}

