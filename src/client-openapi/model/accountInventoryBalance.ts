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
import { YearEndReport } from './yearEndReport';
import { Department } from './department';


export interface AccountInventoryBalance { 
    /**
     * Year
     */
    year?: number;
    yearEndReport?: YearEndReport;
    /**
     * Group id
     */
    groupId?: number;
    /**
     * Sub group id
     */
    subGroupId?: number;
    account: Account;
    department: Department;
    /**
     * incoming quantity balance
     */
    balanceInQuantity?: number;
    /**
     * incoming balance
     */
    balanceIn?: number;
    /**
     * quantity balance change
     */
    readonly balanceChangeQuantity?: number;
    /**
     * unit rate
     */
    unitRate?: number;
    /**
     * outgoing quantity balance
     */
    balanceOutQuantity?: number;
    /**
     * outgoing balance
     */
    balanceOut?: number;
    /**
     * balance change
     */
    readonly balanceChange?: number;
    /**
     * modified unit rate
     */
    modifiedUnitRate?: number;
    /**
     * modified balance out quantity
     */
    modifiedBalanceOutQuantity?: number;
    /**
     * modified balance out
     */
    modifiedBalanceOut?: number;
}

