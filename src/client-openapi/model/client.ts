/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Address } from './address';
import { Currency } from './currency';
import { Change } from './change';


export interface Client { 
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    name: string;
    readonly displayName?: string;
    startDate?: string;
    endDate?: string;
    organizationNumber?: string;
    email?: string;
    phoneNumber?: string;
    phoneNumberMobile?: string;
    faxNumber?: string;
    address: Address;
    type: Client.TypeEnum;
    currency?: Currency;
    readonly accountantOrSimilar?: boolean;
    /**
     * If the company was migrated from another system, this field will contain the name of the system it was migrated from.
     */
    readonly companyMigration?: Client.CompanyMigrationEnum;
    readonly invoiceShowDeliveryDate?: boolean;
    readonly customerCompanyId?: number;
}
export namespace Client {
    export type TypeEnum = 'NONE' | 'ENK' | 'AS' | 'NUF' | 'ANS' | 'DA' | 'PRE' | 'KS' | 'ASA' | 'BBL' | 'BRL' | 'GFS' | 'SPA' | 'SF' | 'IKS' | 'KF_FKF' | 'FCD' | 'EOFG' | 'BA' | 'STI' | 'ORG' | 'ESEK' | 'SA' | 'SAM' | 'BO' | 'VPFO' | 'OS' | 'FLI' | 'Other';
    export const TypeEnum = {
        None: 'NONE' as TypeEnum,
        Enk: 'ENK' as TypeEnum,
        As: 'AS' as TypeEnum,
        Nuf: 'NUF' as TypeEnum,
        Ans: 'ANS' as TypeEnum,
        Da: 'DA' as TypeEnum,
        Pre: 'PRE' as TypeEnum,
        Ks: 'KS' as TypeEnum,
        Asa: 'ASA' as TypeEnum,
        Bbl: 'BBL' as TypeEnum,
        Brl: 'BRL' as TypeEnum,
        Gfs: 'GFS' as TypeEnum,
        Spa: 'SPA' as TypeEnum,
        Sf: 'SF' as TypeEnum,
        Iks: 'IKS' as TypeEnum,
        KfFkf: 'KF_FKF' as TypeEnum,
        Fcd: 'FCD' as TypeEnum,
        Eofg: 'EOFG' as TypeEnum,
        Ba: 'BA' as TypeEnum,
        Sti: 'STI' as TypeEnum,
        Org: 'ORG' as TypeEnum,
        Esek: 'ESEK' as TypeEnum,
        Sa: 'SA' as TypeEnum,
        Sam: 'SAM' as TypeEnum,
        Bo: 'BO' as TypeEnum,
        Vpfo: 'VPFO' as TypeEnum,
        Os: 'OS' as TypeEnum,
        Fli: 'FLI' as TypeEnum,
        Other: 'Other' as TypeEnum
    };
    export type CompanyMigrationEnum = 'NONE' | 'AGRO';
    export const CompanyMigrationEnum = {
        None: 'NONE' as CompanyMigrationEnum,
        Agro: 'AGRO' as CompanyMigrationEnum
    };
}


