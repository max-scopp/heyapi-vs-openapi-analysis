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


export interface HeatfloorProduct { 
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    elNumber?: string;
    displayName?: string;
    vktype?: string;
    manufacturer?: string;
    readonly nomEffect?: number;
    readonly length?: number;
    readonly wattsPerMeter?: number;
    readonly nomResistance?: number;
}

