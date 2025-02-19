/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { YearEndReport } from './yearEndReport';


export interface TemporaryDifferences { 
    yearEndReport?: YearEndReport;
    readonly name?: string;
    readonly grouping?: string;
    readonly objectIdentifier?: string;
    readonly negate?: boolean;
    readonly readOnly?: boolean;
    readonly source?: string;
    readonly type?: string;
    readonly openingBalanceAccountValue?: number;
    readonly openingBalanceTaxValue?: number;
    readonly openingBalanceDifferences?: number;
    readonly closingBalanceAccountValue?: number;
    readonly closingBalanceTaxValue?: number;
    readonly closingBalanceDifferences?: number;
    readonly changes?: number;
    readonly showAccounting?: boolean;
    readonly showTax?: boolean;
    readonly profitTransferedToProfitAndLossAccount?: number;
    readonly lossTransferedToProfitAndLossAccount?: number;
}

