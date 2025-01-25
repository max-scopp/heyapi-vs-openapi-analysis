/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Account } from './account';
import { Change } from './change';


export interface SalaryType { 
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    number?: string;
    name?: string;
    description?: string;
    readonly showInTimesheet?: boolean;
    readonly isSickPayable?: boolean;
    readonly isVacationPayable?: boolean;
    readonly isTaxable?: boolean;
    readonly payStatementCodeCode?: string;
    readonly ameldingWageCode?: string;
    accountNumberDebit?: Account;
    accountNumberCredit?: Account;
    readonly isPayrollTaxable?: boolean;
}

