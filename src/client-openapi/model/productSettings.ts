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


export interface ProductSettings { 
    id?: number;
    version?: number;
    readonly changes?: Array<Change>;
    readonly url?: string;
    moduleWarehouse?: boolean;
    hasWarehouseLocation?: boolean;
    readonly newCustomerAfterLogisticsRelease?: boolean;
    productSetCostFromOrderLine?: boolean;
    purchaseOrderDefaultComment?: string;
    modulePurchaseOrderNumberSeries?: boolean;
    purchaseOrderNumberSeries?: string;
    showOnboardingWizard?: boolean;
    moduleSuggestedProductNumber?: boolean;
    suggestedProductNumber?: string;
    purchaseOrderModule?: boolean;
}

