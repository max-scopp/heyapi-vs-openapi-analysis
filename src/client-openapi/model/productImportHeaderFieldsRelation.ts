/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { ProductImportHeader } from './productImportHeader';
import { Change } from './change';
import { ProductImportField } from './productImportField';
import { ProductImport } from './productImport';


export interface ProductImportHeaderFieldsRelation { 
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    productImport: ProductImport;
    header: ProductImportHeader;
    field: ProductImportField;
}

