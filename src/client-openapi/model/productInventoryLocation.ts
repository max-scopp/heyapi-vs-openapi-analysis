/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Product } from './product';
import { Change } from './change';
import { InventoryLocation } from './inventoryLocation';
import { Inventory } from './inventory';


export interface ProductInventoryLocation { 
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    product: Product;
    inventory: Inventory;
    inventoryLocation?: InventoryLocation;
    isMainLocation?: boolean;
    readonly stockOfGoods?: number;
}

