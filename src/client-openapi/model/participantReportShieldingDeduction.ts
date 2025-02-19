/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface ParticipantReportShieldingDeduction { 
    /**
     * Unused shielding from previous year
     */
    readonly unusedShieldingFromPreviousYear?: number;
    /**
     * Correction for inheritance or gift in income year
     */
    readonly correctionForInheritanceOrGiftInIncomeYear?: number;
    /**
     * Transferred shielding deduction from previous years
     */
    readonly transferredShieldingDeductionFromPreviousYears?: number;
    /**
     * Corrected unused shielding from previous years
     */
    readonly correctedUnusedShieldingFromPreviousYears?: number;
    /**
     * Current year shielding deduction
     */
    readonly currentYearShieldingDeduction?: number;
    /**
     * Transferred shielding deduction
     */
    readonly transferredShieldingDeduction?: number;
    /**
     * Other correction
     */
    readonly otherCorrection?: number;
    /**
     * Total shielding for application and continuation
     */
    readonly totalShieldingForApplicationAndContinuation?: number;
    /**
     * Offset against distribution
     */
    readonly offsetAgainstDistribution?: number;
    /**
     * Offset against realization gain
     */
    readonly offsetAgainstRealizationGain?: number;
    /**
     * Continuation of unused shielding deduction to next year
     */
    readonly continuationOfUnusedShieldingDeductionToNextYear?: number;
}

