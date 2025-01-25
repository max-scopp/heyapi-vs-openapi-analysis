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


export interface InterestLimitationCalculationOfInterestDeductionLimit { 
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
     * This year result from tax return
     */
    thisYearsResultFromTaxReturn?: number;
    /**
     * Given group contribution
     */
    givenGroupContribution?: number;
    /**
     * Additions for tax depreciation from fixed assets
     */
    additionsForTaxDepreciationFromFixedAssets?: number;
    /**
     * Direct compensation for depreciated assets
     */
    directCompensationForDepreciatedAsset?: number;
    /**
     * Amortized lease cost
     */
    amortizedLeaseCost?: number;
    /**
     * Deduction for group contributions not included in calculation basis
     */
    deductionForGroupContributionsNotIncludedInCalculationBasis?: number;
    /**
     * Basis for calculation of interest deduction limit
     */
    readonly basisForCalculationOfInterestDeductionLimit?: number;
    /**
     * Net interest costs
     */
    readonly netInterestCosts?: number;
}

