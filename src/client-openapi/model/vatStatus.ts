/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Company } from './company';
import { VatPaymentStatus } from './vatPaymentStatus';
import { VatDeliveryStatus } from './vatDeliveryStatus';


export interface VatStatus { 
    company?: Company;
    /**
     * Year of VAT
     */
    readonly year?: number;
    /**
     * VAT term
     */
    readonly term?: number;
    deliveryStatus?: VatDeliveryStatus;
    paymentStatus?: VatPaymentStatus;
}

