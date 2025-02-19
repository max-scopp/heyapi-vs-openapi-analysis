/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { TodoListItemStatus } from './todoListItemStatus';


export interface TodoListSingleChanges { 
    type: TodoListSingleChanges.TypeEnum;
    customerId: number;
    /**
     * The start period
     */
    periodStart: string;
    /**
     * The original date
     */
    originalDate: string;
    /**
     * The customized date
     */
    customDate?: string;
    originalAccountManagerId?: number;
    customAccountManagerId?: number;
    originalStatus?: TodoListItemStatus;
    customStatus?: TodoListItemStatus;
}
export namespace TodoListSingleChanges {
    export type TypeEnum = 'CUSTOM' | 'HARMONIZATION' | 'VAT_RETURNS' | 'AMELDING' | 'WAGE_TRANSACTIONS' | 'PERIOD_OVERVIEW' | 'ANNUAL_ACCOUNTS';
    export const TypeEnum = {
        Custom: 'CUSTOM' as TypeEnum,
        Harmonization: 'HARMONIZATION' as TypeEnum,
        VatReturns: 'VAT_RETURNS' as TypeEnum,
        Amelding: 'AMELDING' as TypeEnum,
        WageTransactions: 'WAGE_TRANSACTIONS' as TypeEnum,
        PeriodOverview: 'PERIOD_OVERVIEW' as TypeEnum,
        AnnualAccounts: 'ANNUAL_ACCOUNTS' as TypeEnum
    };
}


