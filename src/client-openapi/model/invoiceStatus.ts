/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface InvoiceStatus { 
    readonly title?: string;
    readonly level?: InvoiceStatus.LevelEnum;
}
export namespace InvoiceStatus {
    export type LevelEnum = 'NONE' | 'SUCCESS' | 'WARNING' | 'CRITICAL';
    export const LevelEnum = {
        None: 'NONE' as LevelEnum,
        Success: 'SUCCESS' as LevelEnum,
        Warning: 'WARNING' as LevelEnum,
        Critical: 'CRITICAL' as LevelEnum
    };
}


