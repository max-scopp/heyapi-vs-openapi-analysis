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
import { GenericData } from './genericData';


export interface ForwardingDisallowedInterestDeduction { 
    yearEndReport?: YearEndReport;
    /**
     * Group ID
     */
    groupId?: number;
    /**
     * Sub group ID
     */
    subGroupId?: number;
    /**
     * Associated posts
     */
    posts?: Array<GenericData>;
    /**
     * Income year
     */
    incomeYear?: number;
    /**
     * Carried forward from previous year
     */
    carriedForwardFromPreviousYear?: number;
    /**
     * Deductible this year
     */
    readonly deductibleThisYear?: number;
    /**
     * Remaining carried forward
     */
    readonly remainingCarriedForward?: number;
}

