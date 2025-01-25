/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Lookup1881RushHoursToll } from './lookup1881RushHoursToll';


export interface Lookup1881Price { 
    readonly vehicle?: Lookup1881Price.VehicleEnum;
    readonly price?: number;
    rushHoursToll?: Lookup1881RushHoursToll;
    readonly vehicleDescription?: string;
}
export namespace Lookup1881Price {
    export type VehicleEnum = 'NotSet' | 'CarDiesel' | 'CarGasolineOrHybrid' | 'CarZeroEmission' | 'TruckEuroV' | 'TruckEuroVI' | 'CarGeneral' | 'TruckGeneral';
    export const VehicleEnum = {
        NotSet: 'NotSet' as VehicleEnum,
        CarDiesel: 'CarDiesel' as VehicleEnum,
        CarGasolineOrHybrid: 'CarGasolineOrHybrid' as VehicleEnum,
        CarZeroEmission: 'CarZeroEmission' as VehicleEnum,
        TruckEuroV: 'TruckEuroV' as VehicleEnum,
        TruckEuroVi: 'TruckEuroVI' as VehicleEnum,
        CarGeneral: 'CarGeneral' as VehicleEnum,
        TruckGeneral: 'TruckGeneral' as VehicleEnum
    };
}


