/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { MenuItemV2 } from './menuItemV2';


export interface ListResponseMenuItemV2 { 
    /**
     * Indicates whether there are more values available. Note: The value is not exact
     */
    readonly fullResultSize?: number;
    readonly from?: number;
    readonly count?: number;
    /**
     * Used to know if the paginated list has changed.
     */
    readonly versionDigest?: string;
    readonly values?: Array<MenuItemV2>;
}

