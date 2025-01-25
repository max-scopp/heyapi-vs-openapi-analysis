/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Bank } from './bank';
import { Change } from './change';


export interface BankMaintenancePeriod { 
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    bank: Bank;
    /**
     * The integration for witch maintenance period if for.
     */
    integration?: BankMaintenancePeriod.IntegrationEnum;
    /**
     * The start date time of maintenance period.
     */
    startDateTime?: string;
    /**
     * The end date time of maintenance period.
     */
    endDateTime?: string;
    /**
     * Bank platform
     */
    platform?: BankMaintenancePeriod.PlatformEnum;
}
export namespace BankMaintenancePeriod {
    export type IntegrationEnum = 'AUTOPAY' | 'ZTL';
    export const IntegrationEnum = {
        Autopay: 'AUTOPAY' as IntegrationEnum,
        Ztl: 'ZTL' as IntegrationEnum
    };
    export type PlatformEnum = 'UNKNOWN' | 'TIETO_EVRY' | 'SDC' | 'INDEPENDENT';
    export const PlatformEnum = {
        Unknown: 'UNKNOWN' as PlatformEnum,
        TietoEvry: 'TIETO_EVRY' as PlatformEnum,
        Sdc: 'SDC' as PlatformEnum,
        Independent: 'INDEPENDENT' as PlatformEnum
    };
}


