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
import { Employee } from './employee';
import { Change } from './change';


export interface AmeldingStatusInternal { 
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    company?: Company;
    ameldingActorEmployee?: Employee;
    paymentActorEmployee?: Employee;
    /**
     * Time for last A-melding action
     */
    readonly lastAmeldingActionTime?: string;
    /**
     * Time for last payment of taxes (etc) action
     */
    readonly lastPaymentActionTime?: string;
    /**
     * Summary of current A-melding status in period
     */
    readonly ameldingSummaryStatus?: AmeldingStatusInternal.AmeldingSummaryStatusEnum;
    /**
     * Detailed status of current A-melding situation in period
     */
    readonly ameldingDetailedStatus?: AmeldingStatusInternal.AmeldingDetailedStatusEnum;
    /**
     * Tax deduction amount accrued from a-melding
     */
    readonly taxDeductionAccrued?: number;
    /**
     * Payroll tax (ENI) amount accrued from a-melding
     */
    readonly payrollTaxAccrued?: number;
    /**
     * Finance tax amount accrued from a-melding
     */
    readonly financeTaxAccrued?: number;
    /**
     * Mandatory deduction amount accrued from a-melding
     */
    readonly mandatoryDeductionAccrued?: number;
    /**
     * Tax deduction amount not paid
     */
    readonly taxDeductionNotPaid?: number;
    /**
     * Payroll tax (ENI) amount not paid
     */
    readonly payrollTaxNotPaid?: number;
    /**
     * Finance tax amount not paid
     */
    readonly financeTaxNotPaid?: number;
    /**
     * Mandatory deduction amount not paid
     */
    readonly mandatoryDeductionNotPaid?: number;
    /**
     * Name of the period the tax is accrued
     */
    readonly taxPeriodName?: string;
}
export namespace AmeldingStatusInternal {
    export type AmeldingSummaryStatusEnum = 'completed' | 'notCompleted' | 'awaitingResponse';
    export const AmeldingSummaryStatusEnum = {
        Completed: 'completed' as AmeldingSummaryStatusEnum,
        NotCompleted: 'notCompleted' as AmeldingSummaryStatusEnum,
        AwaitingResponse: 'awaitingResponse' as AmeldingSummaryStatusEnum
    };
    export type AmeldingDetailedStatusEnum = 'noAmeldingExists' | 'ameldingRejected' | 'ameldingExistsNotSent' | 'nonReportedWageinfo' | 'ameldingCancelledAwaitingReturnMessage' | 'ameldingSentAwaitingReturnMessage' | 'nonBlockingReturnMessage' | 'blockingReturnMessage' | 'okReturnMessage' | 'unknown';
    export const AmeldingDetailedStatusEnum = {
        NoAmeldingExists: 'noAmeldingExists' as AmeldingDetailedStatusEnum,
        AmeldingRejected: 'ameldingRejected' as AmeldingDetailedStatusEnum,
        AmeldingExistsNotSent: 'ameldingExistsNotSent' as AmeldingDetailedStatusEnum,
        NonReportedWageinfo: 'nonReportedWageinfo' as AmeldingDetailedStatusEnum,
        AmeldingCancelledAwaitingReturnMessage: 'ameldingCancelledAwaitingReturnMessage' as AmeldingDetailedStatusEnum,
        AmeldingSentAwaitingReturnMessage: 'ameldingSentAwaitingReturnMessage' as AmeldingDetailedStatusEnum,
        NonBlockingReturnMessage: 'nonBlockingReturnMessage' as AmeldingDetailedStatusEnum,
        BlockingReturnMessage: 'blockingReturnMessage' as AmeldingDetailedStatusEnum,
        OkReturnMessage: 'okReturnMessage' as AmeldingDetailedStatusEnum,
        Unknown: 'unknown' as AmeldingDetailedStatusEnum
    };
}


