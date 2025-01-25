/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Project } from './project';
import { Department } from './department';
import { Employee } from './employee';
import { Change } from './change';
import { Voucher } from './voucher';


export interface VoucherApprovalListElement { 
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    voucher?: Voucher;
    employee?: Employee;
    actionEmployee?: Employee;
    readonly status?: number;
    readonly organisationLevel?: number;
    readonly isVendorAttestant?: boolean;
    department?: Department;
    project?: Project;
    comment?: string;
    commentFromOriginator?: string;
    readonly actionDate?: string;
    readonly actionEmployeeName?: string;
    readonly actionEmployeePictureId?: number;
    readonly actionEmployeeIsAuthCompanyAttestor?: boolean;
}

