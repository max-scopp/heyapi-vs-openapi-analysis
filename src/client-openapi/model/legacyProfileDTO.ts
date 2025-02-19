/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { MenuItem } from './menuItem';
import { ProfileLoginCompany } from './profileLoginCompany';


export interface LegacyProfileDTO { 
    readonly employeeName?: string;
    readonly companyName?: string;
    readonly profileImageUrl?: string;
    readonly menuItems?: Array<MenuItem>;
    readonly site?: string;
    readonly userLocale?: string;
    readonly loginCompanies?: Array<ProfileLoginCompany>;
}

