/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { YearEndReportNote } from './yearEndReportNote';


export interface FinacialInstrumentAsset { 
    note?: YearEndReportNote;
    readonly notePostType?: FinacialInstrumentAsset.NotePostTypeEnum;
    readonly noteGroupType?: FinacialInstrumentAsset.NoteGroupTypeEnum;
    readonly noteSubTypeGroupId?: number;
    readonly asset?: number;
    readonly realValue?: number;
    readonly valueAdjustment?: number;
}
export namespace FinacialInstrumentAsset {
    export type NotePostTypeEnum = 'ID_FOR_NOTE' | 'IS_CHECKED' | 'UPDATED_BY' | 'UPDATED_DATE' | 'ACCOUNTS' | 'ACCOUNTING_PRINCIPLES_FREE_TEXT' | 'ACCOUNTING_PRINCIPLES_USE_DEFAULT_TEXT' | 'STILL_IN_BUSINESS' | 'STILL_IN_BUSINESS_INFO' | 'NUMBER_OF_MAN_YEARS' | 'OPENING_BALANCE_SALARY' | 'CLOSING_BALANCE_SALARY' | 'OPENING_BALANCE_NATIONAL_INSURANCE_CONTRIBUTIONS' | 'CLOSING_BALANCE_NATIONAL_INSURANCE_CONTRIBUTIONS' | 'OPENING_BALANCE_PENSION_COST' | 'CLOSING_BALANCE_PENSION_COST' | 'OPENING_BALANCE_OTHER_BENEFITS' | 'CLOSING_BALANCE_OTHER_BENEFITS' | 'ABOUT_MAN_YEARS_AND_SALARY' | 'EXTRAORDINARY_INCOME_AND_COST' | 'EXTRAORDINARY_INCOME_AND_COST_DESCRIPTION' | 'EXTRAORDINARY_INCOME_AND_COST_AMOUNT' | 'EXTRAORDINARY_INCOME_AND_COST_ADDITIONAL_INFORMATION' | 'FIXED_ASSETS_OPENING_ACQUISITION_COST_TANGIBLE_FIXED_ASSETS' | 'FIXED_ASSETS_OPENING_ACQUISITION_COST_INTANGIBLE_ASSETS' | 'FIXED_ASSETS_INFLOW_IN_THE_YEAR_TANGIBLE_FIXED_ASSETS' | 'FIXED_ASSETS_INFLOW_IN_THE_YEAR_INTANGIBLE_ASSETS' | 'FIXED_ASSETS_DISPOSAL_IN_THE_YEAR_TANGIBLE_FIXED_ASSETS' | 'FIXED_ASSETS_DISPOSAL_IN_THE_YEAR_INTANGIBLE_ASSETS' | 'FIXED_ASSETS_CLOSING_ACQUISITION_COST' | 'FIXED_ASSETS_TOTAL_DEPRECIATIONS_TANGIBLE_FIXED_ASSETS' | 'FIXED_ASSETS_TOTAL_DEPRECIATIONS_INTANGIBLE_ASSETS' | 'FIXED_ASSETS_CLOSING_CAPITALISED_VALUE' | 'FIXED_ASSETS_DEPRECIATIONS_TANGIBLE_FIXED_ASSETS' | 'FIXED_ASSETS_DEPRECIATIONS_INTANGIBLE_ASSETS' | 'FIXED_ASSETS_ECONOMIC_LIFE' | 'FIXED_ASSETS_DEPRECIATION_SCHEDULE_INTANGIBLE_ASSETS' | 'FIXED_ASSETS_ACQUISITION_COST' | 'FIXED_ASSETS_GOODWILL' | 'FIXED_ASSETS_DEPRECIATION_SCHEDULE' | 'FIXED_ASSETS_ADDITIONAL_INFORMATION' | 'GROUP' | 'GROUP_INVESTMENTS' | 'GROUP_OPENING_BALANCE' | 'GROUP_REVENUE_RECOGNIZED_AS_INCOME' | 'GROUP_OTHER_CHANGES' | 'GROUP_CLOSING_BALANCE' | 'GROUP_ADDED_VALUE' | 'GROUP_DEPRECIATION_OF_ADDED_VALUES' | 'GROUP_GOODWILL' | 'GROUP_DEPRECIATION_OF_GOODWILL' | 'GROUP_TOTAL_ACQUISITION_COST' | 'GROUP_TOTAL_CAPITALIZED_EQUITY' | 'GROUP_IS_SUBSIDIARY' | 'GROUP_NAME_OF_PARENT_COMPANY' | 'GROUP_BUSINESS_OFFICE_PARENT_COMPANY' | 'GROUP_EXCLUDED_FROM_CONSOLIDATION' | 'GROUP_EXCLUDED_FROM_CONSOLIDATION_JUSTIFICATION' | 'GROUP_TRANSACTIONS_WITH_SUBSIDIARIES' | 'GROUP_INTERNAL_GAIN_TRANSACTIONS' | 'GROUP_RECEIVABLES_AND_LIABILITIES' | 'OPENING_BALANCE_RECEIVABLES_TOTAL_AMOUNT_CORPORATE' | 'CLOSING_BALANCE_RECEIVABLES_TOTAL_AMOUNT_CORPORATE' | 'OPENING_BALANCE_RECEIVABLES_TOTAL_AMOUNT_COMPANY' | 'CLOSING_BALANCE_RECEIVABLES_TOTAL_AMOUNT_COMPANY' | 'OPENING_BALANCE_RECEIVABLES_TOTAL_AMOUNT_CONTROLLED_COMPANY' | 'CLOSING_BALANCE_RECEIVABLES_TOTAL_AMOUNT_CONTROLLED_COMPANY' | 'OPENING_BALANCE_LONG_TERM_TOTAL_AMOUNT_CORPORATE' | 'CLOSING_BALANCE_LONG_TERM_TOTAL_AMOUNT_CORPORATE' | 'OPENING_BALANCE_LONG_TERM_TOTAL_AMOUNT_COMPANY' | 'CLOSING_BALANCE_LONG_TERM_TOTAL_AMOUNT_COMPANY' | 'OPENING_BALANCE_LONG_TERM_TOTAL_AMOUNT_CONTROLLED_COMPANY' | 'CLOSING_BALANCE_LONG_TERM_TOTAL_AMOUNT_CONTROLLED_COMPANY' | 'OPENING_BALANCE_SHORT_TERM_TOTAL_AMOUNT_CORPORATE' | 'CLOSING_BALANCE_SHORT_TERM_TOTAL_AMOUNT_CORPORATE' | 'OPENING_BALANCE_SHORT_TERM_TOTAL_AMOUNT_COMPANY' | 'CLOSING_BALANCE_SHORT_TERM_TOTAL_AMOUNT_COMPANY' | 'OPENING_BALANCE_SHORT_TERM_TOTAL_AMOUNT_CONTROLLED_COMPANY' | 'CLOSING_BALANCE_SHORT_TERM_TOTAL_AMOUNT_CONTROLLED_COMPANY' | 'OPENING_BALANCE_MORTGAGED_ASSETS' | 'OPENING_BALANCE_OTHER_COLLATERAL' | 'OPENING_BALANCE_GUANRANTEES' | 'GROUP_RECEIVABLES_AND_LIABILITIES_ADDITIONAL_INFO' | 'RECEIVABLES_FALL_DUE_LATER_THAN_ONE_YEAR' | 'RECEIVABLES_ADDITIONAL_INFORMATION' | 'ACTUAL_VALUE_FINACIAL_INSTRUMENTS' | 'ACTUAL_VALUE_FINACIAL_INSTRUMENTS_ASSET' | 'ACTUAL_VALUE_FINACIAL_INSTRUMENTS_REAL_VALUE' | 'ACTUAL_VALUE_FINACIAL_INSTRUMENTS_VALUE_ADJUSTMENT' | 'ACTUAL_VALUE_FINACIAL_INSTRUMENTS_ADDITIONAL_INFORMATION' | 'ACTUAL_VALUE_FINACIAL_INSTRUMENTS_DESCRIPTION' | 'HOLDING_OWN_SHARES' | 'HOLDING_OWN_SHARES_NUMBER_OF_SHARES' | 'HOLDING_OWN_SHARES_NOMINAL_VALUE_OF_SHARES' | 'HOLDING_OWN_SHARES_PART_OF_SHARE_CAPITAL' | 'OWN_SHARES_ACQUISITIONS_NUMBER_OF_SHARES_ACQUIRED' | 'PARENT_COMPANY_SHARES_ACQUISITIONS_NUMBER_OF_SHARES_ACQUIRED' | 'OWN_SHARES_ACQUISITIONS_REMUNERATION' | 'PARENT_COMPANY_SHARES_ACQUISITIONS_REMUNERATION' | 'OWN_SHARES_ACQUISITIONS_PART_OF_SHARE_CAPITAL' | 'PARENT_COMPANY_SHARES_ACQUISITIONS_PART_OF_SHARE_CAPITAL' | 'OWN_SHARES_ACQUISITIONS_BACKGROUND_ACQUISITIONS' | 'PARENT_COMPANY_SHARES_ACQUISITIONS_BACKGROUND_ACQUISITIONS' | 'OWN_SHARES_DISPOSAL_NUMBER_OF_SHARES_ACQUIRED' | 'PARENT_COMPANY_SHARES_DISPOSAL_NUMBER_OF_SHARES_ACQUIRED' | 'OWN_SHARES_DISPOSAL_REMUNERATION' | 'PARENT_COMPANY_SHARES_DISPOSAL_REMUNERATION' | 'OWN_SHARES_DISPOSAL_PART_OF_SHARE_CAPITAL' | 'PARENT_COMPANY_SHARES_DISPOSAL_PART_OF_SHARE_CAPITAL' | 'HOLDING_OWN_SHARES_THIS_YEARS_PAYOUT' | 'HOLDING_OWN_SHARES_PROVISION_FOR_THE_YEAR' | 'HOLDING_OWN_SHARES_PROVISIONS' | 'HOLDING_OWN_SHARES_ADDITIONAL_INFORMATION' | 'DEBT_DUE_FOR_PAYMENT' | 'DEBT_SECURED_BY_MORTGAGE' | 'DEBT_CAPITALISED_VALUE' | 'DEBT_TOTAL_NON_RECOGNIZED_WARRANTY_OBLIGATIONS' | 'DEBT_WARRANTY_OBLIGATIONS' | 'DEBT_ADDITIONAL_INFORMATION' | 'LOAN_AND_PROVISION_OF_SECURITY_IS_GRANTED' | 'LOAN_AND_PROVISION_OF_SECURITY_TOTAL_LOAN_BOARD_MEMBERS' | 'LOAN_AND_PROVISION_OF_SECURITY_TOTAL_LOAN_MEMBERS_OF_OTHER_BODIES' | 'LOAN_AND_PROVISION_OF_SECURITY_PROVISION_OF_COLLATERAL_BOARD_MEMBERS' | 'LOAN_AND_PROVISION_OF_SECURITY_PROVISION_OF_COLLATERAL_MEMBERS_OF_OTHER_BODIES' | 'LOAN_AND_PROVISION_OF_SECURITY_INTEREST_RATE_BOARD_MEMBERS' | 'LOAN_AND_PROVISION_OF_SECURITY_INTEREST_RATE_MEMBERS_OF_OTHER_BODIES' | 'LOAN_AND_PROVISION_OF_SECURITY_MAIN_TERMS_BOARD_MEMBERS' | 'LOAN_AND_PROVISION_OF_SECURITY_MAIN_TERMS_MEMBERS_OF_OTHER_BODIES' | 'LOAN_AND_PROVISION_OF_SECURITY_REIMBURSED_AMOUNT_BOARD_MEMBERS' | 'LOAN_AND_PROVISION_OF_SECURITY_REIMBURSED_AMOUNT_MEMBERS_OF_OTHER_BODIES' | 'LOAN_AND_PROVISION_OF_SECURITY_DEDUCTED_AMOUNT_BOARD_MEMBERS' | 'LOAN_AND_PROVISION_OF_SECURITY_DEDUCTED_AMOUNT_MEMBERS_OF_OTHER_BODIES' | 'LOAN_AND_PROVISION_OF_SECURITY_WAIVED_AMOUNTS_BOARD_MEMBERS' | 'LOAN_AND_PROVISION_OF_SECURITY_WAIVED_AMOUNTS_MEMBERS_OF_OTHER_BODIES' | 'LOAN_AND_PROVISION_OF_SECURITY_ADDITIONAL_INFORMATION' | 'FREE_NOTE_FREE_TEXT' | 'CUSTOM_GROUPING';
    export const NotePostTypeEnum = {
        IdForNote: 'ID_FOR_NOTE' as NotePostTypeEnum,
        IsChecked: 'IS_CHECKED' as NotePostTypeEnum,
        UpdatedBy: 'UPDATED_BY' as NotePostTypeEnum,
        UpdatedDate: 'UPDATED_DATE' as NotePostTypeEnum,
        Accounts: 'ACCOUNTS' as NotePostTypeEnum,
        AccountingPrinciplesFreeText: 'ACCOUNTING_PRINCIPLES_FREE_TEXT' as NotePostTypeEnum,
        AccountingPrinciplesUseDefaultText: 'ACCOUNTING_PRINCIPLES_USE_DEFAULT_TEXT' as NotePostTypeEnum,
        StillInBusiness: 'STILL_IN_BUSINESS' as NotePostTypeEnum,
        StillInBusinessInfo: 'STILL_IN_BUSINESS_INFO' as NotePostTypeEnum,
        NumberOfManYears: 'NUMBER_OF_MAN_YEARS' as NotePostTypeEnum,
        OpeningBalanceSalary: 'OPENING_BALANCE_SALARY' as NotePostTypeEnum,
        ClosingBalanceSalary: 'CLOSING_BALANCE_SALARY' as NotePostTypeEnum,
        OpeningBalanceNationalInsuranceContributions: 'OPENING_BALANCE_NATIONAL_INSURANCE_CONTRIBUTIONS' as NotePostTypeEnum,
        ClosingBalanceNationalInsuranceContributions: 'CLOSING_BALANCE_NATIONAL_INSURANCE_CONTRIBUTIONS' as NotePostTypeEnum,
        OpeningBalancePensionCost: 'OPENING_BALANCE_PENSION_COST' as NotePostTypeEnum,
        ClosingBalancePensionCost: 'CLOSING_BALANCE_PENSION_COST' as NotePostTypeEnum,
        OpeningBalanceOtherBenefits: 'OPENING_BALANCE_OTHER_BENEFITS' as NotePostTypeEnum,
        ClosingBalanceOtherBenefits: 'CLOSING_BALANCE_OTHER_BENEFITS' as NotePostTypeEnum,
        AboutManYearsAndSalary: 'ABOUT_MAN_YEARS_AND_SALARY' as NotePostTypeEnum,
        ExtraordinaryIncomeAndCost: 'EXTRAORDINARY_INCOME_AND_COST' as NotePostTypeEnum,
        ExtraordinaryIncomeAndCostDescription: 'EXTRAORDINARY_INCOME_AND_COST_DESCRIPTION' as NotePostTypeEnum,
        ExtraordinaryIncomeAndCostAmount: 'EXTRAORDINARY_INCOME_AND_COST_AMOUNT' as NotePostTypeEnum,
        ExtraordinaryIncomeAndCostAdditionalInformation: 'EXTRAORDINARY_INCOME_AND_COST_ADDITIONAL_INFORMATION' as NotePostTypeEnum,
        FixedAssetsOpeningAcquisitionCostTangibleFixedAssets: 'FIXED_ASSETS_OPENING_ACQUISITION_COST_TANGIBLE_FIXED_ASSETS' as NotePostTypeEnum,
        FixedAssetsOpeningAcquisitionCostIntangibleAssets: 'FIXED_ASSETS_OPENING_ACQUISITION_COST_INTANGIBLE_ASSETS' as NotePostTypeEnum,
        FixedAssetsInflowInTheYearTangibleFixedAssets: 'FIXED_ASSETS_INFLOW_IN_THE_YEAR_TANGIBLE_FIXED_ASSETS' as NotePostTypeEnum,
        FixedAssetsInflowInTheYearIntangibleAssets: 'FIXED_ASSETS_INFLOW_IN_THE_YEAR_INTANGIBLE_ASSETS' as NotePostTypeEnum,
        FixedAssetsDisposalInTheYearTangibleFixedAssets: 'FIXED_ASSETS_DISPOSAL_IN_THE_YEAR_TANGIBLE_FIXED_ASSETS' as NotePostTypeEnum,
        FixedAssetsDisposalInTheYearIntangibleAssets: 'FIXED_ASSETS_DISPOSAL_IN_THE_YEAR_INTANGIBLE_ASSETS' as NotePostTypeEnum,
        FixedAssetsClosingAcquisitionCost: 'FIXED_ASSETS_CLOSING_ACQUISITION_COST' as NotePostTypeEnum,
        FixedAssetsTotalDepreciationsTangibleFixedAssets: 'FIXED_ASSETS_TOTAL_DEPRECIATIONS_TANGIBLE_FIXED_ASSETS' as NotePostTypeEnum,
        FixedAssetsTotalDepreciationsIntangibleAssets: 'FIXED_ASSETS_TOTAL_DEPRECIATIONS_INTANGIBLE_ASSETS' as NotePostTypeEnum,
        FixedAssetsClosingCapitalisedValue: 'FIXED_ASSETS_CLOSING_CAPITALISED_VALUE' as NotePostTypeEnum,
        FixedAssetsDepreciationsTangibleFixedAssets: 'FIXED_ASSETS_DEPRECIATIONS_TANGIBLE_FIXED_ASSETS' as NotePostTypeEnum,
        FixedAssetsDepreciationsIntangibleAssets: 'FIXED_ASSETS_DEPRECIATIONS_INTANGIBLE_ASSETS' as NotePostTypeEnum,
        FixedAssetsEconomicLife: 'FIXED_ASSETS_ECONOMIC_LIFE' as NotePostTypeEnum,
        FixedAssetsDepreciationScheduleIntangibleAssets: 'FIXED_ASSETS_DEPRECIATION_SCHEDULE_INTANGIBLE_ASSETS' as NotePostTypeEnum,
        FixedAssetsAcquisitionCost: 'FIXED_ASSETS_ACQUISITION_COST' as NotePostTypeEnum,
        FixedAssetsGoodwill: 'FIXED_ASSETS_GOODWILL' as NotePostTypeEnum,
        FixedAssetsDepreciationSchedule: 'FIXED_ASSETS_DEPRECIATION_SCHEDULE' as NotePostTypeEnum,
        FixedAssetsAdditionalInformation: 'FIXED_ASSETS_ADDITIONAL_INFORMATION' as NotePostTypeEnum,
        Group: 'GROUP' as NotePostTypeEnum,
        GroupInvestments: 'GROUP_INVESTMENTS' as NotePostTypeEnum,
        GroupOpeningBalance: 'GROUP_OPENING_BALANCE' as NotePostTypeEnum,
        GroupRevenueRecognizedAsIncome: 'GROUP_REVENUE_RECOGNIZED_AS_INCOME' as NotePostTypeEnum,
        GroupOtherChanges: 'GROUP_OTHER_CHANGES' as NotePostTypeEnum,
        GroupClosingBalance: 'GROUP_CLOSING_BALANCE' as NotePostTypeEnum,
        GroupAddedValue: 'GROUP_ADDED_VALUE' as NotePostTypeEnum,
        GroupDepreciationOfAddedValues: 'GROUP_DEPRECIATION_OF_ADDED_VALUES' as NotePostTypeEnum,
        GroupGoodwill: 'GROUP_GOODWILL' as NotePostTypeEnum,
        GroupDepreciationOfGoodwill: 'GROUP_DEPRECIATION_OF_GOODWILL' as NotePostTypeEnum,
        GroupTotalAcquisitionCost: 'GROUP_TOTAL_ACQUISITION_COST' as NotePostTypeEnum,
        GroupTotalCapitalizedEquity: 'GROUP_TOTAL_CAPITALIZED_EQUITY' as NotePostTypeEnum,
        GroupIsSubsidiary: 'GROUP_IS_SUBSIDIARY' as NotePostTypeEnum,
        GroupNameOfParentCompany: 'GROUP_NAME_OF_PARENT_COMPANY' as NotePostTypeEnum,
        GroupBusinessOfficeParentCompany: 'GROUP_BUSINESS_OFFICE_PARENT_COMPANY' as NotePostTypeEnum,
        GroupExcludedFromConsolidation: 'GROUP_EXCLUDED_FROM_CONSOLIDATION' as NotePostTypeEnum,
        GroupExcludedFromConsolidationJustification: 'GROUP_EXCLUDED_FROM_CONSOLIDATION_JUSTIFICATION' as NotePostTypeEnum,
        GroupTransactionsWithSubsidiaries: 'GROUP_TRANSACTIONS_WITH_SUBSIDIARIES' as NotePostTypeEnum,
        GroupInternalGainTransactions: 'GROUP_INTERNAL_GAIN_TRANSACTIONS' as NotePostTypeEnum,
        GroupReceivablesAndLiabilities: 'GROUP_RECEIVABLES_AND_LIABILITIES' as NotePostTypeEnum,
        OpeningBalanceReceivablesTotalAmountCorporate: 'OPENING_BALANCE_RECEIVABLES_TOTAL_AMOUNT_CORPORATE' as NotePostTypeEnum,
        ClosingBalanceReceivablesTotalAmountCorporate: 'CLOSING_BALANCE_RECEIVABLES_TOTAL_AMOUNT_CORPORATE' as NotePostTypeEnum,
        OpeningBalanceReceivablesTotalAmountCompany: 'OPENING_BALANCE_RECEIVABLES_TOTAL_AMOUNT_COMPANY' as NotePostTypeEnum,
        ClosingBalanceReceivablesTotalAmountCompany: 'CLOSING_BALANCE_RECEIVABLES_TOTAL_AMOUNT_COMPANY' as NotePostTypeEnum,
        OpeningBalanceReceivablesTotalAmountControlledCompany: 'OPENING_BALANCE_RECEIVABLES_TOTAL_AMOUNT_CONTROLLED_COMPANY' as NotePostTypeEnum,
        ClosingBalanceReceivablesTotalAmountControlledCompany: 'CLOSING_BALANCE_RECEIVABLES_TOTAL_AMOUNT_CONTROLLED_COMPANY' as NotePostTypeEnum,
        OpeningBalanceLongTermTotalAmountCorporate: 'OPENING_BALANCE_LONG_TERM_TOTAL_AMOUNT_CORPORATE' as NotePostTypeEnum,
        ClosingBalanceLongTermTotalAmountCorporate: 'CLOSING_BALANCE_LONG_TERM_TOTAL_AMOUNT_CORPORATE' as NotePostTypeEnum,
        OpeningBalanceLongTermTotalAmountCompany: 'OPENING_BALANCE_LONG_TERM_TOTAL_AMOUNT_COMPANY' as NotePostTypeEnum,
        ClosingBalanceLongTermTotalAmountCompany: 'CLOSING_BALANCE_LONG_TERM_TOTAL_AMOUNT_COMPANY' as NotePostTypeEnum,
        OpeningBalanceLongTermTotalAmountControlledCompany: 'OPENING_BALANCE_LONG_TERM_TOTAL_AMOUNT_CONTROLLED_COMPANY' as NotePostTypeEnum,
        ClosingBalanceLongTermTotalAmountControlledCompany: 'CLOSING_BALANCE_LONG_TERM_TOTAL_AMOUNT_CONTROLLED_COMPANY' as NotePostTypeEnum,
        OpeningBalanceShortTermTotalAmountCorporate: 'OPENING_BALANCE_SHORT_TERM_TOTAL_AMOUNT_CORPORATE' as NotePostTypeEnum,
        ClosingBalanceShortTermTotalAmountCorporate: 'CLOSING_BALANCE_SHORT_TERM_TOTAL_AMOUNT_CORPORATE' as NotePostTypeEnum,
        OpeningBalanceShortTermTotalAmountCompany: 'OPENING_BALANCE_SHORT_TERM_TOTAL_AMOUNT_COMPANY' as NotePostTypeEnum,
        ClosingBalanceShortTermTotalAmountCompany: 'CLOSING_BALANCE_SHORT_TERM_TOTAL_AMOUNT_COMPANY' as NotePostTypeEnum,
        OpeningBalanceShortTermTotalAmountControlledCompany: 'OPENING_BALANCE_SHORT_TERM_TOTAL_AMOUNT_CONTROLLED_COMPANY' as NotePostTypeEnum,
        ClosingBalanceShortTermTotalAmountControlledCompany: 'CLOSING_BALANCE_SHORT_TERM_TOTAL_AMOUNT_CONTROLLED_COMPANY' as NotePostTypeEnum,
        OpeningBalanceMortgagedAssets: 'OPENING_BALANCE_MORTGAGED_ASSETS' as NotePostTypeEnum,
        OpeningBalanceOtherCollateral: 'OPENING_BALANCE_OTHER_COLLATERAL' as NotePostTypeEnum,
        OpeningBalanceGuanrantees: 'OPENING_BALANCE_GUANRANTEES' as NotePostTypeEnum,
        GroupReceivablesAndLiabilitiesAdditionalInfo: 'GROUP_RECEIVABLES_AND_LIABILITIES_ADDITIONAL_INFO' as NotePostTypeEnum,
        ReceivablesFallDueLaterThanOneYear: 'RECEIVABLES_FALL_DUE_LATER_THAN_ONE_YEAR' as NotePostTypeEnum,
        ReceivablesAdditionalInformation: 'RECEIVABLES_ADDITIONAL_INFORMATION' as NotePostTypeEnum,
        ActualValueFinacialInstruments: 'ACTUAL_VALUE_FINACIAL_INSTRUMENTS' as NotePostTypeEnum,
        ActualValueFinacialInstrumentsAsset: 'ACTUAL_VALUE_FINACIAL_INSTRUMENTS_ASSET' as NotePostTypeEnum,
        ActualValueFinacialInstrumentsRealValue: 'ACTUAL_VALUE_FINACIAL_INSTRUMENTS_REAL_VALUE' as NotePostTypeEnum,
        ActualValueFinacialInstrumentsValueAdjustment: 'ACTUAL_VALUE_FINACIAL_INSTRUMENTS_VALUE_ADJUSTMENT' as NotePostTypeEnum,
        ActualValueFinacialInstrumentsAdditionalInformation: 'ACTUAL_VALUE_FINACIAL_INSTRUMENTS_ADDITIONAL_INFORMATION' as NotePostTypeEnum,
        ActualValueFinacialInstrumentsDescription: 'ACTUAL_VALUE_FINACIAL_INSTRUMENTS_DESCRIPTION' as NotePostTypeEnum,
        HoldingOwnShares: 'HOLDING_OWN_SHARES' as NotePostTypeEnum,
        HoldingOwnSharesNumberOfShares: 'HOLDING_OWN_SHARES_NUMBER_OF_SHARES' as NotePostTypeEnum,
        HoldingOwnSharesNominalValueOfShares: 'HOLDING_OWN_SHARES_NOMINAL_VALUE_OF_SHARES' as NotePostTypeEnum,
        HoldingOwnSharesPartOfShareCapital: 'HOLDING_OWN_SHARES_PART_OF_SHARE_CAPITAL' as NotePostTypeEnum,
        OwnSharesAcquisitionsNumberOfSharesAcquired: 'OWN_SHARES_ACQUISITIONS_NUMBER_OF_SHARES_ACQUIRED' as NotePostTypeEnum,
        ParentCompanySharesAcquisitionsNumberOfSharesAcquired: 'PARENT_COMPANY_SHARES_ACQUISITIONS_NUMBER_OF_SHARES_ACQUIRED' as NotePostTypeEnum,
        OwnSharesAcquisitionsRemuneration: 'OWN_SHARES_ACQUISITIONS_REMUNERATION' as NotePostTypeEnum,
        ParentCompanySharesAcquisitionsRemuneration: 'PARENT_COMPANY_SHARES_ACQUISITIONS_REMUNERATION' as NotePostTypeEnum,
        OwnSharesAcquisitionsPartOfShareCapital: 'OWN_SHARES_ACQUISITIONS_PART_OF_SHARE_CAPITAL' as NotePostTypeEnum,
        ParentCompanySharesAcquisitionsPartOfShareCapital: 'PARENT_COMPANY_SHARES_ACQUISITIONS_PART_OF_SHARE_CAPITAL' as NotePostTypeEnum,
        OwnSharesAcquisitionsBackgroundAcquisitions: 'OWN_SHARES_ACQUISITIONS_BACKGROUND_ACQUISITIONS' as NotePostTypeEnum,
        ParentCompanySharesAcquisitionsBackgroundAcquisitions: 'PARENT_COMPANY_SHARES_ACQUISITIONS_BACKGROUND_ACQUISITIONS' as NotePostTypeEnum,
        OwnSharesDisposalNumberOfSharesAcquired: 'OWN_SHARES_DISPOSAL_NUMBER_OF_SHARES_ACQUIRED' as NotePostTypeEnum,
        ParentCompanySharesDisposalNumberOfSharesAcquired: 'PARENT_COMPANY_SHARES_DISPOSAL_NUMBER_OF_SHARES_ACQUIRED' as NotePostTypeEnum,
        OwnSharesDisposalRemuneration: 'OWN_SHARES_DISPOSAL_REMUNERATION' as NotePostTypeEnum,
        ParentCompanySharesDisposalRemuneration: 'PARENT_COMPANY_SHARES_DISPOSAL_REMUNERATION' as NotePostTypeEnum,
        OwnSharesDisposalPartOfShareCapital: 'OWN_SHARES_DISPOSAL_PART_OF_SHARE_CAPITAL' as NotePostTypeEnum,
        ParentCompanySharesDisposalPartOfShareCapital: 'PARENT_COMPANY_SHARES_DISPOSAL_PART_OF_SHARE_CAPITAL' as NotePostTypeEnum,
        HoldingOwnSharesThisYearsPayout: 'HOLDING_OWN_SHARES_THIS_YEARS_PAYOUT' as NotePostTypeEnum,
        HoldingOwnSharesProvisionForTheYear: 'HOLDING_OWN_SHARES_PROVISION_FOR_THE_YEAR' as NotePostTypeEnum,
        HoldingOwnSharesProvisions: 'HOLDING_OWN_SHARES_PROVISIONS' as NotePostTypeEnum,
        HoldingOwnSharesAdditionalInformation: 'HOLDING_OWN_SHARES_ADDITIONAL_INFORMATION' as NotePostTypeEnum,
        DebtDueForPayment: 'DEBT_DUE_FOR_PAYMENT' as NotePostTypeEnum,
        DebtSecuredByMortgage: 'DEBT_SECURED_BY_MORTGAGE' as NotePostTypeEnum,
        DebtCapitalisedValue: 'DEBT_CAPITALISED_VALUE' as NotePostTypeEnum,
        DebtTotalNonRecognizedWarrantyObligations: 'DEBT_TOTAL_NON_RECOGNIZED_WARRANTY_OBLIGATIONS' as NotePostTypeEnum,
        DebtWarrantyObligations: 'DEBT_WARRANTY_OBLIGATIONS' as NotePostTypeEnum,
        DebtAdditionalInformation: 'DEBT_ADDITIONAL_INFORMATION' as NotePostTypeEnum,
        LoanAndProvisionOfSecurityIsGranted: 'LOAN_AND_PROVISION_OF_SECURITY_IS_GRANTED' as NotePostTypeEnum,
        LoanAndProvisionOfSecurityTotalLoanBoardMembers: 'LOAN_AND_PROVISION_OF_SECURITY_TOTAL_LOAN_BOARD_MEMBERS' as NotePostTypeEnum,
        LoanAndProvisionOfSecurityTotalLoanMembersOfOtherBodies: 'LOAN_AND_PROVISION_OF_SECURITY_TOTAL_LOAN_MEMBERS_OF_OTHER_BODIES' as NotePostTypeEnum,
        LoanAndProvisionOfSecurityProvisionOfCollateralBoardMembers: 'LOAN_AND_PROVISION_OF_SECURITY_PROVISION_OF_COLLATERAL_BOARD_MEMBERS' as NotePostTypeEnum,
        LoanAndProvisionOfSecurityProvisionOfCollateralMembersOfOtherBodies: 'LOAN_AND_PROVISION_OF_SECURITY_PROVISION_OF_COLLATERAL_MEMBERS_OF_OTHER_BODIES' as NotePostTypeEnum,
        LoanAndProvisionOfSecurityInterestRateBoardMembers: 'LOAN_AND_PROVISION_OF_SECURITY_INTEREST_RATE_BOARD_MEMBERS' as NotePostTypeEnum,
        LoanAndProvisionOfSecurityInterestRateMembersOfOtherBodies: 'LOAN_AND_PROVISION_OF_SECURITY_INTEREST_RATE_MEMBERS_OF_OTHER_BODIES' as NotePostTypeEnum,
        LoanAndProvisionOfSecurityMainTermsBoardMembers: 'LOAN_AND_PROVISION_OF_SECURITY_MAIN_TERMS_BOARD_MEMBERS' as NotePostTypeEnum,
        LoanAndProvisionOfSecurityMainTermsMembersOfOtherBodies: 'LOAN_AND_PROVISION_OF_SECURITY_MAIN_TERMS_MEMBERS_OF_OTHER_BODIES' as NotePostTypeEnum,
        LoanAndProvisionOfSecurityReimbursedAmountBoardMembers: 'LOAN_AND_PROVISION_OF_SECURITY_REIMBURSED_AMOUNT_BOARD_MEMBERS' as NotePostTypeEnum,
        LoanAndProvisionOfSecurityReimbursedAmountMembersOfOtherBodies: 'LOAN_AND_PROVISION_OF_SECURITY_REIMBURSED_AMOUNT_MEMBERS_OF_OTHER_BODIES' as NotePostTypeEnum,
        LoanAndProvisionOfSecurityDeductedAmountBoardMembers: 'LOAN_AND_PROVISION_OF_SECURITY_DEDUCTED_AMOUNT_BOARD_MEMBERS' as NotePostTypeEnum,
        LoanAndProvisionOfSecurityDeductedAmountMembersOfOtherBodies: 'LOAN_AND_PROVISION_OF_SECURITY_DEDUCTED_AMOUNT_MEMBERS_OF_OTHER_BODIES' as NotePostTypeEnum,
        LoanAndProvisionOfSecurityWaivedAmountsBoardMembers: 'LOAN_AND_PROVISION_OF_SECURITY_WAIVED_AMOUNTS_BOARD_MEMBERS' as NotePostTypeEnum,
        LoanAndProvisionOfSecurityWaivedAmountsMembersOfOtherBodies: 'LOAN_AND_PROVISION_OF_SECURITY_WAIVED_AMOUNTS_MEMBERS_OF_OTHER_BODIES' as NotePostTypeEnum,
        LoanAndProvisionOfSecurityAdditionalInformation: 'LOAN_AND_PROVISION_OF_SECURITY_ADDITIONAL_INFORMATION' as NotePostTypeEnum,
        FreeNoteFreeText: 'FREE_NOTE_FREE_TEXT' as NotePostTypeEnum,
        CustomGrouping: 'CUSTOM_GROUPING' as NotePostTypeEnum
    };
    export type NoteGroupTypeEnum = 'EXTRAORDINARY_INCOME_GROUP' | 'EXTRAORDINARY_COST_GROUP' | 'GROUP_GROUP' | 'ACTUAL_VALUE_FINACIAL_INSTRUMENTS_GROUP';
    export const NoteGroupTypeEnum = {
        ExtraordinaryIncomeGroup: 'EXTRAORDINARY_INCOME_GROUP' as NoteGroupTypeEnum,
        ExtraordinaryCostGroup: 'EXTRAORDINARY_COST_GROUP' as NoteGroupTypeEnum,
        GroupGroup: 'GROUP_GROUP' as NoteGroupTypeEnum,
        ActualValueFinacialInstrumentsGroup: 'ACTUAL_VALUE_FINACIAL_INSTRUMENTS_GROUP' as NoteGroupTypeEnum
    };
}


