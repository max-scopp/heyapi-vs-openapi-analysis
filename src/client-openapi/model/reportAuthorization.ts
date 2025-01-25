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
import { Report } from './report';
import { Change } from './change';


export interface ReportAuthorization { 
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    granter?: Employee;
    /**
     * If set specifies the delegator to the granter proxy employee.
     */
    granterDelegatorId?: number;
    subject: Employee;
    /**
     * If set specifies the delegator to the subject proxy employee.
     */
    subjectDelegatorId?: number;
    report: Report;
    /**
     * The status of this grant of authorization
     */
    status: ReportAuthorization.StatusEnum;
    /**
     * The specific permission this grant of authorization is for
     */
    permission: ReportAuthorization.PermissionEnum;
}
export namespace ReportAuthorization {
    export type StatusEnum = 'Rejected' | 'Granted';
    export const StatusEnum = {
        Rejected: 'Rejected' as StatusEnum,
        Granted: 'Granted' as StatusEnum
    };
    export type PermissionEnum = 'Invalid' | 'ViewResult' | 'Owner';
    export const PermissionEnum = {
        Invalid: 'Invalid' as PermissionEnum,
        ViewResult: 'ViewResult' as PermissionEnum,
        Owner: 'Owner' as PermissionEnum
    };
}


