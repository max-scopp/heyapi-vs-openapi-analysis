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
import { VatReturns2022 } from './vatReturns2022';


export interface VatReturnsPaymentInfo { 
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    vatReturns?: VatReturns2022;
    /**
     * The KID number from Skatteetaten
     */
    kid?: string;
    /**
     * The bank account number of Skatteetaten
     */
    account?: string;
    /**
     * Amount to pay or receive
     */
    amount?: number;
    dueDate?: string;
}

