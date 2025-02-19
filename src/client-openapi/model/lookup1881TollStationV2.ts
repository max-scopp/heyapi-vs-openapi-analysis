/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Lookup1881Coordinate } from './lookup1881Coordinate';
import { Lookup1881Price } from './lookup1881Price';


export interface Lookup1881TollStationV2 { 
    readonly name?: string;
    readonly prices?: Array<Lookup1881Price>;
    coordinate?: Lookup1881Coordinate;
    readonly time?: number;
    readonly distance?: number;
}

