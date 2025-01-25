/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { TravelExpenseRate } from './travelExpenseRate';
import { TravelExpense } from './travelExpense';
import { Change } from './change';
import { TravelExpenseRateCategory } from './travelExpenseRateCategory';


export interface PerDiemCompensation { 
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    travelExpense?: TravelExpense;
    rateType?: TravelExpenseRate;
    rateCategory?: TravelExpenseRateCategory;
    countryCode?: string;
    /**
     * Optional travel expense zone id. If not specified, the value from field zone will be used.
     */
    travelExpenseZoneId?: number;
    /**
     * Set what sort of accommodation was had overnight.
     */
    overnightAccommodation?: PerDiemCompensation.OvernightAccommodationEnum;
    location: string;
    address?: string;
    count?: number;
    rate?: number;
    amount?: number;
    isDeductionForBreakfast?: boolean;
    isDeductionForLunch?: boolean;
    isDeductionForDinner?: boolean;
}
export namespace PerDiemCompensation {
    export type OvernightAccommodationEnum = 'NONE' | 'HOTEL' | 'BOARDING_HOUSE_WITHOUT_COOKING' | 'BOARDING_HOUSE_WITH_COOKING';
    export const OvernightAccommodationEnum = {
        None: 'NONE' as OvernightAccommodationEnum,
        Hotel: 'HOTEL' as OvernightAccommodationEnum,
        BoardingHouseWithoutCooking: 'BOARDING_HOUSE_WITHOUT_COOKING' as OvernightAccommodationEnum,
        BoardingHouseWithCooking: 'BOARDING_HOUSE_WITH_COOKING' as OvernightAccommodationEnum
    };
}


