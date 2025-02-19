/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { PerDiemCompensation } from './perDiemCompensation';
import { Invoice } from './invoice';
import { TravelDetails } from './travelDetails';
import { Change } from './change';
import { VatType } from './vatType';
import { Document } from './document';
import { Cost } from './cost';
import { Voucher } from './voucher';
import { Project } from './project';
import { Department } from './department';
import { Employee } from './employee';
import { Currency } from './currency';
import { MileageAllowance } from './mileageAllowance';
import { Link } from './link';
import { AccommodationAllowance } from './accommodationAllowance';
import { Payslip } from './payslip';


export interface TravelExpense { 
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    project?: Project;
    employee: Employee;
    approvedBy?: Employee;
    completedBy?: Employee;
    rejectedBy?: Employee;
    department?: Department;
    payslip?: Payslip;
    vatType?: VatType;
    paymentCurrency?: Currency;
    travelDetails?: TravelDetails;
    voucher?: Voucher;
    attachment?: Document;
    readonly isCompleted?: boolean;
    readonly isApproved?: boolean;
    readonly rejectedComment?: string;
    isChargeable?: boolean;
    isFixedInvoicedAmount?: boolean;
    isIncludeAttachedReceiptsWhenReinvoicing?: boolean;
    readonly completedDate?: string;
    readonly approvedDate?: string;
    readonly date?: string;
    travelAdvance?: number;
    fixedInvoicedAmount?: number;
    readonly amount?: number;
    readonly chargeableAmountCurrency?: number;
    readonly paymentAmount?: number;
    readonly chargeableAmount?: number;
    readonly lowRateVAT?: number;
    readonly mediumRateVAT?: number;
    readonly highRateVAT?: number;
    readonly paymentAmountCurrency?: number;
    readonly number?: number;
    invoice?: Invoice;
    title?: string;
    /**
     * Link to individual per diem compensations.
     */
    perDiemCompensations?: Array<PerDiemCompensation>;
    /**
     * Link to individual mileage allowances.
     */
    readonly mileageAllowances?: Array<MileageAllowance>;
    /**
     * Link to individual accommodation allowances.
     */
    readonly accommodationAllowances?: Array<AccommodationAllowance>;
    /**
     * Link to individual costs.
     */
    costs?: Array<Cost>;
    readonly attachmentCount?: number;
    readonly state?: TravelExpense.StateEnum;
    readonly stateName?: string;
    readonly actions?: Array<Link>;
    readonly isSalaryAdmin?: boolean;
    readonly showPayslip?: boolean;
    readonly accountingPeriodClosed?: boolean;
    readonly accountingPeriodVATClosed?: boolean;
    readonly type?: number;
}
export namespace TravelExpense {
    export type StateEnum = 'ALL' | 'OPEN' | 'APPROVED' | 'SALARY_PAID' | 'DELIVERED' | 'REJECTED';
    export const StateEnum = {
        All: 'ALL' as StateEnum,
        Open: 'OPEN' as StateEnum,
        Approved: 'APPROVED' as StateEnum,
        SalaryPaid: 'SALARY_PAID' as StateEnum,
        Delivered: 'DELIVERED' as StateEnum,
        Rejected: 'REJECTED' as StateEnum
    };
}


