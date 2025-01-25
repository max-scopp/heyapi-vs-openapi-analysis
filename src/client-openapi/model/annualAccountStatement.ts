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
import { Posting } from './posting';


export interface AnnualAccountStatement { 
    account?: Account;
    readonly year?: number;
    readonly postings?: Array<Posting>;
    /**
     * Balance in
     */
    readonly balanceIn?: number;
    /**
     * Balance change
     */
    readonly balanceChange?: number;
    /**
     * Balance out
     */
    readonly balanceOut?: number;
}

