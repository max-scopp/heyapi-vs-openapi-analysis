/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Employee } from './employee';


export interface YearEndAnnualAccountsFreeNoteLastModifiedInfo { 
    employee?: Employee;
    /**
     * The date of when the note has been modified
     */
    readonly date?: string;
    /**
     * The time of when the note has been modified
     */
    readonly time?: string;
}

