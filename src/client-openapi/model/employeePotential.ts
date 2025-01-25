/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { EmployeeImportRowContent } from './employeeImportRowContent';
import { EmployeeImport } from './employeeImport';
import { ImportRowErrorMessage } from './importRowErrorMessage';
import { Change } from './change';


export interface EmployeePotential { 
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    importComponent: EmployeeImport;
    rowContent?: EmployeeImportRowContent;
    /**
     * errorMessage
     */
    errorMessage?: Array<ImportRowErrorMessage>;
    rowStatus?: EmployeePotential.RowStatusEnum;
    readonly rowNumber?: number;
}
export namespace EmployeePotential {
    export type RowStatusEnum = 'NEW' | 'UPDATE' | 'FAIL' | 'DUPLICATE';
    export const RowStatusEnum = {
        New: 'NEW' as RowStatusEnum,
        Update: 'UPDATE' as RowStatusEnum,
        Fail: 'FAIL' as RowStatusEnum,
        Duplicate: 'DUPLICATE' as RowStatusEnum
    };
}


