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


export interface ClientAccessTemplate { 
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    name?: string;
    roleContainers?: Array<ClientAccessTemplate.RoleContainersEnum>;
}
export namespace ClientAccessTemplate {
    export type RoleContainersEnum = 'ROLE_ADMINISTRATOR' | 'AUTH_READ_ONLY' | 'AUTH_LOGIN' | 'AUTH_ALL_VOUCHERS' | 'AUTH_COMPANY_ACCOUNTING_REPORTS' | 'AUTH_ACCOUNTING_SETTINGS' | 'AUTH_COMPANY_RESULT_BUDGET' | 'AUTH_COMPANY_CUSTOMER_ACCOUNTING_REPORTS' | 'AUTH_COMPANY_VENDOR_ACCOUNTING_REPORTS' | 'AUTH_COMPANY_EMPLOYEE_ACCOUNTING_REPORTS' | 'AUTH_COMPANY_ASSET_ACCOUNTING_REPORTS' | 'AUTH_COMPANY_ATTESTOR' | 'AUTH_DIRECT_REMIT_ADMIN' | 'AUTH_DIRECT_REMIT_LIGHT' | 'AUTH_MANAGE_BANK_ACCOUNT_NUMBERS' | 'AUTH_DIRECT_REMIT_CREATE_NEW' | 'AUTH_DIRECT_REMIT_ADMIN_ZTL' | 'AUTH_COMPANY_ADMIN' | 'AUTH_EMPLOYEE_INFO' | 'AUTH_COMPANY_EMPLOYEE_ADMIN' | 'AUTH_CUSTOMER_ADMIN' | 'AUTH_CUSTOMER_INFO' | 'AUTH_CREATE_CUSTOMER' | 'AUTH_INBOX_ARCHIVE_ALL_EMPLOYEES' | 'AUTH_ARCHIVE_READ' | 'AUTH_ARCHIVE_WRITE' | 'AUTH_ARCHIVE_ADMIN' | 'AUTH_CREATE_NOTE' | 'AUTH_CREATE_NOTE_TEMPLATE' | 'AUTH_INVOICING' | 'AUTH_OFFER_ADMIN' | 'AUTH_ORDER_ADMIN' | 'AUTH_CREATE_OFFER' | 'AUTH_CREATE_ORDER' | 'AUTH_FACTORING_EXPORT' | 'AUTH_INVOICE_ADMIN_SETTINGS' | 'AUTH_PROJECT_MANAGER' | 'AUTH_PROJECT_MANAGER_COMPANY' | 'AUTH_DEPARTMENT_REPORT' | 'AUTH_CREATE_PROJECT' | 'AUTH_PROJECT_EXTRA_COSTS' | 'AUTH_PROJECT_INFO' | 'AUTH_PROJECT_ADMIN_SETTINGS' | 'AUTH_PROJECT_OWN_PROJECT_RESULT_REPORT' | 'AUTH_PROJECT_CONTROL_FORMS' | 'AUTH_PRODUCT_ADMIN' | 'REPORT_ADMINISTRATOR' | 'REPORT_AUTHOR' | 'AUTH_COMPANY_WAGE_ADMIN' | 'AUTH_WAGE_ADMIN_SETTINGS' | 'AUTH_WAGE_INFORMATION' | 'AUTH_TASK_ADMIN' | 'AUTH_HOURS_COMPANY' | 'AUTH_HOUR_STATISTICS_COMPANY' | 'AUTH_HOURLIST' | 'AUTH_HOURLIST_SETTINGS' | 'AUTH_HOLYDAY_PLAN' | 'AUTH_TRAVEL_REPORTS_COMPANY' | 'AUTH_TRAVEL_REPORT' | 'AUTH_TRAVEL_EXPENSE_ADMIN_SETTINGS' | 'AUTH_VOUCHER_EXPORT' | 'AUTH_INBOX_VOUCHER' | 'AUTH_INCOMPLETE_VOUCHERS' | 'AUTH_INCOMING_INVOICE' | 'AUTH_VOUCHER_SETTINGS' | 'AUTH_BANK_RECONCILIATION' | 'AUTH_VAT_REPORT' | 'AUTH_SICKNESS_REIMBURSEMENT' | 'AUTH_REGISTER_INCOME' | 'AUTH_ADVANCED_VOUCHER' | 'AUTH_VOUCHER_IMPORT' | 'AUTH_PRODUCT_INVOICE' | 'AUTH_CUSTOMS_DECLARATION' | 'AUTH_VOUCHER_AUTOMATION' | 'AUTH_REMIT_FILES_VOUCHER_OVERVIEW' | 'YEAR_END_REPORT_ADMINISTRATOR';
    export const RoleContainersEnum = {
        RoleAdministrator: 'ROLE_ADMINISTRATOR' as RoleContainersEnum,
        AuthReadOnly: 'AUTH_READ_ONLY' as RoleContainersEnum,
        AuthLogin: 'AUTH_LOGIN' as RoleContainersEnum,
        AuthAllVouchers: 'AUTH_ALL_VOUCHERS' as RoleContainersEnum,
        AuthCompanyAccountingReports: 'AUTH_COMPANY_ACCOUNTING_REPORTS' as RoleContainersEnum,
        AuthAccountingSettings: 'AUTH_ACCOUNTING_SETTINGS' as RoleContainersEnum,
        AuthCompanyResultBudget: 'AUTH_COMPANY_RESULT_BUDGET' as RoleContainersEnum,
        AuthCompanyCustomerAccountingReports: 'AUTH_COMPANY_CUSTOMER_ACCOUNTING_REPORTS' as RoleContainersEnum,
        AuthCompanyVendorAccountingReports: 'AUTH_COMPANY_VENDOR_ACCOUNTING_REPORTS' as RoleContainersEnum,
        AuthCompanyEmployeeAccountingReports: 'AUTH_COMPANY_EMPLOYEE_ACCOUNTING_REPORTS' as RoleContainersEnum,
        AuthCompanyAssetAccountingReports: 'AUTH_COMPANY_ASSET_ACCOUNTING_REPORTS' as RoleContainersEnum,
        AuthCompanyAttestor: 'AUTH_COMPANY_ATTESTOR' as RoleContainersEnum,
        AuthDirectRemitAdmin: 'AUTH_DIRECT_REMIT_ADMIN' as RoleContainersEnum,
        AuthDirectRemitLight: 'AUTH_DIRECT_REMIT_LIGHT' as RoleContainersEnum,
        AuthManageBankAccountNumbers: 'AUTH_MANAGE_BANK_ACCOUNT_NUMBERS' as RoleContainersEnum,
        AuthDirectRemitCreateNew: 'AUTH_DIRECT_REMIT_CREATE_NEW' as RoleContainersEnum,
        AuthDirectRemitAdminZtl: 'AUTH_DIRECT_REMIT_ADMIN_ZTL' as RoleContainersEnum,
        AuthCompanyAdmin: 'AUTH_COMPANY_ADMIN' as RoleContainersEnum,
        AuthEmployeeInfo: 'AUTH_EMPLOYEE_INFO' as RoleContainersEnum,
        AuthCompanyEmployeeAdmin: 'AUTH_COMPANY_EMPLOYEE_ADMIN' as RoleContainersEnum,
        AuthCustomerAdmin: 'AUTH_CUSTOMER_ADMIN' as RoleContainersEnum,
        AuthCustomerInfo: 'AUTH_CUSTOMER_INFO' as RoleContainersEnum,
        AuthCreateCustomer: 'AUTH_CREATE_CUSTOMER' as RoleContainersEnum,
        AuthInboxArchiveAllEmployees: 'AUTH_INBOX_ARCHIVE_ALL_EMPLOYEES' as RoleContainersEnum,
        AuthArchiveRead: 'AUTH_ARCHIVE_READ' as RoleContainersEnum,
        AuthArchiveWrite: 'AUTH_ARCHIVE_WRITE' as RoleContainersEnum,
        AuthArchiveAdmin: 'AUTH_ARCHIVE_ADMIN' as RoleContainersEnum,
        AuthCreateNote: 'AUTH_CREATE_NOTE' as RoleContainersEnum,
        AuthCreateNoteTemplate: 'AUTH_CREATE_NOTE_TEMPLATE' as RoleContainersEnum,
        AuthInvoicing: 'AUTH_INVOICING' as RoleContainersEnum,
        AuthOfferAdmin: 'AUTH_OFFER_ADMIN' as RoleContainersEnum,
        AuthOrderAdmin: 'AUTH_ORDER_ADMIN' as RoleContainersEnum,
        AuthCreateOffer: 'AUTH_CREATE_OFFER' as RoleContainersEnum,
        AuthCreateOrder: 'AUTH_CREATE_ORDER' as RoleContainersEnum,
        AuthFactoringExport: 'AUTH_FACTORING_EXPORT' as RoleContainersEnum,
        AuthInvoiceAdminSettings: 'AUTH_INVOICE_ADMIN_SETTINGS' as RoleContainersEnum,
        AuthProjectManager: 'AUTH_PROJECT_MANAGER' as RoleContainersEnum,
        AuthProjectManagerCompany: 'AUTH_PROJECT_MANAGER_COMPANY' as RoleContainersEnum,
        AuthDepartmentReport: 'AUTH_DEPARTMENT_REPORT' as RoleContainersEnum,
        AuthCreateProject: 'AUTH_CREATE_PROJECT' as RoleContainersEnum,
        AuthProjectExtraCosts: 'AUTH_PROJECT_EXTRA_COSTS' as RoleContainersEnum,
        AuthProjectInfo: 'AUTH_PROJECT_INFO' as RoleContainersEnum,
        AuthProjectAdminSettings: 'AUTH_PROJECT_ADMIN_SETTINGS' as RoleContainersEnum,
        AuthProjectOwnProjectResultReport: 'AUTH_PROJECT_OWN_PROJECT_RESULT_REPORT' as RoleContainersEnum,
        AuthProjectControlForms: 'AUTH_PROJECT_CONTROL_FORMS' as RoleContainersEnum,
        AuthProductAdmin: 'AUTH_PRODUCT_ADMIN' as RoleContainersEnum,
        ReportAdministrator: 'REPORT_ADMINISTRATOR' as RoleContainersEnum,
        ReportAuthor: 'REPORT_AUTHOR' as RoleContainersEnum,
        AuthCompanyWageAdmin: 'AUTH_COMPANY_WAGE_ADMIN' as RoleContainersEnum,
        AuthWageAdminSettings: 'AUTH_WAGE_ADMIN_SETTINGS' as RoleContainersEnum,
        AuthWageInformation: 'AUTH_WAGE_INFORMATION' as RoleContainersEnum,
        AuthTaskAdmin: 'AUTH_TASK_ADMIN' as RoleContainersEnum,
        AuthHoursCompany: 'AUTH_HOURS_COMPANY' as RoleContainersEnum,
        AuthHourStatisticsCompany: 'AUTH_HOUR_STATISTICS_COMPANY' as RoleContainersEnum,
        AuthHourlist: 'AUTH_HOURLIST' as RoleContainersEnum,
        AuthHourlistSettings: 'AUTH_HOURLIST_SETTINGS' as RoleContainersEnum,
        AuthHolydayPlan: 'AUTH_HOLYDAY_PLAN' as RoleContainersEnum,
        AuthTravelReportsCompany: 'AUTH_TRAVEL_REPORTS_COMPANY' as RoleContainersEnum,
        AuthTravelReport: 'AUTH_TRAVEL_REPORT' as RoleContainersEnum,
        AuthTravelExpenseAdminSettings: 'AUTH_TRAVEL_EXPENSE_ADMIN_SETTINGS' as RoleContainersEnum,
        AuthVoucherExport: 'AUTH_VOUCHER_EXPORT' as RoleContainersEnum,
        AuthInboxVoucher: 'AUTH_INBOX_VOUCHER' as RoleContainersEnum,
        AuthIncompleteVouchers: 'AUTH_INCOMPLETE_VOUCHERS' as RoleContainersEnum,
        AuthIncomingInvoice: 'AUTH_INCOMING_INVOICE' as RoleContainersEnum,
        AuthVoucherSettings: 'AUTH_VOUCHER_SETTINGS' as RoleContainersEnum,
        AuthBankReconciliation: 'AUTH_BANK_RECONCILIATION' as RoleContainersEnum,
        AuthVatReport: 'AUTH_VAT_REPORT' as RoleContainersEnum,
        AuthSicknessReimbursement: 'AUTH_SICKNESS_REIMBURSEMENT' as RoleContainersEnum,
        AuthRegisterIncome: 'AUTH_REGISTER_INCOME' as RoleContainersEnum,
        AuthAdvancedVoucher: 'AUTH_ADVANCED_VOUCHER' as RoleContainersEnum,
        AuthVoucherImport: 'AUTH_VOUCHER_IMPORT' as RoleContainersEnum,
        AuthProductInvoice: 'AUTH_PRODUCT_INVOICE' as RoleContainersEnum,
        AuthCustomsDeclaration: 'AUTH_CUSTOMS_DECLARATION' as RoleContainersEnum,
        AuthVoucherAutomation: 'AUTH_VOUCHER_AUTOMATION' as RoleContainersEnum,
        AuthRemitFilesVoucherOverview: 'AUTH_REMIT_FILES_VOUCHER_OVERVIEW' as RoleContainersEnum,
        YearEndReportAdministrator: 'YEAR_END_REPORT_ADMINISTRATOR' as RoleContainersEnum
    };
}


