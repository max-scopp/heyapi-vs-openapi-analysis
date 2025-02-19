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
import { GenericData } from './genericData';


export interface ControlledTransactionsRelatedCompanies { 
    yearEndReport?: YearEndReport;
    /**
     * Group ID
     */
    groupId?: number;
    /**
     * Sub group ID
     */
    subGroupId?: number;
    /**
     * Associated posts
     */
    posts?: Array<GenericData>;
    /**
     * The public identifier of the company
     */
    identifier?: string;
    /**
     * The name of the company
     */
    companyName?: string;
    /**
     * Country wherein the company is registered
     */
    country?: string;
}

