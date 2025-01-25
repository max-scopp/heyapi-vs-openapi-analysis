/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Company } from './company';
import { Municipality } from './municipality';
import { SalaryV2PaymentValidationResult } from './salaryV2PaymentValidationResult';
import { Employment } from './employment';
import { SalaryV2Specification } from './salaryV2Specification';
import { Change } from './change';
import { SalaryV2Employee } from './salaryV2Employee';
import { SalaryV2TravelExpense } from './salaryV2TravelExpense';


export interface SalaryV2Payment { 
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    employee: SalaryV2Employee;
    employment: Employment;
    /**
     * Voucher date.
     */
    date?: string;
    year?: number;
    month?: number;
    readonly grossAmount?: number;
    readonly amount?: number;
    readonly number?: number;
    payrollTaxMunicipality?: Municipality;
    division?: Company;
    readonly holidayAllowanceRate?: number;
    readonly bankAccountOrIban?: string;
    readonly payrollTaxPercentage?: number;
    readonly deliveryMethodPaySlip?: SalaryV2Payment.DeliveryMethodPaySlipEnum;
    readonly isTaxCardMissing?: boolean;
    comment?: string;
    /**
     * Link to salary specifications.
     */
    specifications?: Array<SalaryV2Specification>;
    /**
     * Link to salary specifications.
     */
    travelExpenses?: Array<SalaryV2TravelExpense>;
    readonly employeeHourlyWage?: number;
    seamenDaysOnBoard?: number;
    readonly lastMonthPaidAmount?: number;
    readonly employeeSalaryDate?: string;
    readonly suggestAddReadjustment?: boolean;
    readonly isEmploymentInfoAmeldinger?: boolean;
    seamenDeduction?: boolean;
    validationResults?: SalaryV2PaymentValidationResult;
}
export namespace SalaryV2Payment {
    export type DeliveryMethodPaySlipEnum = 'MANUAL' | 'EBOKS' | 'PRINT' | 'EMAIL' | 'APP';
    export const DeliveryMethodPaySlipEnum = {
        Manual: 'MANUAL' as DeliveryMethodPaySlipEnum,
        Eboks: 'EBOKS' as DeliveryMethodPaySlipEnum,
        Print: 'PRINT' as DeliveryMethodPaySlipEnum,
        Email: 'EMAIL' as DeliveryMethodPaySlipEnum,
        App: 'APP' as DeliveryMethodPaySlipEnum
    };
}


