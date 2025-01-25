/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { CustomizedChecklistProperty } from './customizedChecklistProperty';


export interface ListResponseCustomizedChecklistProperty { 
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
    readonly values?: Array<CustomizedChecklistProperty>;
}

