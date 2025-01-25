/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { YearEndReport } from './yearEndReport';
import { Change } from './change';


export interface ShareholderRegisterData { 
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    yearEndReport?: YearEndReport;
    groupId?: number;
    shareholderRegisterDataType?: ShareholderRegisterData.ShareholderRegisterDataTypeEnum;
    shareholderRegisterDataSubType?: ShareholderRegisterData.ShareholderRegisterDataSubTypeEnum;
    shareholderRegisterDataSubSubType?: ShareholderRegisterData.ShareholderRegisterDataSubSubTypeEnum;
    subTypeGroupId?: number;
    subSubTypeGroupId?: number;
    postType: ShareholderRegisterData.PostTypeEnum;
    postValue: string;
    altinnValue?: string;
}
export namespace ShareholderRegisterData {
    export type ShareholderRegisterDataTypeEnum = 'COMPANY_INFO' | 'CONTACT_INFO' | 'SHAREHOLDER_INFO' | 'EVENT_AND_TRANSACTION';
    export const ShareholderRegisterDataTypeEnum = {
        CompanyInfo: 'COMPANY_INFO' as ShareholderRegisterDataTypeEnum,
        ContactInfo: 'CONTACT_INFO' as ShareholderRegisterDataTypeEnum,
        ShareholderInfo: 'SHAREHOLDER_INFO' as ShareholderRegisterDataTypeEnum,
        EventAndTransaction: 'EVENT_AND_TRANSACTION' as ShareholderRegisterDataTypeEnum
    };
    export type ShareholderRegisterDataSubTypeEnum = 'NONE' | 'COMPANY_KEY_INFO' | 'COMPANY_EVENT' | 'SHAREHOLDER_INFO';
    export const ShareholderRegisterDataSubTypeEnum = {
        None: 'NONE' as ShareholderRegisterDataSubTypeEnum,
        CompanyKeyInfo: 'COMPANY_KEY_INFO' as ShareholderRegisterDataSubTypeEnum,
        CompanyEvent: 'COMPANY_EVENT' as ShareholderRegisterDataSubTypeEnum,
        ShareholderInfo: 'SHAREHOLDER_INFO' as ShareholderRegisterDataSubTypeEnum
    };
    export type ShareholderRegisterDataSubSubTypeEnum = 'NONE' | 'EVENT_SHAREHOLDER';
    export const ShareholderRegisterDataSubSubTypeEnum = {
        None: 'NONE' as ShareholderRegisterDataSubSubTypeEnum,
        EventShareholder: 'EVENT_SHAREHOLDER' as ShareholderRegisterDataSubSubTypeEnum
    };
    export type PostTypeEnum = 'SHARE_CLASS' | 'OPENING_BALANCE_SHARE_CAPITAL' | 'OPENING_BALANCE_NOMINAL_VALUE_PER_SHARE' | 'OPENING_BALANCE_NUMBER_OF_SHARES' | 'OPENING_BALANCE_PAID_SHARE_CAPITAL' | 'CLOSING_BALANCE_PREMIUM_PAID' | 'EVENT_TYPE' | 'EVENT_DATE' | 'EVENT_DISTRIBUTED_TOTAL' | 'EVENT_SHAREHOLDER_ID' | 'SHAREHOLDER_NO_OF_SHARES' | 'DISTRIBUTE_MANUALLY' | 'EVENT_TIME' | 'FOUNDATION_PAID_UP_SHARE_CAPITAL' | 'FOUNDATION_PAID_UP_PREMIUM' | 'FOUNDATION_NO_OF_SHARES' | 'SHAREHOLDER_DISTRIBUTED_DIVIDEND' | 'CONTACT_NAME' | 'CONTACT_ROLE' | 'CONTACT_EMAIL' | 'CONTACT_PHONE' | 'SHAREHOLDER_ID' | 'NO_OF_SHARES_LAST_YEAR' | 'UPDATED_BY' | 'UPDATED_DATE' | 'TRANSACTION_TYPE' | 'TRANSACTION_DATE' | 'TRANSACTION_TIME' | 'SELLER_ID' | 'BUYER_ID' | 'TRANSACTION_NUMBER_OF_SHARES' | 'REMUNERATION';
    export const PostTypeEnum = {
        ShareClass: 'SHARE_CLASS' as PostTypeEnum,
        OpeningBalanceShareCapital: 'OPENING_BALANCE_SHARE_CAPITAL' as PostTypeEnum,
        OpeningBalanceNominalValuePerShare: 'OPENING_BALANCE_NOMINAL_VALUE_PER_SHARE' as PostTypeEnum,
        OpeningBalanceNumberOfShares: 'OPENING_BALANCE_NUMBER_OF_SHARES' as PostTypeEnum,
        OpeningBalancePaidShareCapital: 'OPENING_BALANCE_PAID_SHARE_CAPITAL' as PostTypeEnum,
        ClosingBalancePremiumPaid: 'CLOSING_BALANCE_PREMIUM_PAID' as PostTypeEnum,
        EventType: 'EVENT_TYPE' as PostTypeEnum,
        EventDate: 'EVENT_DATE' as PostTypeEnum,
        EventDistributedTotal: 'EVENT_DISTRIBUTED_TOTAL' as PostTypeEnum,
        EventShareholderId: 'EVENT_SHAREHOLDER_ID' as PostTypeEnum,
        ShareholderNoOfShares: 'SHAREHOLDER_NO_OF_SHARES' as PostTypeEnum,
        DistributeManually: 'DISTRIBUTE_MANUALLY' as PostTypeEnum,
        EventTime: 'EVENT_TIME' as PostTypeEnum,
        FoundationPaidUpShareCapital: 'FOUNDATION_PAID_UP_SHARE_CAPITAL' as PostTypeEnum,
        FoundationPaidUpPremium: 'FOUNDATION_PAID_UP_PREMIUM' as PostTypeEnum,
        FoundationNoOfShares: 'FOUNDATION_NO_OF_SHARES' as PostTypeEnum,
        ShareholderDistributedDividend: 'SHAREHOLDER_DISTRIBUTED_DIVIDEND' as PostTypeEnum,
        ContactName: 'CONTACT_NAME' as PostTypeEnum,
        ContactRole: 'CONTACT_ROLE' as PostTypeEnum,
        ContactEmail: 'CONTACT_EMAIL' as PostTypeEnum,
        ContactPhone: 'CONTACT_PHONE' as PostTypeEnum,
        ShareholderId: 'SHAREHOLDER_ID' as PostTypeEnum,
        NoOfSharesLastYear: 'NO_OF_SHARES_LAST_YEAR' as PostTypeEnum,
        UpdatedBy: 'UPDATED_BY' as PostTypeEnum,
        UpdatedDate: 'UPDATED_DATE' as PostTypeEnum,
        TransactionType: 'TRANSACTION_TYPE' as PostTypeEnum,
        TransactionDate: 'TRANSACTION_DATE' as PostTypeEnum,
        TransactionTime: 'TRANSACTION_TIME' as PostTypeEnum,
        SellerId: 'SELLER_ID' as PostTypeEnum,
        BuyerId: 'BUYER_ID' as PostTypeEnum,
        TransactionNumberOfShares: 'TRANSACTION_NUMBER_OF_SHARES' as PostTypeEnum,
        Remuneration: 'REMUNERATION' as PostTypeEnum
    };
}


