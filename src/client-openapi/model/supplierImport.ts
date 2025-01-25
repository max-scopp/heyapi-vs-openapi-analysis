/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Employee } from './employee';
import { Change } from './change';
import { SupplierImportHeader } from './supplierImportHeader';
import { Document } from './document';


export interface SupplierImport { 
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    importFile?: Document;
    separator?: SupplierImport.SeparatorEnum;
    status?: SupplierImport.StatusEnum;
    readonly importHeaders?: Array<SupplierImportHeader>;
    startDate?: string;
    employee?: Employee;
    readonly countCreated?: number;
    readonly countUpdated?: number;
    readonly countIgnored?: number;
}
export namespace SupplierImport {
    export type SeparatorEnum = 'NONE' | 'COMMA' | 'SEMICOLON';
    export const SeparatorEnum = {
        None: 'NONE' as SeparatorEnum,
        Comma: 'COMMA' as SeparatorEnum,
        Semicolon: 'SEMICOLON' as SeparatorEnum
    };
    export type StatusEnum = 'FILE_UPLOADED' | 'FIELDS_MAPPED' | 'IMPORT_STARTED' | 'IMPORT_COMPLETED' | 'DELETE_DATA_STARTED';
    export const StatusEnum = {
        FileUploaded: 'FILE_UPLOADED' as StatusEnum,
        FieldsMapped: 'FIELDS_MAPPED' as StatusEnum,
        ImportStarted: 'IMPORT_STARTED' as StatusEnum,
        ImportCompleted: 'IMPORT_COMPLETED' as StatusEnum,
        DeleteDataStarted: 'DELETE_DATA_STARTED' as StatusEnum
    };
}


