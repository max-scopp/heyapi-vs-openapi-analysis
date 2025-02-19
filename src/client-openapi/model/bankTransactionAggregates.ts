/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { CompanyTransactionAggregates } from './companyTransactionAggregates';


export interface BankTransactionAggregates { 
    /**
     * Total incoming amount on given transactions.
     */
    readonly totalIncomingAmount?: number;
    /**
     * Total outgoing amount on given transactions.
     */
    readonly totalOutgoingAmount?: number;
    /**
     * top customers and respective earnings
     */
    readonly topCustomers?: Array<CompanyTransactionAggregates>;
    /**
     * top suppliers and respective payments
     */
    readonly topSuppliers?: Array<CompanyTransactionAggregates>;
}

