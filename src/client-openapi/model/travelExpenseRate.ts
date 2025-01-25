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
import { TravelExpenseRateCategory } from './travelExpenseRateCategory';


export interface TravelExpenseRate { 
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    rateCategory: TravelExpenseRateCategory;
    zone: string;
    rate?: number;
    breakfastDeductionRate?: number;
    lunchDeductionRate?: number;
    dinnerDeductionRate?: number;
}

