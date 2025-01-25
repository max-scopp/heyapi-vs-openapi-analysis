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


export interface Address { 
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    addressLine1?: string;
    addressLine2?: string;
    postalCode?: string;
    city?: string;
    country?: Country;
    readonly displayName?: string;
    readonly addressAsString?: string;
    readonly displayNameInklMatrikkel?: string;
    knr?: number;
    gnr?: number;
    bnr?: number;
    fnr?: number;
    snr?: number;
    unitNumber?: string;
}

