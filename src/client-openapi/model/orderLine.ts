/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Order } from './order';
import { OrderGroup } from './orderGroup';
import { Currency } from './currency';
import { Product } from './product';
import { Change } from './change';
import { VatType } from './vatType';
import { InventoryLocation } from './inventoryLocation';
import { Inventory } from './inventory';


export interface OrderLine { 
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    product?: Product;
    inventory?: Inventory;
    inventoryLocation?: InventoryLocation;
    description?: string;
    count?: number;
    /**
     * Unit price purchase (cost) excluding VAT in the order\'s currency
     */
    unitCostCurrency?: number;
    /**
     * Unit price of purchase excluding VAT in the order\'s currency
     */
    unitPriceExcludingVatCurrency?: number;
    currency?: Currency;
    /**
     * Markup given as a percentage (%)
     */
    markup?: number;
    /**
     * Discount given as a percentage (%)
     */
    discount?: number;
    vatType?: VatType;
    /**
     * Total amount on order line excluding VAT in the order\'s currency
     */
    readonly amountExcludingVatCurrency?: number;
    /**
     * Total amount on order line including VAT in the order\'s currency
     */
    readonly amountIncludingVatCurrency?: number;
    order?: Order;
    /**
     * Unit price of purchase including VAT in the order\'s currency
     */
    unitPriceIncludingVatCurrency?: number;
    isSubscription?: boolean;
    subscriptionPeriodStart?: string;
    subscriptionPeriodEnd?: string;
    orderGroup?: OrderGroup;
    /**
     * Defines the presentation order of the lines. Does not need to be, and is often not continuous. Only applicable if parent order has orderLineSorting as CUSTOM.
     */
    sortIndex?: number;
    /**
     * Only used for Logistics customers who activated the available inventory functionality. Represents whether the line has been picked up or not.
     */
    isPicked?: boolean;
    /**
     * Only used for Logistics customers who activated the available inventory functionality. Represents the pick date for an order line or null if the line was not picked.
     */
    pickedDate?: string;
    /**
     * Only used for Logistics customers who activated the Backorder functionality. Represents the quantity that was ordered. If nothing is specified, the ordered quantity will be the same as the delivered quantity.
     */
    orderedQuantity?: number;
}

