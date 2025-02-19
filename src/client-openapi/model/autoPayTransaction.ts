/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Account } from './account';
import { Payment } from './payment';
import { Bank } from './bank';
import { Employee } from './employee';
import { Posting } from './posting';
import { Currency } from './currency';
import { Change } from './change';
import { Voucher } from './voucher';


export interface AutoPayTransaction extends Payment { 
    readonly sendToBank?: boolean;
    readonly smsApproval?: boolean;
    readonly rejectionMessage?: string;
}
export namespace AutoPayTransaction {
}


