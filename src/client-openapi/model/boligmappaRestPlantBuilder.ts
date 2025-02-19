/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { PlantOwner } from './plantOwner';


export interface BoligmappaRestPlantBuilder { 
    /**
     * The type of the plant: 1 = Building Plant, 2 = Property Plant
     */
    plantType?: number;
    /**
     * The building type of the plant
     */
    buildingType?: string;
    /**
     * The share number of the plant
     */
    shareNumber?: number;
    /**
     * The owners of the plant. Only Property Plants have owners
     */
    owners?: Array<PlantOwner>;
    /**
     * The unit number of the plant. It is copied from the Address of the Plant
     */
    unitNumber?: string;
    /**
     * The city of the plant. It is copied from the Address of the Plant
     */
    city?: string;
    /**
     * The postal code of the plant. It is copied from the Address of the Plant
     */
    postalCode?: string;
}

