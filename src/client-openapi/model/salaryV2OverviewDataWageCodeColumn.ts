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


export interface SalaryV2OverviewDataWageCodeColumn { 
    readonly salaryPaymentId?: number;
    readonly displayName?: string;
    readonly count?: number;
    readonly amount?: number;
    readonly isHours?: boolean;
    employee?: Employee;
}

