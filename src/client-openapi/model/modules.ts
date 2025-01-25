/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface Modules { 
    /**
     * Not readable. Only for input.
     */
    accounting?: boolean;
    /**
     * Not readable. Only for input.
     */
    invoice?: boolean;
    /**
     * Not readable. Only for input.
     */
    salary?: boolean;
    salaryStartDate?: string;
    /**
     * Not readable. Only for input.
     */
    project?: boolean;
    ocr?: boolean;
    autoPayOcr?: boolean;
    remit?: boolean;
    /**
     * Not readable. Only for input.
     */
    electronicVouchers?: boolean;
    /**
     * Not readable. Only for input.
     */
    electro?: boolean;
    /**
     * Not readable. Only for input.
     */
    vvs?: boolean;
    agro?: boolean;
    mamut?: boolean;
    /**
     * Only readable for now
     */
    readonly approveVoucher?: boolean;
    moduleprojecteconomy?: boolean;
    moduleemployee?: boolean;
    moduleContact?: boolean;
    modulecustomer?: boolean;
    modulenrf?: boolean;
    moduleelectro?: boolean;
    moduledepartment?: boolean;
    moduleprojectcategory?: boolean;
    moduleinvoice?: boolean;
    moduleCurrency?: boolean;
    moduleProjectBudget?: boolean;
    moduleProduct?: boolean;
    moduleQuantityHandling?: boolean;
    moduleFactoringVismaFinance?: Modules.ModuleFactoringVismaFinanceEnum;
    completeMonthlyHourLists?: boolean;
    moduleDepartmentAccounting?: boolean;
    moduleWageProjectAccounting?: boolean;
    /**
     * read only
     */
    readonly moduleProjectAccounting?: boolean;
    /**
     * read only
     */
    readonly moduleProductAccounting?: boolean;
    /**
     * read only
     */
    readonly moduleVacationBalance?: boolean;
    /**
     * read only
     */
    readonly moduleHolydayPlan?: boolean;
    moduleproject?: boolean;
    moduleLogistics?: boolean;
    moduleLogisticsLight?: boolean;
}
export namespace Modules {
    export type ModuleFactoringVismaFinanceEnum = 'OFF' | 'STARTED' | 'SIGNING_STARTED' | 'ON' | 'IN_REVIEW' | 'DEACTIVATED_FROM_ON' | 'DEACTIVATED_FROM_OFF' | 'FAILED' | 'OPTED_OUT';
    export const ModuleFactoringVismaFinanceEnum = {
        Off: 'OFF' as ModuleFactoringVismaFinanceEnum,
        Started: 'STARTED' as ModuleFactoringVismaFinanceEnum,
        SigningStarted: 'SIGNING_STARTED' as ModuleFactoringVismaFinanceEnum,
        On: 'ON' as ModuleFactoringVismaFinanceEnum,
        InReview: 'IN_REVIEW' as ModuleFactoringVismaFinanceEnum,
        DeactivatedFromOn: 'DEACTIVATED_FROM_ON' as ModuleFactoringVismaFinanceEnum,
        DeactivatedFromOff: 'DEACTIVATED_FROM_OFF' as ModuleFactoringVismaFinanceEnum,
        Failed: 'FAILED' as ModuleFactoringVismaFinanceEnum,
        OptedOut: 'OPTED_OUT' as ModuleFactoringVismaFinanceEnum
    };
}


