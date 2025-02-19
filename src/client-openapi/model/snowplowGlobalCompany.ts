/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface SnowplowGlobalCompany { 
    readonly 'package'?: string;
    readonly companyId?: number;
    readonly customerId?: number;
    readonly isPaying?: boolean;
    readonly customerType?: SnowplowGlobalCompany.CustomerTypeEnum;
    readonly pilotFeatures?: Array<string>;
    readonly registrationDate?: string;
    readonly startDate?: string;
    readonly isAccountant?: boolean;
    readonly organizationNumber?: number;
}
export namespace SnowplowGlobalCompany {
    export type CustomerTypeEnum = 'Mamut' | 'Agro' | 'Paying' | 'Free' | 'Test';
    export const CustomerTypeEnum = {
        Mamut: 'Mamut' as CustomerTypeEnum,
        Agro: 'Agro' as CustomerTypeEnum,
        Paying: 'Paying' as CustomerTypeEnum,
        Free: 'Free' as CustomerTypeEnum,
        Test: 'Test' as CustomerTypeEnum
    };
}


