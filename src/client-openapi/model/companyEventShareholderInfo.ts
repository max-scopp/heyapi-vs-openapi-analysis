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
import { Shareholder } from './shareholder';
import { ShareholderRegisterData } from './shareholderRegisterData';


export interface CompanyEventShareholderInfo { 
    yearEndReport?: YearEndReport;
    readonly eventShareholderGroupId?: number;
    shareholder?: Shareholder;
    numberOfShares?: ShareholderRegisterData;
    readonly calculatedNumberOfShares?: number;
    distributedDividend?: ShareholderRegisterData;
    readonly calculatedDistributedDividend?: number;
}

