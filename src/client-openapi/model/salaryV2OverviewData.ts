/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { SalaryV2OverviewDataSalaryPayment } from './salaryV2OverviewDataSalaryPayment';
import { SalaryV2OverviewDataWageCodeRow } from './salaryV2OverviewDataWageCodeRow';


export interface SalaryV2OverviewData { 
    readonly salaryPayments?: Array<SalaryV2OverviewDataSalaryPayment>;
    readonly rows?: Array<SalaryV2OverviewDataWageCodeRow>;
}

