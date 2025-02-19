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


export interface SalaryV2Type { 
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    number?: string;
    name?: string;
    displayName?: string;
    payStatementCode?: string;
    description?: string;
    readonly showInTimesheet?: boolean;
    readonly taxable?: boolean;
    readonly payrollTaxable?: boolean;
    readonly vacationPayable?: boolean;
    readonly sickPayable?: boolean;
    readonly payment?: boolean;
    readonly vacationAllowance?: boolean;
    readonly requiresAdditionalInfo?: boolean;
    readonly requiresSupplement?: boolean;
    readonly requiredSupplementFields?: Array<SalaryV2Type.RequiredSupplementFieldsEnum>;
    readonly rate?: number;
    readonly percentIncrease?: number;
    readonly maxRate?: number;
    readonly minRate?: number;
    readonly calcType?: number;
}
export namespace SalaryV2Type {
    export type RequiredSupplementFieldsEnum = 'COUNTRY' | 'TAX_COUNTRY' | 'CAR_NUMBER_OF_KM' | 'CAR_NUMBER_OF_KM_TO_HOME_OR_WORK' | 'CAR_LIST_PRICE' | 'CAR_REGISTRATION_NUMBER' | 'NUMBER_OF_JOURNEYS' | 'UPGROSSING_BASIS' | 'UPGROSSING_TABLE_NUMBER' | 'YEAR_OF_INCOME' | 'DEDUCTED_ARTIST_TAX' | 'TAX_PAID_ABROAD' | 'SUPPORT_VESSEL' | 'IS_CONTINENTAL_SHAFT' | 'NORWEGIAN_SHAFT_PERIOD' | 'NORWEGIAN_SHAFT_FIRST_60_DAYS' | 'NUMBER_OF_DAYS';
    export const RequiredSupplementFieldsEnum = {
        Country: 'COUNTRY' as RequiredSupplementFieldsEnum,
        TaxCountry: 'TAX_COUNTRY' as RequiredSupplementFieldsEnum,
        CarNumberOfKm: 'CAR_NUMBER_OF_KM' as RequiredSupplementFieldsEnum,
        CarNumberOfKmToHomeOrWork: 'CAR_NUMBER_OF_KM_TO_HOME_OR_WORK' as RequiredSupplementFieldsEnum,
        CarListPrice: 'CAR_LIST_PRICE' as RequiredSupplementFieldsEnum,
        CarRegistrationNumber: 'CAR_REGISTRATION_NUMBER' as RequiredSupplementFieldsEnum,
        NumberOfJourneys: 'NUMBER_OF_JOURNEYS' as RequiredSupplementFieldsEnum,
        UpgrossingBasis: 'UPGROSSING_BASIS' as RequiredSupplementFieldsEnum,
        UpgrossingTableNumber: 'UPGROSSING_TABLE_NUMBER' as RequiredSupplementFieldsEnum,
        YearOfIncome: 'YEAR_OF_INCOME' as RequiredSupplementFieldsEnum,
        DeductedArtistTax: 'DEDUCTED_ARTIST_TAX' as RequiredSupplementFieldsEnum,
        TaxPaidAbroad: 'TAX_PAID_ABROAD' as RequiredSupplementFieldsEnum,
        SupportVessel: 'SUPPORT_VESSEL' as RequiredSupplementFieldsEnum,
        IsContinentalShaft: 'IS_CONTINENTAL_SHAFT' as RequiredSupplementFieldsEnum,
        NorwegianShaftPeriod: 'NORWEGIAN_SHAFT_PERIOD' as RequiredSupplementFieldsEnum,
        NorwegianShaftFirst60Days: 'NORWEGIAN_SHAFT_FIRST_60_DAYS' as RequiredSupplementFieldsEnum,
        NumberOfDays: 'NUMBER_OF_DAYS' as RequiredSupplementFieldsEnum
    };
}


