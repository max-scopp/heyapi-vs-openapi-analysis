/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Employee } from './employee';


export interface SalaryV2OverviewDataSalaryPayment { 
    readonly salaryPaymentId?: number;
    readonly displayName?: string;
    readonly paymentAmount?: number;
    readonly payrollTaxBasisAmount?: number;
    employee?: Employee;
}

