/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Change } from './change';


export interface BringCredentials { 
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    /**
     * Bring username
     */
    username: string;
    /**
     * Bring customer number
     */
    customerNumber: string;
    /**
     * API token for Bring APIs
     */
    apiKey?: string;
    /**
     * Bring activation in Logistics module
     */
    moduleBring: boolean;
    /**
     * Bring preferred email
     */
    confirmationEmail: string;
}

