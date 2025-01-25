/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Altinn2ReceptionReceipt } from './altinn2ReceptionReceipt';


export interface AnnualAccountsSubmissionResult { 
    failureStep: AnnualAccountsSubmissionResult.FailureStepEnum;
    failureCategory?: AnnualAccountsSubmissionResult.FailureCategoryEnum;
    failureMainMessage?: string;
    receptionReceipt?: Altinn2ReceptionReceipt;
}
export namespace AnnualAccountsSubmissionResult {
    export type FailureStepEnum = 'INITIATING_PERSONAL_AUTHENTICATION' | 'FETCHING_SIGNING_TEXT' | 'SUBMITTING' | 'FETCHING_ASYNC_RECEIPT' | 'NONE';
    export const FailureStepEnum = {
        InitiatingPersonalAuthentication: 'INITIATING_PERSONAL_AUTHENTICATION' as FailureStepEnum,
        FetchingSigningText: 'FETCHING_SIGNING_TEXT' as FailureStepEnum,
        Submitting: 'SUBMITTING' as FailureStepEnum,
        FetchingAsyncReceipt: 'FETCHING_ASYNC_RECEIPT' as FailureStepEnum,
        None: 'NONE' as FailureStepEnum
    };
    export type FailureCategoryEnum = 'UNKNOWN' | 'INTERNAL_VALIDATION_FAILED' | 'EXTERNAL_SERVICE_OTHER_ERROR' | 'EXTERNAL_SERVICE_APPLICATION_ERROR' | 'UNEXPECTED_RESPONSE_CONTENT';
    export const FailureCategoryEnum = {
        Unknown: 'UNKNOWN' as FailureCategoryEnum,
        InternalValidationFailed: 'INTERNAL_VALIDATION_FAILED' as FailureCategoryEnum,
        ExternalServiceOtherError: 'EXTERNAL_SERVICE_OTHER_ERROR' as FailureCategoryEnum,
        ExternalServiceApplicationError: 'EXTERNAL_SERVICE_APPLICATION_ERROR' as FailureCategoryEnum,
        UnexpectedResponseContent: 'UNEXPECTED_RESPONSE_CONTENT' as FailureCategoryEnum
    };
}


