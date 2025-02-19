/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { AccountantClientAccessRole } from './accountantClientAccessRole';


export interface AccountantClientAccessCategoryModel { 
    readonly category?: AccountantClientAccessCategoryModel.CategoryEnum;
    readonly description?: string;
    readonly accessLevel?: AccountantClientAccessCategoryModel.AccessLevelEnum;
    readonly hasReceivedAggregatedAccess?: boolean;
    readonly roles?: Array<AccountantClientAccessRole>;
}
export namespace AccountantClientAccessCategoryModel {
    export type CategoryEnum = 'GENERAL' | 'ACCOUNTING' | 'VOUCHER_APPROVAL' | 'BANK' | 'COMPANY' | 'CUSTOMER' | 'DOCUMENT' | 'INVOICING' | 'PROJECT' | 'PRODUCT' | 'REPORT' | 'WAGE' | 'TASK' | 'HOUR_LIST' | 'TRAVEL_REPORT' | 'VOUCHER' | 'YEAR_END_REPORT';
    export const CategoryEnum = {
        General: 'GENERAL' as CategoryEnum,
        Accounting: 'ACCOUNTING' as CategoryEnum,
        VoucherApproval: 'VOUCHER_APPROVAL' as CategoryEnum,
        Bank: 'BANK' as CategoryEnum,
        Company: 'COMPANY' as CategoryEnum,
        Customer: 'CUSTOMER' as CategoryEnum,
        Document: 'DOCUMENT' as CategoryEnum,
        Invoicing: 'INVOICING' as CategoryEnum,
        Project: 'PROJECT' as CategoryEnum,
        Product: 'PRODUCT' as CategoryEnum,
        Report: 'REPORT' as CategoryEnum,
        Wage: 'WAGE' as CategoryEnum,
        Task: 'TASK' as CategoryEnum,
        HourList: 'HOUR_LIST' as CategoryEnum,
        TravelReport: 'TRAVEL_REPORT' as CategoryEnum,
        Voucher: 'VOUCHER' as CategoryEnum,
        YearEndReport: 'YEAR_END_REPORT' as CategoryEnum
    };
    export type AccessLevelEnum = 'NONE' | 'SOME' | 'ALL';
    export const AccessLevelEnum = {
        None: 'NONE' as AccessLevelEnum,
        Some: 'SOME' as AccessLevelEnum,
        All: 'ALL' as AccessLevelEnum
    };
}


