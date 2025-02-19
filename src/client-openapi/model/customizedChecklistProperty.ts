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


export interface CustomizedChecklistProperty { 
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    year?: number;
    checklistType?: CustomizedChecklistProperty.ChecklistTypeEnum;
    name?: string;
}
export namespace CustomizedChecklistProperty {
    export type ChecklistTypeEnum = 'TANGIBLE_FIXED_ASSETS' | 'PROFIT_AND_LOSS' | 'INVENTORIES' | 'CUSTOMER_RECEIVABLES' | 'SALARY_AND_PENSION' | 'COMMERCIAL_VEHICLE' | 'ACCOMMODATION_AND_RESTAURANT' | 'RESEARCH_AND_DEVELOPMENT' | 'RESULT_BALANCE' | 'PERSONAL_INCOME' | 'PERMANENT_DIFFERENCES' | 'TEMPORARY_DIFFERENCES' | 'TAXABLE_RESULT' | 'GROUP_CONTRIBUTION' | 'DIVIDEND' | 'DISPOSITIONS' | 'RECONCILIATION_OF_EQUITY' | 'PROPERTY' | 'ASSET_PAPIR' | 'PARTICIPANTS_IN_COMPANY_WITH_PARICIPANT_SETTING' | 'CONTROLLED_TRANSACTIONS_AND_INBETWEEN' | 'LIMITATION_OF_DEDUCTION' | 'EXCEPTION_FOR_INTEREST_REDUCTION' | 'COMPANY_TAX_RETURN' | 'PARTICIPANTS_TASK' | 'COOPERATIVE_ENTERPRISE' | 'OTHER_CIRCUMSTANCES' | 'TIMBER_ACCOUNT' | 'TAX_RETURN' | 'TAX_RETURN_TAX_CALCULATION' | 'CONTROL_TAX_RETURN' | 'SUBMIT' | 'GENERAL_INFO' | 'RESULT_BALANCE_ANNUAL_ACCOUNT' | 'NOTES' | 'CONTROL_ANNUAL_ACCOUNT' | 'ANNUAL_ACCOUNT_SUBMITTED' | 'NOTES_INTERNAL' | 'ABOUT_BUSINESS' | 'PREPARATION' | 'SETTLEMENTS_ITEMS' | 'WHAT_TO_REPORT' | 'PARTICIPANT';
    export const ChecklistTypeEnum = {
        TangibleFixedAssets: 'TANGIBLE_FIXED_ASSETS' as ChecklistTypeEnum,
        ProfitAndLoss: 'PROFIT_AND_LOSS' as ChecklistTypeEnum,
        Inventories: 'INVENTORIES' as ChecklistTypeEnum,
        CustomerReceivables: 'CUSTOMER_RECEIVABLES' as ChecklistTypeEnum,
        SalaryAndPension: 'SALARY_AND_PENSION' as ChecklistTypeEnum,
        CommercialVehicle: 'COMMERCIAL_VEHICLE' as ChecklistTypeEnum,
        AccommodationAndRestaurant: 'ACCOMMODATION_AND_RESTAURANT' as ChecklistTypeEnum,
        ResearchAndDevelopment: 'RESEARCH_AND_DEVELOPMENT' as ChecklistTypeEnum,
        ResultBalance: 'RESULT_BALANCE' as ChecklistTypeEnum,
        PersonalIncome: 'PERSONAL_INCOME' as ChecklistTypeEnum,
        PermanentDifferences: 'PERMANENT_DIFFERENCES' as ChecklistTypeEnum,
        TemporaryDifferences: 'TEMPORARY_DIFFERENCES' as ChecklistTypeEnum,
        TaxableResult: 'TAXABLE_RESULT' as ChecklistTypeEnum,
        GroupContribution: 'GROUP_CONTRIBUTION' as ChecklistTypeEnum,
        Dividend: 'DIVIDEND' as ChecklistTypeEnum,
        Dispositions: 'DISPOSITIONS' as ChecklistTypeEnum,
        ReconciliationOfEquity: 'RECONCILIATION_OF_EQUITY' as ChecklistTypeEnum,
        Property: 'PROPERTY' as ChecklistTypeEnum,
        AssetPapir: 'ASSET_PAPIR' as ChecklistTypeEnum,
        ParticipantsInCompanyWithParicipantSetting: 'PARTICIPANTS_IN_COMPANY_WITH_PARICIPANT_SETTING' as ChecklistTypeEnum,
        ControlledTransactionsAndInbetween: 'CONTROLLED_TRANSACTIONS_AND_INBETWEEN' as ChecklistTypeEnum,
        LimitationOfDeduction: 'LIMITATION_OF_DEDUCTION' as ChecklistTypeEnum,
        ExceptionForInterestReduction: 'EXCEPTION_FOR_INTEREST_REDUCTION' as ChecklistTypeEnum,
        CompanyTaxReturn: 'COMPANY_TAX_RETURN' as ChecklistTypeEnum,
        ParticipantsTask: 'PARTICIPANTS_TASK' as ChecklistTypeEnum,
        CooperativeEnterprise: 'COOPERATIVE_ENTERPRISE' as ChecklistTypeEnum,
        OtherCircumstances: 'OTHER_CIRCUMSTANCES' as ChecklistTypeEnum,
        TimberAccount: 'TIMBER_ACCOUNT' as ChecklistTypeEnum,
        TaxReturn: 'TAX_RETURN' as ChecklistTypeEnum,
        TaxReturnTaxCalculation: 'TAX_RETURN_TAX_CALCULATION' as ChecklistTypeEnum,
        ControlTaxReturn: 'CONTROL_TAX_RETURN' as ChecklistTypeEnum,
        Submit: 'SUBMIT' as ChecklistTypeEnum,
        GeneralInfo: 'GENERAL_INFO' as ChecklistTypeEnum,
        ResultBalanceAnnualAccount: 'RESULT_BALANCE_ANNUAL_ACCOUNT' as ChecklistTypeEnum,
        Notes: 'NOTES' as ChecklistTypeEnum,
        ControlAnnualAccount: 'CONTROL_ANNUAL_ACCOUNT' as ChecklistTypeEnum,
        AnnualAccountSubmitted: 'ANNUAL_ACCOUNT_SUBMITTED' as ChecklistTypeEnum,
        NotesInternal: 'NOTES_INTERNAL' as ChecklistTypeEnum,
        AboutBusiness: 'ABOUT_BUSINESS' as ChecklistTypeEnum,
        Preparation: 'PREPARATION' as ChecklistTypeEnum,
        SettlementsItems: 'SETTLEMENTS_ITEMS' as ChecklistTypeEnum,
        WhatToReport: 'WHAT_TO_REPORT' as ChecklistTypeEnum,
        Participant: 'PARTICIPANT' as ChecklistTypeEnum
    };
}


