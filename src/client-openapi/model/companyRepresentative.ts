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


export interface CompanyRepresentative { 
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    readonly name?: string;
    roleInCompany?: CompanyRepresentative.RoleInCompanyEnum;
    /**
     * birthdate
     */
    readonly birthdate?: string;
    readonly companyName?: string;
    signatureStatus?: CompanyRepresentative.SignatureStatusEnum;
    readonly description?: string;
    email?: string;
    readonly employeeId?: number;
    canReceiveReminder?: boolean;
}
export namespace CompanyRepresentative {
    export type RoleInCompanyEnum = 'UNKNOWN' | 'DAGL' | 'LEDE' | 'NEST' | 'MEDL' | 'DTPR' | 'DTSO' | 'KOMP' | 'INNH' | 'SIGN' | 'SIFE' | 'SIHV' | 'PROK' | 'POFE' | 'POHV';
    export const RoleInCompanyEnum = {
        Unknown: 'UNKNOWN' as RoleInCompanyEnum,
        Dagl: 'DAGL' as RoleInCompanyEnum,
        Lede: 'LEDE' as RoleInCompanyEnum,
        Nest: 'NEST' as RoleInCompanyEnum,
        Medl: 'MEDL' as RoleInCompanyEnum,
        Dtpr: 'DTPR' as RoleInCompanyEnum,
        Dtso: 'DTSO' as RoleInCompanyEnum,
        Komp: 'KOMP' as RoleInCompanyEnum,
        Innh: 'INNH' as RoleInCompanyEnum,
        Sign: 'SIGN' as RoleInCompanyEnum,
        Sife: 'SIFE' as RoleInCompanyEnum,
        Sihv: 'SIHV' as RoleInCompanyEnum,
        Prok: 'PROK' as RoleInCompanyEnum,
        Pofe: 'POFE' as RoleInCompanyEnum,
        Pohv: 'POHV' as RoleInCompanyEnum
    };
    export type SignatureStatusEnum = 'NOT_SIGNED' | 'PENDING_SIGNATURE' | 'SIGNED' | 'NOT_A_SIGNER';
    export const SignatureStatusEnum = {
        NotSigned: 'NOT_SIGNED' as SignatureStatusEnum,
        PendingSignature: 'PENDING_SIGNATURE' as SignatureStatusEnum,
        Signed: 'SIGNED' as SignatureStatusEnum,
        NotASigner: 'NOT_A_SIGNER' as SignatureStatusEnum
    };
}


