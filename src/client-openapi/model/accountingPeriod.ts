/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Change } from './change';


export interface AccountingPeriod { 
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    readonly name?: string;
    readonly number?: number;
    readonly start?: string;
    readonly end?: string;
    readonly isClosed?: boolean;
    readonly checkLedgerLogEmployeeName?: string;
    readonly checkLedgerLogEmployeePictureId?: number;
    readonly checkLedgerLogTime?: string;
}

