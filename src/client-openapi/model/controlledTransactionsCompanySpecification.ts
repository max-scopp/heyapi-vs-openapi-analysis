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
import { ControlledTransactionsTransaction } from './controlledTransactionsTransaction';
import { ControlledTransactionsOutstanding } from './controlledTransactionsOutstanding';
import { GenericData } from './genericData';


export interface ControlledTransactionsCompanySpecification { 
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
     * The official identifier of the company
     */
    identifier?: string;
    /**
     * The official name of the company
     */
    companyName?: string;
    /**
     * The country where the company is registered
     */
    country?: string;
    /**
     * A list of transactions made between this company and users company
     */
    transactions?: Array<ControlledTransactionsTransaction>;
    /**
     * A list of outstanding accounts between this company and users company
     */
    outstandingBalances?: Array<ControlledTransactionsOutstanding>;
}

