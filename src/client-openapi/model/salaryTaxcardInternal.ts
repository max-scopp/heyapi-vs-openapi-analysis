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
import { SalaryAdvanceTaxcardInternal } from './salaryAdvanceTaxcardInternal';


export interface SalaryTaxcardInternal { 
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    advanceTaxcards?: Array<SalaryAdvanceTaxcardInternal>;
    additionalInfo?: string;
    date?: string;
    utstedtDato?: string;
    arbeidstakerIdentifikator?: string;
    status?: string;
    statusDescription?: string;
    orderId?: number;
    yearOfIncome?: number;
    skattekortIdentifikator?: number;
    deductionPeriod?: number;
    payrollTaxMunicipalityId?: number;
}

