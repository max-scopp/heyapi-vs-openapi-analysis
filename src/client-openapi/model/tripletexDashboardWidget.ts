/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface TripletexDashboardWidget { 
    readonly id?: TripletexDashboardWidget.IdEnum;
    readonly hidden?: boolean;
}
export namespace TripletexDashboardWidget {
    export type IdEnum = 'BANKING' | 'VOUCHER_SUMMARY' | 'INVOICE_SUMMARY' | 'SALARY_SUMMARY' | 'UPSALE_SALARY' | 'UPSALE_AUTOMATION' | 'INCOME_AND_COST_CHART' | 'FEEDBACK_DEADLINES_AND_TASKS_SURVEY' | 'ONBOARDING' | 'HELP_CENTER' | 'HELP_CENTER_AGRO' | 'HELP_CENTER_AI' | 'HELP_CENTER_EACCOUNTING' | 'HELP_CENTER_MAMUT' | 'DASHBOARD_REMINDER' | 'REMINDER' | 'TASKS';
    export const IdEnum = {
        Banking: 'BANKING' as IdEnum,
        VoucherSummary: 'VOUCHER_SUMMARY' as IdEnum,
        InvoiceSummary: 'INVOICE_SUMMARY' as IdEnum,
        SalarySummary: 'SALARY_SUMMARY' as IdEnum,
        UpsaleSalary: 'UPSALE_SALARY' as IdEnum,
        UpsaleAutomation: 'UPSALE_AUTOMATION' as IdEnum,
        IncomeAndCostChart: 'INCOME_AND_COST_CHART' as IdEnum,
        FeedbackDeadlinesAndTasksSurvey: 'FEEDBACK_DEADLINES_AND_TASKS_SURVEY' as IdEnum,
        Onboarding: 'ONBOARDING' as IdEnum,
        HelpCenter: 'HELP_CENTER' as IdEnum,
        HelpCenterAgro: 'HELP_CENTER_AGRO' as IdEnum,
        HelpCenterAi: 'HELP_CENTER_AI' as IdEnum,
        HelpCenterEaccounting: 'HELP_CENTER_EACCOUNTING' as IdEnum,
        HelpCenterMamut: 'HELP_CENTER_MAMUT' as IdEnum,
        DashboardReminder: 'DASHBOARD_REMINDER' as IdEnum,
        Reminder: 'REMINDER' as IdEnum,
        Tasks: 'TASKS' as IdEnum
    };
}


