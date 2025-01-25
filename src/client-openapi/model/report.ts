/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { ReportBlueprintV2 } from './reportBlueprintV2';
import { Change } from './change';


export interface Report { 
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    /**
     * Shortcut for Report name
     */
    readonly name?: string;
    /**
     * Shortcut for Report description
     */
    readonly description?: string;
    /**
     * helpComponent
     */
    helpComponent?: number;
    blueprint?: ReportBlueprintV2;
}

