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


export interface AltinnInstance { 
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    /**
     * The altinn archive reference
     */
    altinnId?: string;
    /**
     * The partyId in altinn - refering to the organization
     */
    partyId?: string;
    /**
     * The id of the instance in Altinn
     */
    instanceGuid?: string;
    /**
     * The initials and date of when the instance was created
     */
    createdInfo?: string;
}

