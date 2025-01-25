/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface CompanyBuilder { 
    number?: number;
    name?: string;
    description?: string;
    companyId?: number;
    accountManagerId?: number;
    inactive?: boolean;
    invoiceDefaultDueIn?: number;
    projectTypeOfContract?: number;
    invoiceEmail?: string;
    invoiceSendSMSNotification?: boolean;
    invoiceSMSNotificationNumber?: string;
    salaryStartDate?: string;
    currencyId?: number;
    startDate?: string;
    municipalityId?: number;
    customerType?: number;
    merchant?: boolean;
}

