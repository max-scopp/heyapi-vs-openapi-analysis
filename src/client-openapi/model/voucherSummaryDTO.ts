/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { VoucherDetailsDTO } from './voucherDetailsDTO';


export interface VoucherSummaryDTO { 
    voucherReceptionData?: VoucherDetailsDTO;
    attestationVouchersData?: VoucherDetailsDTO;
    nonPostedVouchersData?: VoucherDetailsDTO;
    automatedVouchersData?: VoucherDetailsDTO;
}

