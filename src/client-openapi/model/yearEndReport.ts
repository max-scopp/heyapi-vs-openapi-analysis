/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { TangibleFixedAsset } from './tangibleFixedAsset';
import { TaxReturnSubmissionResult } from './taxReturnSubmissionResult';
import { YearEndReportType } from './yearEndReportType';
import { BasicData } from './basicData';
import { Change } from './change';
import { AltinnInstance } from './altinnInstance';


export interface YearEndReport { 
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    readonly year?: number;
    sentDate?: string;
    yearEndReportBasicData?: BasicData;
    status?: YearEndReport.StatusEnum;
    altinnMetadata?: AltinnInstance;
    submissionResult?: TaxReturnSubmissionResult;
    submissionInProgress?: boolean;
    submissionAttemptDate?: string;
    annualResult?: number;
    annualResultPreviousYear?: number;
    asset?: number;
    assetPreviousYear?: number;
    equityAndDebt?: number;
    equityAndDebtPreviousYear?: number;
    operatingRevenue?: YearEndReportType;
    operatingExpense?: YearEndReportType;
    capitalIncome?: YearEndReportType;
    capitalCost?: YearEndReportType;
    extraordinaryCost?: YearEndReportType;
    taxCost?: YearEndReportType;
    fixedAsset?: YearEndReportType;
    currentAsset?: YearEndReportType;
    equity?: YearEndReportType;
    debt?: YearEndReportType;
    currentDebt?: YearEndReportType;
    inventories?: YearEndReportType;
    yearEndReportPosting?: YearEndReportType;
    tangibleFixedAssets?: Array<TangibleFixedAsset>;
    wealthFromBusinessActivity?: YearEndReportType;
    showInfoSumDepreciation?: boolean;
    showInfoSumRevenueRecognitionNegBalance?: boolean;
}
export namespace YearEndReport {
    export type StatusEnum = 'STARTED' | 'UPDATED' | 'RESTARTED' | 'COMPLEMENTARY_DATA_DOWNLOADED' | 'COMPLEMENTARY_DATA_MODIFIED' | 'PREVALIDATED_ACCEPTED' | 'PREVALIDATED_DECLINED' | 'ALTINN_INSTANCE_CREATED_AND_INITIATED' | 'ALTINN_INSTANCE_MAIN_CONTENT_UPLOADED' | 'ALTINN_INSTANCE_ATTACHMENT_UPLOADED' | 'ALTINN_INSTANCE_CLOSED' | 'ALTINN_INSTANCE_APPROVED_FOR_TRANSFER' | 'CONTENT_PROCESSING_AT_RECIPIENT' | 'ALTINN_INSTANCE_HAS_FEEDBACK' | 'FEEDBACK_ACCEPTED' | 'FEEDBACK_DECLINED' | 'USER_MARKED_AS_DELIVERED';
    export const StatusEnum = {
        Started: 'STARTED' as StatusEnum,
        Updated: 'UPDATED' as StatusEnum,
        Restarted: 'RESTARTED' as StatusEnum,
        ComplementaryDataDownloaded: 'COMPLEMENTARY_DATA_DOWNLOADED' as StatusEnum,
        ComplementaryDataModified: 'COMPLEMENTARY_DATA_MODIFIED' as StatusEnum,
        PrevalidatedAccepted: 'PREVALIDATED_ACCEPTED' as StatusEnum,
        PrevalidatedDeclined: 'PREVALIDATED_DECLINED' as StatusEnum,
        AltinnInstanceCreatedAndInitiated: 'ALTINN_INSTANCE_CREATED_AND_INITIATED' as StatusEnum,
        AltinnInstanceMainContentUploaded: 'ALTINN_INSTANCE_MAIN_CONTENT_UPLOADED' as StatusEnum,
        AltinnInstanceAttachmentUploaded: 'ALTINN_INSTANCE_ATTACHMENT_UPLOADED' as StatusEnum,
        AltinnInstanceClosed: 'ALTINN_INSTANCE_CLOSED' as StatusEnum,
        AltinnInstanceApprovedForTransfer: 'ALTINN_INSTANCE_APPROVED_FOR_TRANSFER' as StatusEnum,
        ContentProcessingAtRecipient: 'CONTENT_PROCESSING_AT_RECIPIENT' as StatusEnum,
        AltinnInstanceHasFeedback: 'ALTINN_INSTANCE_HAS_FEEDBACK' as StatusEnum,
        FeedbackAccepted: 'FEEDBACK_ACCEPTED' as StatusEnum,
        FeedbackDeclined: 'FEEDBACK_DECLINED' as StatusEnum,
        UserMarkedAsDelivered: 'USER_MARKED_AS_DELIVERED' as StatusEnum
    };
}


