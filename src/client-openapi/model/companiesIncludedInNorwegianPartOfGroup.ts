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


export interface CompaniesIncludedInNorwegianPartOfGroup { 
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
     * Company name
     */
    companyName?: string;
    /**
     * Organization number
     */
    organizationNumber?: string;
    /**
     * Net interest cost
     */
    netInterestCost?: number;
    /**
     * Net deductible interest cost
     */
    netDeductibleInterestCost?: number;
}

