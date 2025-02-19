/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface KillSwitchDTO { 
    readonly feature?: KillSwitchDTO.FeatureEnum;
    readonly alive?: boolean;
    teams?: Array<KillSwitchDTO.TeamsEnum>;
}
export namespace KillSwitchDTO {
    export type FeatureEnum = 'AlwaysOn' | 'DummyTestSwitch' | 'DBActionListener' | 'WebHooks' | 'WOOTRIC_NPS' | 'LogEverythingJavascript' | 'CspFontSrc' | 'SalesForceEmbeddedChat' | 'Zendesk' | 'IntroductionWizard' | 'AutoInvoiceValidatorIncoming' | 'AutoInvoiceValidatorOutgoing' | 'KillBillUseNewMailSender' | 'ElmaLookup' | 'LinkMobilitySending' | 'ReportUriHeader' | 'CsrfValidation' | 'AuthorizeWebhookSending' | 'LargeArgumentsHelper' | 'SendSubscriptionInvoicingError' | 'AprilaV2' | 'KillLargeRequestsNearOOM' | 'DeleteFromArchive' | 'ReadEmployeeLoginInfoFromArchive' | 'Sentry' | 'SendInvoicesToSmartScan' | 'GlobalCache' | 'UserOnboardWizard' | 'BeehiveAuthManagersJSONRPC' | 'ZendeskSso' | 'FabricAIIntegration' | 'StrutsReadReplica' | 'Api2ReadReplica' | 'JsonRpcReadReplica' | 'JsonRpcReadReplicaTentative' | 'CompanyCustomerVendorNumberSequence' | 'MissingCompanyIdFilterUpdateDeleteQueriesLogging' | 'InvalidScaleLogging' | 'SemiGlobalReadsLogging' | 'TskUseGlobalCache' | 'KillBillAllowLongInvoiceNumberInKID' | 'EnhanceUpdateDeleteQueriesCompanyId' | 'WholesalerFailedLoginNotifications' | 'KillBillEfakturaLookup' | 'KillBillKYCFeature' | 'VismaConnectLogin' | 'VismaConnectIframe' | 'ArchiveRelationWebhook' | 'KrrBalanceSheetGlobalCache' | 'KrrFabricAiPredictionsInInbox' | 'KrrFabricAIProjectRulesEvent' | 'QueryTimeout' | 'UploadLimiting' | 'DisableInfoFTPLogging' | 'ConstrainCompanyIdUpdates' | 'GuiAddressScatterGather' | 'KillBillGlobalCacheForEhfAndEFakturaLookup' | 'KillBillSubscriptionInvoicingEvent' | 'ShardCompanyMappingIsSuspended' | 'TransactionTimeExceeded' | 'KillBillSequenceForNextInvoiceNumber' | 'React18Mount' | 'AccountDropdownWithHelp' | 'CreateCreditNoteJob' | 'NonCriticalExtremelySlowQueries' | 'SyncLoginAccess' | 'SyncProxyLoginAccess' | 'FilterNotificationsBasedOnAuth' | 'ResilienceMetrics' | 'UseLoginAccessForEmployee' | 'UseLoginAccessForEmployeeLoginInfo' | 'InvoiceAPIIndex' | 'GlobalCacheOnApiTokenLookupForSessionTokenCreation' | 'VismaConnectTokenFlow' | 'VismaConnectTokenFlowInvalidateSession' | 'NewCompanyChooser' | 'DeepScanUploadedContainerForMimeType' | 'InvoiceInAdvanceMigration' | 'VismaConnectValidateEmailOnEveryRequest' | 'BoligmappaResilience' | 'SalesforceWebhookForProjectManagerRole' | 'GlobalEventSystem' | 'Marketplace' | 'SalesforceSupport' | 'CleanupTripletexContactsJob' | 'FasterBRAlgorithms' | 'MPSInvoiceOverviewBanner' | 'NewDashboardReminderWidget' | 'NewReconciliationOptIn' | 'CustomerApiTripletexPagination' | 'PostingApiTripletexPagination' | 'CreateAccessToClientsJob' | 'ClearResellerProvisions' | 'SkipMissingTripletexOrdersInProvisioning' | 'NewProjectOnboarding' | 'OScoreFeedbackContactMeToggle' | 'CalculateHmacOnWebhook' | 'NewAddonsAuthorization';
    export const FeatureEnum = {
        AlwaysOn: 'AlwaysOn' as FeatureEnum,
        DummyTestSwitch: 'DummyTestSwitch' as FeatureEnum,
        DbActionListener: 'DBActionListener' as FeatureEnum,
        WebHooks: 'WebHooks' as FeatureEnum,
        WootricNps: 'WOOTRIC_NPS' as FeatureEnum,
        LogEverythingJavascript: 'LogEverythingJavascript' as FeatureEnum,
        CspFontSrc: 'CspFontSrc' as FeatureEnum,
        SalesForceEmbeddedChat: 'SalesForceEmbeddedChat' as FeatureEnum,
        Zendesk: 'Zendesk' as FeatureEnum,
        IntroductionWizard: 'IntroductionWizard' as FeatureEnum,
        AutoInvoiceValidatorIncoming: 'AutoInvoiceValidatorIncoming' as FeatureEnum,
        AutoInvoiceValidatorOutgoing: 'AutoInvoiceValidatorOutgoing' as FeatureEnum,
        KillBillUseNewMailSender: 'KillBillUseNewMailSender' as FeatureEnum,
        ElmaLookup: 'ElmaLookup' as FeatureEnum,
        LinkMobilitySending: 'LinkMobilitySending' as FeatureEnum,
        ReportUriHeader: 'ReportUriHeader' as FeatureEnum,
        CsrfValidation: 'CsrfValidation' as FeatureEnum,
        AuthorizeWebhookSending: 'AuthorizeWebhookSending' as FeatureEnum,
        LargeArgumentsHelper: 'LargeArgumentsHelper' as FeatureEnum,
        SendSubscriptionInvoicingError: 'SendSubscriptionInvoicingError' as FeatureEnum,
        AprilaV2: 'AprilaV2' as FeatureEnum,
        KillLargeRequestsNearOom: 'KillLargeRequestsNearOOM' as FeatureEnum,
        DeleteFromArchive: 'DeleteFromArchive' as FeatureEnum,
        ReadEmployeeLoginInfoFromArchive: 'ReadEmployeeLoginInfoFromArchive' as FeatureEnum,
        Sentry: 'Sentry' as FeatureEnum,
        SendInvoicesToSmartScan: 'SendInvoicesToSmartScan' as FeatureEnum,
        GlobalCache: 'GlobalCache' as FeatureEnum,
        UserOnboardWizard: 'UserOnboardWizard' as FeatureEnum,
        BeehiveAuthManagersJsonrpc: 'BeehiveAuthManagersJSONRPC' as FeatureEnum,
        ZendeskSso: 'ZendeskSso' as FeatureEnum,
        FabricAiIntegration: 'FabricAIIntegration' as FeatureEnum,
        StrutsReadReplica: 'StrutsReadReplica' as FeatureEnum,
        Api2ReadReplica: 'Api2ReadReplica' as FeatureEnum,
        JsonRpcReadReplica: 'JsonRpcReadReplica' as FeatureEnum,
        JsonRpcReadReplicaTentative: 'JsonRpcReadReplicaTentative' as FeatureEnum,
        CompanyCustomerVendorNumberSequence: 'CompanyCustomerVendorNumberSequence' as FeatureEnum,
        MissingCompanyIdFilterUpdateDeleteQueriesLogging: 'MissingCompanyIdFilterUpdateDeleteQueriesLogging' as FeatureEnum,
        InvalidScaleLogging: 'InvalidScaleLogging' as FeatureEnum,
        SemiGlobalReadsLogging: 'SemiGlobalReadsLogging' as FeatureEnum,
        TskUseGlobalCache: 'TskUseGlobalCache' as FeatureEnum,
        KillBillAllowLongInvoiceNumberInKid: 'KillBillAllowLongInvoiceNumberInKID' as FeatureEnum,
        EnhanceUpdateDeleteQueriesCompanyId: 'EnhanceUpdateDeleteQueriesCompanyId' as FeatureEnum,
        WholesalerFailedLoginNotifications: 'WholesalerFailedLoginNotifications' as FeatureEnum,
        KillBillEfakturaLookup: 'KillBillEfakturaLookup' as FeatureEnum,
        KillBillKycFeature: 'KillBillKYCFeature' as FeatureEnum,
        VismaConnectLogin: 'VismaConnectLogin' as FeatureEnum,
        VismaConnectIframe: 'VismaConnectIframe' as FeatureEnum,
        ArchiveRelationWebhook: 'ArchiveRelationWebhook' as FeatureEnum,
        KrrBalanceSheetGlobalCache: 'KrrBalanceSheetGlobalCache' as FeatureEnum,
        KrrFabricAiPredictionsInInbox: 'KrrFabricAiPredictionsInInbox' as FeatureEnum,
        KrrFabricAiProjectRulesEvent: 'KrrFabricAIProjectRulesEvent' as FeatureEnum,
        QueryTimeout: 'QueryTimeout' as FeatureEnum,
        UploadLimiting: 'UploadLimiting' as FeatureEnum,
        DisableInfoFtpLogging: 'DisableInfoFTPLogging' as FeatureEnum,
        ConstrainCompanyIdUpdates: 'ConstrainCompanyIdUpdates' as FeatureEnum,
        GuiAddressScatterGather: 'GuiAddressScatterGather' as FeatureEnum,
        KillBillGlobalCacheForEhfAndEFakturaLookup: 'KillBillGlobalCacheForEhfAndEFakturaLookup' as FeatureEnum,
        KillBillSubscriptionInvoicingEvent: 'KillBillSubscriptionInvoicingEvent' as FeatureEnum,
        ShardCompanyMappingIsSuspended: 'ShardCompanyMappingIsSuspended' as FeatureEnum,
        TransactionTimeExceeded: 'TransactionTimeExceeded' as FeatureEnum,
        KillBillSequenceForNextInvoiceNumber: 'KillBillSequenceForNextInvoiceNumber' as FeatureEnum,
        React18Mount: 'React18Mount' as FeatureEnum,
        AccountDropdownWithHelp: 'AccountDropdownWithHelp' as FeatureEnum,
        CreateCreditNoteJob: 'CreateCreditNoteJob' as FeatureEnum,
        NonCriticalExtremelySlowQueries: 'NonCriticalExtremelySlowQueries' as FeatureEnum,
        SyncLoginAccess: 'SyncLoginAccess' as FeatureEnum,
        SyncProxyLoginAccess: 'SyncProxyLoginAccess' as FeatureEnum,
        FilterNotificationsBasedOnAuth: 'FilterNotificationsBasedOnAuth' as FeatureEnum,
        ResilienceMetrics: 'ResilienceMetrics' as FeatureEnum,
        UseLoginAccessForEmployee: 'UseLoginAccessForEmployee' as FeatureEnum,
        UseLoginAccessForEmployeeLoginInfo: 'UseLoginAccessForEmployeeLoginInfo' as FeatureEnum,
        InvoiceApiIndex: 'InvoiceAPIIndex' as FeatureEnum,
        GlobalCacheOnApiTokenLookupForSessionTokenCreation: 'GlobalCacheOnApiTokenLookupForSessionTokenCreation' as FeatureEnum,
        VismaConnectTokenFlow: 'VismaConnectTokenFlow' as FeatureEnum,
        VismaConnectTokenFlowInvalidateSession: 'VismaConnectTokenFlowInvalidateSession' as FeatureEnum,
        NewCompanyChooser: 'NewCompanyChooser' as FeatureEnum,
        DeepScanUploadedContainerForMimeType: 'DeepScanUploadedContainerForMimeType' as FeatureEnum,
        InvoiceInAdvanceMigration: 'InvoiceInAdvanceMigration' as FeatureEnum,
        VismaConnectValidateEmailOnEveryRequest: 'VismaConnectValidateEmailOnEveryRequest' as FeatureEnum,
        BoligmappaResilience: 'BoligmappaResilience' as FeatureEnum,
        SalesforceWebhookForProjectManagerRole: 'SalesforceWebhookForProjectManagerRole' as FeatureEnum,
        GlobalEventSystem: 'GlobalEventSystem' as FeatureEnum,
        Marketplace: 'Marketplace' as FeatureEnum,
        SalesforceSupport: 'SalesforceSupport' as FeatureEnum,
        CleanupTripletexContactsJob: 'CleanupTripletexContactsJob' as FeatureEnum,
        FasterBrAlgorithms: 'FasterBRAlgorithms' as FeatureEnum,
        MpsInvoiceOverviewBanner: 'MPSInvoiceOverviewBanner' as FeatureEnum,
        NewDashboardReminderWidget: 'NewDashboardReminderWidget' as FeatureEnum,
        NewReconciliationOptIn: 'NewReconciliationOptIn' as FeatureEnum,
        CustomerApiTripletexPagination: 'CustomerApiTripletexPagination' as FeatureEnum,
        PostingApiTripletexPagination: 'PostingApiTripletexPagination' as FeatureEnum,
        CreateAccessToClientsJob: 'CreateAccessToClientsJob' as FeatureEnum,
        ClearResellerProvisions: 'ClearResellerProvisions' as FeatureEnum,
        SkipMissingTripletexOrdersInProvisioning: 'SkipMissingTripletexOrdersInProvisioning' as FeatureEnum,
        NewProjectOnboarding: 'NewProjectOnboarding' as FeatureEnum,
        OScoreFeedbackContactMeToggle: 'OScoreFeedbackContactMeToggle' as FeatureEnum,
        CalculateHmacOnWebhook: 'CalculateHmacOnWebhook' as FeatureEnum,
        NewAddonsAuthorization: 'NewAddonsAuthorization' as FeatureEnum
    };
    export type TeamsEnum = 'ANGRY_NERDS' | 'ANTS' | 'ASTRO' | 'ATEAM' | 'BEEHIVE' | 'BOND' | 'DATA_STREAM' | 'FINX' | 'GOLDSHARK' | 'KILLBILL' | 'KRR' | 'OPTIMUS' | 'PBC' | 'PHOENIX' | 'SECURITY' | 'SHEET_STORM' | 'TASK_FOX' | 'TOOLKITTENS' | 'TSK' | 'UNKNOWN';
    export const TeamsEnum = {
        AngryNerds: 'ANGRY_NERDS' as TeamsEnum,
        Ants: 'ANTS' as TeamsEnum,
        Astro: 'ASTRO' as TeamsEnum,
        Ateam: 'ATEAM' as TeamsEnum,
        Beehive: 'BEEHIVE' as TeamsEnum,
        Bond: 'BOND' as TeamsEnum,
        DataStream: 'DATA_STREAM' as TeamsEnum,
        Finx: 'FINX' as TeamsEnum,
        Goldshark: 'GOLDSHARK' as TeamsEnum,
        Killbill: 'KILLBILL' as TeamsEnum,
        Krr: 'KRR' as TeamsEnum,
        Optimus: 'OPTIMUS' as TeamsEnum,
        Pbc: 'PBC' as TeamsEnum,
        Phoenix: 'PHOENIX' as TeamsEnum,
        Security: 'SECURITY' as TeamsEnum,
        SheetStorm: 'SHEET_STORM' as TeamsEnum,
        TaskFox: 'TASK_FOX' as TeamsEnum,
        Toolkittens: 'TOOLKITTENS' as TeamsEnum,
        Tsk: 'TSK' as TeamsEnum,
        Unknown: 'UNKNOWN' as TeamsEnum
    };
}


