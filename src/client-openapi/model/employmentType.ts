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


export interface EmploymentType { 
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    /**
     * Defines the employment type option. 
     */
    employmentType: EmploymentType.EmploymentTypeEnum;
    nameNO?: string;
    code?: string;
}
export namespace EmploymentType {
    export type EmploymentTypeEnum = 'ORDINARY' | 'MARITIME' | 'FREELANCE' | 'NOT_CHOSEN';
    export const EmploymentTypeEnum = {
        Ordinary: 'ORDINARY' as EmploymentTypeEnum,
        Maritime: 'MARITIME' as EmploymentTypeEnum,
        Freelance: 'FREELANCE' as EmploymentTypeEnum,
        NotChosen: 'NOT_CHOSEN' as EmploymentTypeEnum
    };
}


