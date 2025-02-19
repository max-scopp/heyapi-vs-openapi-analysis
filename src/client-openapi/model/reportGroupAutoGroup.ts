/**
 * Tripletex API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { ReportGroupOrderBy } from './reportGroupOrderBy';


export interface ReportGroupAutoGroup { 
    type?: number;
    defaultOrder?: ReportGroupAutoGroup.DefaultOrderEnum;
    orderBy?: Array<ReportGroupOrderBy>;
    version?: number;
}
export namespace ReportGroupAutoGroup {
    export type DefaultOrderEnum = 'Ascending' | 'Descending';
    export const DefaultOrderEnum = {
        Ascending: 'Ascending' as DefaultOrderEnum,
        Descending: 'Descending' as DefaultOrderEnum
    };
}


