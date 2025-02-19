/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Account } from './account';
import { Project } from './project';
import { Department } from './department';
import { Change } from './change';


export interface Asset { 
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    name: string;
    displayName?: string;
    description?: string;
    dateOfAcquisition: string;
    /**
     * Acquisition cost.
     */
    acquisitionCost?: number;
    account?: Account;
    /**
     * Incoming balance for the asset.
     */
    incomingBalance?: number;
    /**
     * Lifetime in months for the asset.
     */
    lifetime?: number;
    /**
     * Status
     */
    readonly status?: Asset.StatusEnum;
    depreciationRemainingValue?: number;
    depreciationAccount?: Account;
    hasHistoryFromExternalSystem?: boolean;
    externalLastDepreciation?: string;
    externalLastAccountedValue?: number;
    externalAccumulatedDepreciation?: number;
    /**
     * Depreciation method
     */
    depreciationMethod?: Asset.DepreciationMethodEnum;
    depreciationFrom?: string;
    accumulatedDepreciation?: number;
    depreciationRate?: number;
    department?: Department;
    project?: Project;
    readonly startingBalance?: number;
    readonly balanceIn?: number;
    readonly balanceOut?: number;
    readonly balanceChange?: number;
    readonly depreciationBasis?: number;
    readonly numberOfMonths?: number;
    readonly annualDepreciation?: number;
    readonly depreciationDiscrepancy?: number;
    readonly depreciationAmount?: number;
    readonly totalDepreciationAmount?: number;
    saleDate?: string;
}
export namespace Asset {
    export type StatusEnum = 'UNKNOWN' | 'MANUAL' | 'NO_DEPRECIATION' | 'INVALID_DATE' | 'MISSING_TRANS_TYPE' | 'MISSING_INFO' | 'READY_TO_DEPRECIATE' | 'CORRECTION_NEEDED' | 'COMPLETED' | 'REST_VALUE' | 'NOTHING_TO_DEPRECIATE';
    export const StatusEnum = {
        Unknown: 'UNKNOWN' as StatusEnum,
        Manual: 'MANUAL' as StatusEnum,
        NoDepreciation: 'NO_DEPRECIATION' as StatusEnum,
        InvalidDate: 'INVALID_DATE' as StatusEnum,
        MissingTransType: 'MISSING_TRANS_TYPE' as StatusEnum,
        MissingInfo: 'MISSING_INFO' as StatusEnum,
        ReadyToDepreciate: 'READY_TO_DEPRECIATE' as StatusEnum,
        CorrectionNeeded: 'CORRECTION_NEEDED' as StatusEnum,
        Completed: 'COMPLETED' as StatusEnum,
        RestValue: 'REST_VALUE' as StatusEnum,
        NothingToDepreciate: 'NOTHING_TO_DEPRECIATE' as StatusEnum
    };
    export type DepreciationMethodEnum = 'MANUAL' | 'TAX_RELATED' | 'STRAIGHT_LINE' | 'CUSTOMIZED_AMOUNT' | 'NO_DEPRECIATION';
    export const DepreciationMethodEnum = {
        Manual: 'MANUAL' as DepreciationMethodEnum,
        TaxRelated: 'TAX_RELATED' as DepreciationMethodEnum,
        StraightLine: 'STRAIGHT_LINE' as DepreciationMethodEnum,
        CustomizedAmount: 'CUSTOMIZED_AMOUNT' as DepreciationMethodEnum,
        NoDepreciation: 'NO_DEPRECIATION' as DepreciationMethodEnum
    };
}


