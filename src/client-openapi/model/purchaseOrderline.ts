/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { SupplierProduct } from './supplierProduct';
import { Currency } from './currency';
import { Product } from './product';
import { PurchaseOrder } from './purchaseOrder';
import { Change } from './change';


export interface PurchaseOrderline { 
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    purchaseOrder: PurchaseOrder;
    product?: Product;
    supplierProduct?: SupplierProduct;
    resaleProduct?: Product;
    description?: string;
    count?: number;
    /**
     * Used if the Purchase Order has a Goods received.
     */
    quantityReceived?: number;
    /**
     * Unit price purchase (cost) excluding VAT in the order\'s currency
     */
    unitCostCurrency?: number;
    /**
     * Unit price of purchase excluding VAT in the order\'s currency.If it\'s not specified,it takes the value from purchase price in productDTO
     */
    unitPriceExcludingVatCurrency?: number;
    /**
     * Unit list price of purchase excluding VAT in the order\'s currency.If it\'s not specified,it takes the value from purchase price in productDTO
     */
    unitListPriceCurrency?: number;
    /**
     * Unit  price including VAT in the order\'s currency.If it\'s not specified,it takes the value from purchase price in productDTO
     */
    unitPriceIncVatCurrency?: number;
    currency?: Currency;
    /**
     * Discount given as a percentage (%)
     */
    discount?: number;
    /**
     * Total amount on order line excluding VAT in the order\'s currency
     */
    amountExcludingVatCurrency?: number;
    /**
     * Total amount on order line including VAT in the order\'s currency
     */
    readonly amountIncludingVatCurrency?: number;
}

