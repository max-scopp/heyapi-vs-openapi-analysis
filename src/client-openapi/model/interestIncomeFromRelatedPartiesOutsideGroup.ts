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
import { InterestIncomeFromRelatedPartyOutsideGroup } from './interestIncomeFromRelatedPartyOutsideGroup';
import { GenericData } from './genericData';


export interface InterestIncomeFromRelatedPartiesOutsideGroup { 
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
     * Interest income from companies in the same group
     */
    interestIncomeFromCompanies?: Array<InterestIncomeFromRelatedPartyOutsideGroup>;
    /**
     * Total interest income
     */
    readonly totalInterestIncome?: number;
    /**
     * Loss for holder on realization of premium discount bonds
     */
    lossForHolderOnRealizationOfPremiumDiscountBonds?: number;
    /**
     * Gain for holder upon realization of premium discount bonds
     */
    gainForHolderUponRealizationOfPremiumDiscountBonds?: number;
    /**
     * Loss for holder on realization of composite volume debt instruments
     */
    lossForHolderOnRealizationOfCompositeVolumeDebtInstruments?: number;
    /**
     * Gain for holder on realization of composite volume debt instruments
     */
    gainForHolderOnRealizationOfCompositeVolumeDebtInstruments?: number;
    /**
     * Total interest income etc
     */
    readonly totalInterestIncomeEtc?: number;
    /**
     * Net interest expenses to companies
     */
    readonly netInterestExpensesToCompanies?: number;
}

