/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Department } from './department';
import { Customer } from './customer';
import { Country } from './country';
import { Change } from './change';


export interface Contact { 
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    firstName?: string;
    lastName?: string;
    displayName?: string;
    email?: string;
    phoneNumberMobileCountry?: Country;
    phoneNumberMobile?: string;
    phoneNumberWork?: string;
    customer?: Customer;
    department?: Department;
    readonly isInactive?: boolean;
}

