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


export interface SalaryV2Voucher { 
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    date: string;
    /**
     * System generated number that cannot be changed.
     */
    readonly number?: number;
    reverseVoucher?: SalaryV2Voucher;
    numberAsString?: string;
    urlDetails?: string;
    deletable?: boolean;
    reversible?: boolean;
    notDeletableMessage?: string;
    description?: string;
    attachmentId?: number;
}

