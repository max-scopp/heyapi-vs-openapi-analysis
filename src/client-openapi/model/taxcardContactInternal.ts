/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Country } from './country';
import { Change } from './change';


export interface TaxcardContactInternal { 
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    readonly displayName?: string;
    phoneNumberMobileCountry?: Country;
    phoneNumberMobile?: string;
    email?: string;
}

