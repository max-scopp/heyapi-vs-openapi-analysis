/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { SupplierImport } from './supplierImport';
import { ImportRowErrorMessage } from './importRowErrorMessage';
import { Change } from './change';
import { SupplierImportRowContent } from './supplierImportRowContent';


export interface SupplierPotential { 
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    importComponent: SupplierImport;
    rowContent?: SupplierImportRowContent;
    /**
     * errorMessage
     */
    errorMessage?: Array<ImportRowErrorMessage>;
    rowStatus?: SupplierPotential.RowStatusEnum;
    readonly rowNumber?: number;
}
export namespace SupplierPotential {
    export type RowStatusEnum = 'NEW' | 'UPDATE' | 'FAIL' | 'DUPLICATE';
    export const RowStatusEnum = {
        New: 'NEW' as RowStatusEnum,
        Update: 'UPDATE' as RowStatusEnum,
        Fail: 'FAIL' as RowStatusEnum,
        Duplicate: 'DUPLICATE' as RowStatusEnum
    };
}


