/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { ReportSettingsOptions } from './reportSettingsOptions';


export interface ReportSettingsFilters { 
    order?: Array<ReportSettingsFilters.OrderEnum>;
    options?: ReportSettingsOptions;
    version?: number;
}
export namespace ReportSettingsFilters {
    export type OrderEnum = 'period' | 'account' | 'customer' | 'supplier' | 'employee' | 'department' | 'project' | 'product' | 'activity';
    export const OrderEnum = {
        Period: 'period' as OrderEnum,
        Account: 'account' as OrderEnum,
        Customer: 'customer' as OrderEnum,
        Supplier: 'supplier' as OrderEnum,
        Employee: 'employee' as OrderEnum,
        Department: 'department' as OrderEnum,
        Project: 'project' as OrderEnum,
        Product: 'product' as OrderEnum,
        Activity: 'activity' as OrderEnum
    };
}


