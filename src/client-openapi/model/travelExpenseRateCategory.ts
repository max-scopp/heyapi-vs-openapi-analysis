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


export interface TravelExpenseRateCategory { 
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    readonly name?: string;
    ameldingWageCode?: number;
    wageCodeNumber?: string;
    isValidDayTrip?: boolean;
    isValidAccommodation?: boolean;
    isValidDomestic?: boolean;
    isValidForeignTravel?: boolean;
    isRequiresZone?: boolean;
    isRequiresOvernightAccommodation?: boolean;
    fromDate: string;
    toDate: string;
    type?: TravelExpenseRateCategory.TypeEnum;
}
export namespace TravelExpenseRateCategory {
    export type TypeEnum = 'PER_DIEM' | 'ACCOMMODATION_ALLOWANCE' | 'MILEAGE_ALLOWANCE';
    export const TypeEnum = {
        PerDiem: 'PER_DIEM' as TypeEnum,
        AccommodationAllowance: 'ACCOMMODATION_ALLOWANCE' as TypeEnum,
        MileageAllowance: 'MILEAGE_ALLOWANCE' as TypeEnum
    };
}


