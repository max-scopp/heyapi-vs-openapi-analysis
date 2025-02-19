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


export interface EmployeePreferences { 
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    employeeId?: number;
    companyId?: number;
    filterOnProjectParticipant?: boolean;
    filterOnProjectManager?: boolean;
    language?: EmployeePreferences.LanguageEnum;
}
export namespace EmployeePreferences {
    export type LanguageEnum = 'NO' | 'EN';
    export const LanguageEnum = {
        No: 'NO' as LanguageEnum,
        En: 'EN' as LanguageEnum
    };
}


