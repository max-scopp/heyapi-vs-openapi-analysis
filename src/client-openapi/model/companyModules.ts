/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface CompanyModules { 
    modules?: Array<CompanyModules.ModulesEnum>;
}
export namespace CompanyModules {
    export type ModulesEnum = 'MODULE_TRAVEL_EXPENSE' | 'MODULE_INVOICE' | 'MODULE_INVOICE_OPTION_AUTOINVOICE_EHF' | 'MODULE_INVOICE_OPTION_PAPER' | 'MODULE_INVOICE_OPTION_EFAKTURA' | 'MODULE_ACCOUNTING_INTERNAL' | 'MODULE_ACCOUNTING_EXTERNAL' | 'MODULE_PROJECT' | 'MODULE_PRODUCT' | 'MODULE_CUSTOMER' | 'MODULE_EMPLOYEE' | 'MODULE_DEPARTMENT' | 'APPROVE_INVOICES' | 'APPROVE_HOURLISTS' | 'APPROVE_TRAVEL_REPORTS' | 'MODULE_BUDGET' | 'MODULE_NOTE' | 'MODULE_TASK' | 'MODULE_YEAR_END_REPORT' | 'MODULE_RESOURCE_ALLOCATION' | 'MODULE_PROJECT_ECONOMY' | 'MODULE_REFERENCE_FEE' | 'MODULE_RORKJOP' | 'MODULE_HISTORICAL' | 'MODULE_PROJECT_CATEGORY' | 'MODULE_PROJECT_LOCATION' | 'MODULE_PROJECT_BUDGET' | 'MODULE_PENSION_REPORT' | 'MODULE_QUANTITY_HANDLING' | 'MODULE_SUBSCRIPTION' | 'COMPLETE_WEEKLY_HOURLISTS' | 'COMPLETE_MONTHLY_HOURLISTS' | 'APPROVE_MONTHLY_HOURLISTS' | 'MODULE_PROJECT_PROGNOSIS' | 'MODULE_BUNCHES' | 'MODULE_ACCOUNTING_REPORTS' | 'MODULE_CUSTOMER_CATEGORIES' | 'MODULE_PROJECT_SUBCONTRACT' | 'MODULE_PAYROLL_ACCOUNTING' | 'INVOICE_APPROVED_HOURS_MANDATORY' | 'IS_CURRENT_MONTH_DEFAULT_PERIOD' | 'SHOW_TRAVEL_REPORT_LETTERHEAD' | 'MODULE_TIME_BALANCE' | 'MODULE_VACATION_BALANCE' | 'MODULE_WORKING_HOURS' | 'MODULE_CREDIT_SCORING' | 'MODULE_CURRENCY' | 'MODULE_WAGE_EXPORT' | 'APPROVE_WEEKLY_HOURLISTS' | 'MODULE_AUTO_CUSTOMER_NUMBER' | 'MODULE_AUTO_VENDOR_NUMBER' | 'MODULE_PROVISION_SALARY' | 'HIDE_SINGLE_ACTIVITY_ON_INVOICE' | 'MODULE_ORDER_NUMBER' | 'MODULE_ORDER_DISCOUNT' | 'MODULE_ORDER_MARKUP' | 'MODULE_ORDER_LINE_COST' | 'MODULE_LOGISTICS_LIGHT' | 'MODULE_STOP_WATCH' | 'MODULE_CONTACT' | 'INVOICE_RESERVE_IS_ZERO_FOR_CLOSED_PROJECT' | 'MODULE_AUTO_PROJECT_NUMBER' | 'MODULE_RESOURCE_GROUPS' | 'TRAVEL_REPORT_COMP_RATES_DEFAULT_VALUE' | 'IS_TRAVEL_REPORT_TAX_FREE_DIET_RATES' | 'MODULE_OCR' | 'MODULE_REMIT' | 'MODULE_TRAVEL_EXPENSE_RATES' | 'MONTHLY_HOURLIST_MINUS_TIME_WARNING' | 'MODULE_VOUCHER_SCANNING' | 'MODULE_INVOICE_SCANNING' | 'MODULE_LOGISTICS' | 'MODULE_PROJECT_PARTICIPANTS' | 'ALLOW_TIME_TRACKING_FOR_PARTICIPANTS_ONLY' | 'MODULE_HOLYDAY_PLAN' | 'MODULE_HOURLIST' | 'AUTO_EXPORT_VOUCHERS' | 'AUTO_EXPORT_CUSTOMERS' | 'PROJECT_ORDER_VIEW_DUE_IN_SCALE' | 'SEND_PAYSLIPS_BY_EMAIL' | 'MODULE_EMPLOYEE_CATEGORY' | 'ALLOW_MAX_ONE_HOLYDAY_PER_DAY' | 'PROJECT_NAME_SCHEME' | 'MODULE_CUSTOMER_CATEGORY1' | 'MODULE_CUSTOMER_CATEGORY2' | 'MODULE_CUSTOMER_CATEGORY3' | 'MODULE_PRODUCT_INVOICE' | 'IS_AUTO_REMIND_ENABLED_TYPE0' | 'IS_AUTO_REMIND_ENABLED_TYPE1' | 'INVOICE_FROM_CURRENT_USER' | 'INVOICE_BCC_CURRENT_USER' | 'AUTO_REMIND_DAYS_TYPE0' | 'AUTO_REMIND_DAYS_TYPE1' | 'AUTO_REMIND_DAYS_TYPE2' | 'AUTO_REMIND_DAYS_TYPE3' | 'PAYSLIP_FROM_CURRENT_USER' | 'PAYSLIP_BCC_CURRENT_USER' | 'AUTO_INVOICING' | 'AUTO_CLOSE_INVOICED_PROJECTS' | 'GENERAL_ACTIVITIES_PER_PROJECT' | 'VALIDATE_HOURS_PER_WEEK_WH' | 'VALIDATE_HOURS_PER_DAY24' | 'MODULE_INVOICE_FEE_COMMENT' | 'INVOICE_ROUNDOFF' | 'MODULE_EMPLOYEE_ACCOUNTING' | 'MODULE_DEPARTMENT_ACCOUNTING' | 'MODULE_PROJECT_ACCOUNTING' | 'MODULE_PRODUCT_ACCOUNTING' | 'MODULE_SUBSCRIPTION_ADDRESS_LIST' | 'SEND_IMPORTED_INVOICES' | 'MODULE_GTIN' | 'MODULE_ELECTRO' | 'MODULE_NRF' | 'API_AUTO_SEND_INVOICES' | 'MODULE_ELPROFFEN' | 'IS_PRODUCT_ADMIN' | 'MODULE_ORDER_EXT' | 'MODULE_AMORTIZATION' | 'MODULE_RESULT_BUDGET' | 'MODULE_CHANGE_DEBT_COLLECTOR' | 'INVOICE_PERIOD_COUNT' | 'INVOICING_PERIOD_TYPE' | 'INVOICING_PERIOD_UNIT' | 'IS_AUTO_REMIND_ENABLED_TYPE2' | 'IS_AUTO_REMIND_ENABLED_TYPE3' | 'SINGLE_CUSTOMER_INVOICE_COMPRESSES' | 'MODULE_VOUCHER_TYPES' | 'MODULE_ONNINEN123' | 'MODULE_ELEKTRO_UNION' | 'MODULE_AHLSELL_PARTNER' | 'MODULE_ARCHIVE' | 'VACATION_BALANCE_REDUCED_DAYS' | 'IS_ACCOUNTANT' | 'IS_AUDITOR' | 'IS_RESELLER' | 'ALLOW_MULTIPLE_PROJECT_INVOICE_VAT' | 'PROJECT_ACTIVITY_BUDGET_IS_MASTER' | 'HOURLIST_COMPLETED_REMINDER' | 'MODULE_PROJECT_BUDGET_REFERENCE_FEE' | 'CONFIRM_ETC_BEFORE_INVOICING' | 'TRAVEL_DIET_IGNORE_POSTING' | 'TRAVEL_NIGHT_IGNORE_POSTING' | 'TRAVEL_DRIVING_IGNORE_POSTING' | 'MODULE_WAREHOUSE' | 'ORDER_SHOW_ORDER_DATE' | 'OFFER_SHOW_OFFER_DATE' | 'HOURLY_RATE_PROJECTS_WRITE_UP_DOWN' | 'SHOW_RECENTLY_CLOSED_PROJECTS_ON_SUPPLIER_INVOICE' | 'FIXED_PRICE_PROJECTS_INVOICE_BY_PROGRESS' | 'MODULE_INVOICE_IMPORT' | 'MODULE_EMAIL' | 'PRODUCT_SET_COST_FROM_ORDER_LINE' | 'INVOICE_SHOW_MARKUP_DISCOUNT' | 'INVOICE_SHOW_PRODUCT_NUMBER' | 'MODULE_NETS_EBOKS' | 'MODULE_NETS_PRINT_SALARY' | 'MODULE_NETS_PRINT_INVOICE' | 'MODULE_BOLIGMAPPA' | 'MODULE_APPROVE_VOUCHER' | 'MODULE_APPROVE_DEPARTMENT_VOUCHER' | 'MODULE_APPROVE_PROJECT_VOUCHER' | 'DEFAULT_IS_PRIVATE_CUSTOMER' | 'DEFAULT_CHARGE_ON_PROJECT' | 'MODULE_MESAN' | 'MODULE_MULTIPLE_LEDGERS' | 'MODULE_DIVISIONS' | 'OFFER_FROM_CURRENT_USER' | 'ORDER_CONFIRMATION_CURRENT_USER' | 'MODULE_ACCOUNTANT_CONNECT_CLIENT' | 'MODULE_ADDITION_PROJECT_MARKUP' | 'MODULE_WAGE_PROJECT_ACCOUNTING' | 'MODULE_WAGE_AMORTIZATION' | 'TRIPLETEX_SUPPORT_LOGIN_ACCESS' | 'MODULE_ACTIVITY_HOURLY_WAGE_WAGE_CODE' | 'MODULE_SUBSCRIPTIONS_PERIODISATION' | 'MODULE_API_20' | 'REMIT_VOUCHERS_ONLY' | 'MODULE_FINANCE_TAX' | 'MODULE_SMART_SCAN' | 'MODULE_ORDER_OUT' | 'IS_TRAVEL_REPORT_TAX_FREE_DRIVING_RATES' | 'INCLUDE_TRIPLETEX_ACCOUNTANT_INVOICE_SUMMARY_CSV' | 'HIDE_INACTIVE_PROJECTS' | 'INVOICE_INCLUDE_COMMON_ATTACHMENTS' | 'MODULE_CONTROL_SCHEMA_REQUIRED_HOUR_TRACKING' | 'MODULE_CONTROL_SCHEMA_REQUIRED_INVOICING' | 'MODULE_INVOICE_OPTION_VIPPS';
    export const ModulesEnum = {
        ModuleTravelExpense: 'MODULE_TRAVEL_EXPENSE' as ModulesEnum,
        ModuleInvoice: 'MODULE_INVOICE' as ModulesEnum,
        ModuleInvoiceOptionAutoinvoiceEhf: 'MODULE_INVOICE_OPTION_AUTOINVOICE_EHF' as ModulesEnum,
        ModuleInvoiceOptionPaper: 'MODULE_INVOICE_OPTION_PAPER' as ModulesEnum,
        ModuleInvoiceOptionEfaktura: 'MODULE_INVOICE_OPTION_EFAKTURA' as ModulesEnum,
        ModuleAccountingInternal: 'MODULE_ACCOUNTING_INTERNAL' as ModulesEnum,
        ModuleAccountingExternal: 'MODULE_ACCOUNTING_EXTERNAL' as ModulesEnum,
        ModuleProject: 'MODULE_PROJECT' as ModulesEnum,
        ModuleProduct: 'MODULE_PRODUCT' as ModulesEnum,
        ModuleCustomer: 'MODULE_CUSTOMER' as ModulesEnum,
        ModuleEmployee: 'MODULE_EMPLOYEE' as ModulesEnum,
        ModuleDepartment: 'MODULE_DEPARTMENT' as ModulesEnum,
        ApproveInvoices: 'APPROVE_INVOICES' as ModulesEnum,
        ApproveHourlists: 'APPROVE_HOURLISTS' as ModulesEnum,
        ApproveTravelReports: 'APPROVE_TRAVEL_REPORTS' as ModulesEnum,
        ModuleBudget: 'MODULE_BUDGET' as ModulesEnum,
        ModuleNote: 'MODULE_NOTE' as ModulesEnum,
        ModuleTask: 'MODULE_TASK' as ModulesEnum,
        ModuleYearEndReport: 'MODULE_YEAR_END_REPORT' as ModulesEnum,
        ModuleResourceAllocation: 'MODULE_RESOURCE_ALLOCATION' as ModulesEnum,
        ModuleProjectEconomy: 'MODULE_PROJECT_ECONOMY' as ModulesEnum,
        ModuleReferenceFee: 'MODULE_REFERENCE_FEE' as ModulesEnum,
        ModuleRorkjop: 'MODULE_RORKJOP' as ModulesEnum,
        ModuleHistorical: 'MODULE_HISTORICAL' as ModulesEnum,
        ModuleProjectCategory: 'MODULE_PROJECT_CATEGORY' as ModulesEnum,
        ModuleProjectLocation: 'MODULE_PROJECT_LOCATION' as ModulesEnum,
        ModuleProjectBudget: 'MODULE_PROJECT_BUDGET' as ModulesEnum,
        ModulePensionReport: 'MODULE_PENSION_REPORT' as ModulesEnum,
        ModuleQuantityHandling: 'MODULE_QUANTITY_HANDLING' as ModulesEnum,
        ModuleSubscription: 'MODULE_SUBSCRIPTION' as ModulesEnum,
        CompleteWeeklyHourlists: 'COMPLETE_WEEKLY_HOURLISTS' as ModulesEnum,
        CompleteMonthlyHourlists: 'COMPLETE_MONTHLY_HOURLISTS' as ModulesEnum,
        ApproveMonthlyHourlists: 'APPROVE_MONTHLY_HOURLISTS' as ModulesEnum,
        ModuleProjectPrognosis: 'MODULE_PROJECT_PROGNOSIS' as ModulesEnum,
        ModuleBunches: 'MODULE_BUNCHES' as ModulesEnum,
        ModuleAccountingReports: 'MODULE_ACCOUNTING_REPORTS' as ModulesEnum,
        ModuleCustomerCategories: 'MODULE_CUSTOMER_CATEGORIES' as ModulesEnum,
        ModuleProjectSubcontract: 'MODULE_PROJECT_SUBCONTRACT' as ModulesEnum,
        ModulePayrollAccounting: 'MODULE_PAYROLL_ACCOUNTING' as ModulesEnum,
        InvoiceApprovedHoursMandatory: 'INVOICE_APPROVED_HOURS_MANDATORY' as ModulesEnum,
        IsCurrentMonthDefaultPeriod: 'IS_CURRENT_MONTH_DEFAULT_PERIOD' as ModulesEnum,
        ShowTravelReportLetterhead: 'SHOW_TRAVEL_REPORT_LETTERHEAD' as ModulesEnum,
        ModuleTimeBalance: 'MODULE_TIME_BALANCE' as ModulesEnum,
        ModuleVacationBalance: 'MODULE_VACATION_BALANCE' as ModulesEnum,
        ModuleWorkingHours: 'MODULE_WORKING_HOURS' as ModulesEnum,
        ModuleCreditScoring: 'MODULE_CREDIT_SCORING' as ModulesEnum,
        ModuleCurrency: 'MODULE_CURRENCY' as ModulesEnum,
        ModuleWageExport: 'MODULE_WAGE_EXPORT' as ModulesEnum,
        ApproveWeeklyHourlists: 'APPROVE_WEEKLY_HOURLISTS' as ModulesEnum,
        ModuleAutoCustomerNumber: 'MODULE_AUTO_CUSTOMER_NUMBER' as ModulesEnum,
        ModuleAutoVendorNumber: 'MODULE_AUTO_VENDOR_NUMBER' as ModulesEnum,
        ModuleProvisionSalary: 'MODULE_PROVISION_SALARY' as ModulesEnum,
        HideSingleActivityOnInvoice: 'HIDE_SINGLE_ACTIVITY_ON_INVOICE' as ModulesEnum,
        ModuleOrderNumber: 'MODULE_ORDER_NUMBER' as ModulesEnum,
        ModuleOrderDiscount: 'MODULE_ORDER_DISCOUNT' as ModulesEnum,
        ModuleOrderMarkup: 'MODULE_ORDER_MARKUP' as ModulesEnum,
        ModuleOrderLineCost: 'MODULE_ORDER_LINE_COST' as ModulesEnum,
        ModuleLogisticsLight: 'MODULE_LOGISTICS_LIGHT' as ModulesEnum,
        ModuleStopWatch: 'MODULE_STOP_WATCH' as ModulesEnum,
        ModuleContact: 'MODULE_CONTACT' as ModulesEnum,
        InvoiceReserveIsZeroForClosedProject: 'INVOICE_RESERVE_IS_ZERO_FOR_CLOSED_PROJECT' as ModulesEnum,
        ModuleAutoProjectNumber: 'MODULE_AUTO_PROJECT_NUMBER' as ModulesEnum,
        ModuleResourceGroups: 'MODULE_RESOURCE_GROUPS' as ModulesEnum,
        TravelReportCompRatesDefaultValue: 'TRAVEL_REPORT_COMP_RATES_DEFAULT_VALUE' as ModulesEnum,
        IsTravelReportTaxFreeDietRates: 'IS_TRAVEL_REPORT_TAX_FREE_DIET_RATES' as ModulesEnum,
        ModuleOcr: 'MODULE_OCR' as ModulesEnum,
        ModuleRemit: 'MODULE_REMIT' as ModulesEnum,
        ModuleTravelExpenseRates: 'MODULE_TRAVEL_EXPENSE_RATES' as ModulesEnum,
        MonthlyHourlistMinusTimeWarning: 'MONTHLY_HOURLIST_MINUS_TIME_WARNING' as ModulesEnum,
        ModuleVoucherScanning: 'MODULE_VOUCHER_SCANNING' as ModulesEnum,
        ModuleInvoiceScanning: 'MODULE_INVOICE_SCANNING' as ModulesEnum,
        ModuleLogistics: 'MODULE_LOGISTICS' as ModulesEnum,
        ModuleProjectParticipants: 'MODULE_PROJECT_PARTICIPANTS' as ModulesEnum,
        AllowTimeTrackingForParticipantsOnly: 'ALLOW_TIME_TRACKING_FOR_PARTICIPANTS_ONLY' as ModulesEnum,
        ModuleHolydayPlan: 'MODULE_HOLYDAY_PLAN' as ModulesEnum,
        ModuleHourlist: 'MODULE_HOURLIST' as ModulesEnum,
        AutoExportVouchers: 'AUTO_EXPORT_VOUCHERS' as ModulesEnum,
        AutoExportCustomers: 'AUTO_EXPORT_CUSTOMERS' as ModulesEnum,
        ProjectOrderViewDueInScale: 'PROJECT_ORDER_VIEW_DUE_IN_SCALE' as ModulesEnum,
        SendPayslipsByEmail: 'SEND_PAYSLIPS_BY_EMAIL' as ModulesEnum,
        ModuleEmployeeCategory: 'MODULE_EMPLOYEE_CATEGORY' as ModulesEnum,
        AllowMaxOneHolydayPerDay: 'ALLOW_MAX_ONE_HOLYDAY_PER_DAY' as ModulesEnum,
        ProjectNameScheme: 'PROJECT_NAME_SCHEME' as ModulesEnum,
        ModuleCustomerCategory1: 'MODULE_CUSTOMER_CATEGORY1' as ModulesEnum,
        ModuleCustomerCategory2: 'MODULE_CUSTOMER_CATEGORY2' as ModulesEnum,
        ModuleCustomerCategory3: 'MODULE_CUSTOMER_CATEGORY3' as ModulesEnum,
        ModuleProductInvoice: 'MODULE_PRODUCT_INVOICE' as ModulesEnum,
        IsAutoRemindEnabledType0: 'IS_AUTO_REMIND_ENABLED_TYPE0' as ModulesEnum,
        IsAutoRemindEnabledType1: 'IS_AUTO_REMIND_ENABLED_TYPE1' as ModulesEnum,
        InvoiceFromCurrentUser: 'INVOICE_FROM_CURRENT_USER' as ModulesEnum,
        InvoiceBccCurrentUser: 'INVOICE_BCC_CURRENT_USER' as ModulesEnum,
        AutoRemindDaysType0: 'AUTO_REMIND_DAYS_TYPE0' as ModulesEnum,
        AutoRemindDaysType1: 'AUTO_REMIND_DAYS_TYPE1' as ModulesEnum,
        AutoRemindDaysType2: 'AUTO_REMIND_DAYS_TYPE2' as ModulesEnum,
        AutoRemindDaysType3: 'AUTO_REMIND_DAYS_TYPE3' as ModulesEnum,
        PayslipFromCurrentUser: 'PAYSLIP_FROM_CURRENT_USER' as ModulesEnum,
        PayslipBccCurrentUser: 'PAYSLIP_BCC_CURRENT_USER' as ModulesEnum,
        AutoInvoicing: 'AUTO_INVOICING' as ModulesEnum,
        AutoCloseInvoicedProjects: 'AUTO_CLOSE_INVOICED_PROJECTS' as ModulesEnum,
        GeneralActivitiesPerProject: 'GENERAL_ACTIVITIES_PER_PROJECT' as ModulesEnum,
        ValidateHoursPerWeekWh: 'VALIDATE_HOURS_PER_WEEK_WH' as ModulesEnum,
        ValidateHoursPerDay24: 'VALIDATE_HOURS_PER_DAY24' as ModulesEnum,
        ModuleInvoiceFeeComment: 'MODULE_INVOICE_FEE_COMMENT' as ModulesEnum,
        InvoiceRoundoff: 'INVOICE_ROUNDOFF' as ModulesEnum,
        ModuleEmployeeAccounting: 'MODULE_EMPLOYEE_ACCOUNTING' as ModulesEnum,
        ModuleDepartmentAccounting: 'MODULE_DEPARTMENT_ACCOUNTING' as ModulesEnum,
        ModuleProjectAccounting: 'MODULE_PROJECT_ACCOUNTING' as ModulesEnum,
        ModuleProductAccounting: 'MODULE_PRODUCT_ACCOUNTING' as ModulesEnum,
        ModuleSubscriptionAddressList: 'MODULE_SUBSCRIPTION_ADDRESS_LIST' as ModulesEnum,
        SendImportedInvoices: 'SEND_IMPORTED_INVOICES' as ModulesEnum,
        ModuleGtin: 'MODULE_GTIN' as ModulesEnum,
        ModuleElectro: 'MODULE_ELECTRO' as ModulesEnum,
        ModuleNrf: 'MODULE_NRF' as ModulesEnum,
        ApiAutoSendInvoices: 'API_AUTO_SEND_INVOICES' as ModulesEnum,
        ModuleElproffen: 'MODULE_ELPROFFEN' as ModulesEnum,
        IsProductAdmin: 'IS_PRODUCT_ADMIN' as ModulesEnum,
        ModuleOrderExt: 'MODULE_ORDER_EXT' as ModulesEnum,
        ModuleAmortization: 'MODULE_AMORTIZATION' as ModulesEnum,
        ModuleResultBudget: 'MODULE_RESULT_BUDGET' as ModulesEnum,
        ModuleChangeDebtCollector: 'MODULE_CHANGE_DEBT_COLLECTOR' as ModulesEnum,
        InvoicePeriodCount: 'INVOICE_PERIOD_COUNT' as ModulesEnum,
        InvoicingPeriodType: 'INVOICING_PERIOD_TYPE' as ModulesEnum,
        InvoicingPeriodUnit: 'INVOICING_PERIOD_UNIT' as ModulesEnum,
        IsAutoRemindEnabledType2: 'IS_AUTO_REMIND_ENABLED_TYPE2' as ModulesEnum,
        IsAutoRemindEnabledType3: 'IS_AUTO_REMIND_ENABLED_TYPE3' as ModulesEnum,
        SingleCustomerInvoiceCompresses: 'SINGLE_CUSTOMER_INVOICE_COMPRESSES' as ModulesEnum,
        ModuleVoucherTypes: 'MODULE_VOUCHER_TYPES' as ModulesEnum,
        ModuleOnninen123: 'MODULE_ONNINEN123' as ModulesEnum,
        ModuleElektroUnion: 'MODULE_ELEKTRO_UNION' as ModulesEnum,
        ModuleAhlsellPartner: 'MODULE_AHLSELL_PARTNER' as ModulesEnum,
        ModuleArchive: 'MODULE_ARCHIVE' as ModulesEnum,
        VacationBalanceReducedDays: 'VACATION_BALANCE_REDUCED_DAYS' as ModulesEnum,
        IsAccountant: 'IS_ACCOUNTANT' as ModulesEnum,
        IsAuditor: 'IS_AUDITOR' as ModulesEnum,
        IsReseller: 'IS_RESELLER' as ModulesEnum,
        AllowMultipleProjectInvoiceVat: 'ALLOW_MULTIPLE_PROJECT_INVOICE_VAT' as ModulesEnum,
        ProjectActivityBudgetIsMaster: 'PROJECT_ACTIVITY_BUDGET_IS_MASTER' as ModulesEnum,
        HourlistCompletedReminder: 'HOURLIST_COMPLETED_REMINDER' as ModulesEnum,
        ModuleProjectBudgetReferenceFee: 'MODULE_PROJECT_BUDGET_REFERENCE_FEE' as ModulesEnum,
        ConfirmEtcBeforeInvoicing: 'CONFIRM_ETC_BEFORE_INVOICING' as ModulesEnum,
        TravelDietIgnorePosting: 'TRAVEL_DIET_IGNORE_POSTING' as ModulesEnum,
        TravelNightIgnorePosting: 'TRAVEL_NIGHT_IGNORE_POSTING' as ModulesEnum,
        TravelDrivingIgnorePosting: 'TRAVEL_DRIVING_IGNORE_POSTING' as ModulesEnum,
        ModuleWarehouse: 'MODULE_WAREHOUSE' as ModulesEnum,
        OrderShowOrderDate: 'ORDER_SHOW_ORDER_DATE' as ModulesEnum,
        OfferShowOfferDate: 'OFFER_SHOW_OFFER_DATE' as ModulesEnum,
        HourlyRateProjectsWriteUpDown: 'HOURLY_RATE_PROJECTS_WRITE_UP_DOWN' as ModulesEnum,
        ShowRecentlyClosedProjectsOnSupplierInvoice: 'SHOW_RECENTLY_CLOSED_PROJECTS_ON_SUPPLIER_INVOICE' as ModulesEnum,
        FixedPriceProjectsInvoiceByProgress: 'FIXED_PRICE_PROJECTS_INVOICE_BY_PROGRESS' as ModulesEnum,
        ModuleInvoiceImport: 'MODULE_INVOICE_IMPORT' as ModulesEnum,
        ModuleEmail: 'MODULE_EMAIL' as ModulesEnum,
        ProductSetCostFromOrderLine: 'PRODUCT_SET_COST_FROM_ORDER_LINE' as ModulesEnum,
        InvoiceShowMarkupDiscount: 'INVOICE_SHOW_MARKUP_DISCOUNT' as ModulesEnum,
        InvoiceShowProductNumber: 'INVOICE_SHOW_PRODUCT_NUMBER' as ModulesEnum,
        ModuleNetsEboks: 'MODULE_NETS_EBOKS' as ModulesEnum,
        ModuleNetsPrintSalary: 'MODULE_NETS_PRINT_SALARY' as ModulesEnum,
        ModuleNetsPrintInvoice: 'MODULE_NETS_PRINT_INVOICE' as ModulesEnum,
        ModuleBoligmappa: 'MODULE_BOLIGMAPPA' as ModulesEnum,
        ModuleApproveVoucher: 'MODULE_APPROVE_VOUCHER' as ModulesEnum,
        ModuleApproveDepartmentVoucher: 'MODULE_APPROVE_DEPARTMENT_VOUCHER' as ModulesEnum,
        ModuleApproveProjectVoucher: 'MODULE_APPROVE_PROJECT_VOUCHER' as ModulesEnum,
        DefaultIsPrivateCustomer: 'DEFAULT_IS_PRIVATE_CUSTOMER' as ModulesEnum,
        DefaultChargeOnProject: 'DEFAULT_CHARGE_ON_PROJECT' as ModulesEnum,
        ModuleMesan: 'MODULE_MESAN' as ModulesEnum,
        ModuleMultipleLedgers: 'MODULE_MULTIPLE_LEDGERS' as ModulesEnum,
        ModuleDivisions: 'MODULE_DIVISIONS' as ModulesEnum,
        OfferFromCurrentUser: 'OFFER_FROM_CURRENT_USER' as ModulesEnum,
        OrderConfirmationCurrentUser: 'ORDER_CONFIRMATION_CURRENT_USER' as ModulesEnum,
        ModuleAccountantConnectClient: 'MODULE_ACCOUNTANT_CONNECT_CLIENT' as ModulesEnum,
        ModuleAdditionProjectMarkup: 'MODULE_ADDITION_PROJECT_MARKUP' as ModulesEnum,
        ModuleWageProjectAccounting: 'MODULE_WAGE_PROJECT_ACCOUNTING' as ModulesEnum,
        ModuleWageAmortization: 'MODULE_WAGE_AMORTIZATION' as ModulesEnum,
        TripletexSupportLoginAccess: 'TRIPLETEX_SUPPORT_LOGIN_ACCESS' as ModulesEnum,
        ModuleActivityHourlyWageWageCode: 'MODULE_ACTIVITY_HOURLY_WAGE_WAGE_CODE' as ModulesEnum,
        ModuleSubscriptionsPeriodisation: 'MODULE_SUBSCRIPTIONS_PERIODISATION' as ModulesEnum,
        ModuleApi20: 'MODULE_API_20' as ModulesEnum,
        RemitVouchersOnly: 'REMIT_VOUCHERS_ONLY' as ModulesEnum,
        ModuleFinanceTax: 'MODULE_FINANCE_TAX' as ModulesEnum,
        ModuleSmartScan: 'MODULE_SMART_SCAN' as ModulesEnum,
        ModuleOrderOut: 'MODULE_ORDER_OUT' as ModulesEnum,
        IsTravelReportTaxFreeDrivingRates: 'IS_TRAVEL_REPORT_TAX_FREE_DRIVING_RATES' as ModulesEnum,
        IncludeTripletexAccountantInvoiceSummaryCsv: 'INCLUDE_TRIPLETEX_ACCOUNTANT_INVOICE_SUMMARY_CSV' as ModulesEnum,
        HideInactiveProjects: 'HIDE_INACTIVE_PROJECTS' as ModulesEnum,
        InvoiceIncludeCommonAttachments: 'INVOICE_INCLUDE_COMMON_ATTACHMENTS' as ModulesEnum,
        ModuleControlSchemaRequiredHourTracking: 'MODULE_CONTROL_SCHEMA_REQUIRED_HOUR_TRACKING' as ModulesEnum,
        ModuleControlSchemaRequiredInvoicing: 'MODULE_CONTROL_SCHEMA_REQUIRED_INVOICING' as ModulesEnum,
        ModuleInvoiceOptionVipps: 'MODULE_INVOICE_OPTION_VIPPS' as ModulesEnum
    };
}


